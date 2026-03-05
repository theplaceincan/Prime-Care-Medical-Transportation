import os
from dotenv import load_dotenv
from sqlalchemy import create_engine  # connects to Postgres
from sqlalchemy.orm import sessionmaker, declarative_base

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

# Permanent connection settings to Postgres
engine = create_engine(DATABASE_URL, pool_pre_ping=True)

# database session factory
# short-lived DB session/connection whenever a request comes in
SessionLocal = sessionmaker(
  autocommit=False,
  autoflush=False,
  bind=engine
)

# parent class for tables
Base = declarative_base()