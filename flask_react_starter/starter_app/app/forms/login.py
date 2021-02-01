from flask_wtf import FlaskForm
from wtforms import PasswordField
from wtforms.validators import InputRequired


class LoginForm(FlaskForm):
    password = PasswordField('Password', validators=[
                             InputRequired('Please provide a valid password.')])
