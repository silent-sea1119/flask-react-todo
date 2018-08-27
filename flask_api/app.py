import os
from flask import Flask, jsonify
from flask_api.config import config
from flask_api.models import db
from flask_api.blueprints import todos
from flask_api.utils import generate_response

app = Flask(__name__)

env_config = os.getenv('FLASK_CONFIG', 'dev')

app.config.from_object(config[env_config])
db.init_app(app)

with app.app_context():
    db.create_all()


@app.errorhandler(404)
def not_found(e):
    return generate_response(404, 'Resource not found.')


@app.errorhandler(400)
def bad_request(e):
    return generate_response(400, 'Bad request.')


app.register_blueprint(todos)

if __name__ == '__main__':
    app.run(host='0.0.0.0')
