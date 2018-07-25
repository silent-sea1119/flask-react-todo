import os
from flask import Flask, jsonify
from flask_api.config import config
from flask_api.models import db
from flask_api.blueprints import main

app = Flask(__name__)

env_config = os.getenv('FLASK_CONFIG', 'dev')

app.config.from_object(config[env_config])
db.init_app(app)

with app.app_context():
    db.create_all()


@app.route('/')
def hello():
    return jsonify({'response': "It's working"})


app.register_blueprint(main)

if __name__ == '__main__':
    app.run()
