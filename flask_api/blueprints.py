from flask import Blueprint, jsonify, request
from flask_api.models import Todo, db
from flask_api.utils import todo_to_dict

main = Blueprint('main', __name__)


@main.route('/todos/', methods=['GET'])
def list_all_todos():
    return jsonify([*map(todo_to_dict, Todo.query.all())])


@main.route('/todos/<int:todo_id>', methods=['GET'])
def list_todo(todo_id):
    todo = Todo.query.filter_by(id=todo_id).first()
    return jsonify(todo_to_dict(todo))


@main.route('/todos/', methods=['POST'])
def add_todo():
    post_data = request.get_json()
    if not post_data:
        response = {'code': 400, 'message': 'Invalid payload.'}
        return jsonify(response), response.get('code')

    task = post_data.get('task')
    db.session.add(Todo(task=task))
    db.session.commit()

    response = {'code': 201, 'message': 'Task added.'}
    return jsonify(response), response.get('code')


@main.route('/todos/<int:todo_id>', methods=['PATCH'])
def update_todo():
    pass


@main.route('/todos/<int:todo_id>', methods=['DELETE'])
def delete_todo():
    pass
