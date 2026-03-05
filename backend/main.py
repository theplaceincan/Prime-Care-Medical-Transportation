from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
from typing import List, Annotated
from database import engine, Base, SessionLocal
from sqlalchemy.orm import Session
from passlib.context import CryptContext
import models
import os
from datetime import datetime, timedelta
from jose import jwt

app = FastAPI()

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Create tables in Postgres based on my models
Base.metadata.create_all(bind=engine)

# JWT settings
JWT_SECRET = os.getenv("JWT_SECRET")
JWT_ALGORITHM = os.getenv("JWT_ALGORITHM", "HS256")
JWT_EXPIRE_MINUTES = int(os.getenv("JWT_EXPIRE_MINUTES", "60"))

if not JWT_SECRET:
  raise RuntimeError("JWT_SECRET is missing in backend/.env")

# Helper ============================

# create access tokens for login
def create_access_token(user_id: str):
  expire = datetime.utcnow() + timedelta(minutes=JWT_EXPIRE_MINUTES)
  payload = {
    "sub": user_id,
    "exp": expire
  }
  return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)

# This is for giving every route a database session
def get_db():
  db = SessionLocal()
  try:
    yield db
  finally:
    db.close()

# Models ============================

class RegisterRequest(BaseModel):
  email: str
  password: str
  first_name: str
  last_name: str
  phone: str
  
class LoginRequest(BaseModel):
  email: str
  password: str

# Routes ============================

# Login -----

# Process:
# - user enters email/password
# - backend fetches user
# - bcrypt.verify(password, hash)
#   - if valid, create & return JWT token
#   - else, return fail
@app.post('/auth/login')
def login_user(data: LoginRequest, db: Session = Depends(get_db)):
  user = db.query(models.User).filter(models.User.email == data.email).first()
  
  if not user:
    raise HTTPException(status_code=401, detail="Invalid credentials")
  if not pwd_context.verify(data.password, user.password_hash):
    raise HTTPException(status_code=401, detail="Invalid credentials")
  
  token = create_access_token(str(user.id))
  
  return {
    "access_token": token,
    "token_type": "bearer",
    "user": {
      "id": str(user.id),
      "email": user.email,
      "first_name": user.first_name,
      "last_name": user.last_name,
      "phone": user.phone,
      "role": user.role
    }
  }

# Register -----

@app.post('/auth/register')
def register_user(data: RegisterRequest, db: Session = Depends(get_db)):
  hashed_password = pwd_context.hash(data.password)
  user = models.User(
    email = data.email,
    password_hash = hashed_password,
    first_name = data.first_name,
    last_name = data.last_name,
    phone = data.phone
  )
  db.add(user)
  db.commit()
  return {"message": "User created"}

# Health ------

@app.get("/health")
def health():
  return {"status": "ok"}

@app.get("/")
def root():
  return {"message": "API is running. Go to /health to see health"}