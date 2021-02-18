from dotenv import load_dotenv
load_dotenv()

from app import app, db
from app.models import User

with app.app_context():
  db.drop_all()
  db.create_all()

  kloie = User(username='kloie', password='password')


  db.session.add(kloie)

  db.session.commit()