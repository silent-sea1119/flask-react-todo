import os
from flask import Flask, jsonify
from flask_api.config import config

app = Flask(__name__)

env_config = os.getenv('FLASK_CONFIG', 'dev')

app.config.from_object(config[env_config])

@app.route('/')
def hello():
    return jsonify({'response': "It's working"})


if __name__ == '__main__':
    app.run()
