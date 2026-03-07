# FastAPI Backend Info

main.py
database.py
models/
routes/
schemas/

# How it works

When a request comes in, FastAPI will:
1. Match the URL + HTTP method to a function (inside routes/)
2. Validate the input using pydantic models (in schemas/)
3. The handler then:
   - talks to the database (using SQLAlchemy in models/)
   - checks auth (JWT/session)
   - applies business rules
4. The handler will return an output (often shaped by a schema/ model)

# Each folder/file purpose

main.py       : creates the FastAPI app and plug in routers

routes/       : api endpoints

schemas/      : pydantic models, defines what's accepted and returned

models/       : database tables

database.py   : db session and engine

# Commands

pip install fastapi uvicorn sqlalchemy alembic psycopg2-binary python-dotenv pydantic[email] python-jose[cryptography] passlib[bcrypt] supabase

// ignore this one
pip uninstall bcrypt
pip install "bcrypt<5"

pip uninstall bcrypt -y
pip install bcrypt==4.0.1