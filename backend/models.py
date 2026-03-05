import uuid
from sqlalchemy import Column, String, DateTime
from sqlalchemy.sql import func
from sqlalchemy.dialects.postgresql import UUID

from database import Base

# User table
class User(Base):
  __tablename__ = "users"

  id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
  email = Column(String, unique=True, nullable=False)
  password_hash = Column(String, nullable=False)
  first_name = Column(String)
  last_name = Column(String)
  phone = Column(String)
  role = Column(String, default="rider")

  created_at = Column(
    DateTime(timezone=True),
    server_default=func.now()
  )