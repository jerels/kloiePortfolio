from flask import Blueprint, request, make_response
from flask_login import login_user, logout_user
from werkzeug.datastructures import MultiDict
from flask_wtf.csrf import generate_csrf
from ..forms.login import LoginForm
from ..models import User

session = Blueprint('session', __name__)


@session.route('/login', methods=['POST'])
def login():
    data = MultiDict(mapping=request.json)
    form = LoginForm(data)
    if form.validate():
        user = User.query.filter(User.username == 'kloie')
        if user and user.checkPassword(data['password']):
            login_user(user)
        else:
            res = make_response({'errors': ['User does not exist']}, 401)
            return res
    else:
        res = make_response(
            {'errors': [form.errors[error][0] for error in form.errors]}, 401)
        return res
