from flask import Blueprint, request, make_response
from flask_login import login_user, logout_user
from werkzeug.datastructures import MultiDict
from flask_wtf.csrf import generate_csrf

session = Blueprint('session', __name__)
