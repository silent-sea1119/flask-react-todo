from flask import Blueprint, jsonify, request
from flask_api.models import Todo, db
from flask_api.utils import todo_to_dict, generate_response

todos = Blueprint('todos', __name__)


@todos.route('/todos/', methods=['GET'])
def list_all_todos():
    return jsonify([*map(todo_to_dict, Todo.query.all())])


@todos.route('/todos/<int:todo_id>', methods=['GET'])
def list_todo(todo_id):
    todo = Todo.query.filter_by(id=todo_id).first()
    if not todo:
        return generate_response(404, 'Task not found.')

    return jsonify(todo_to_dict(todo))


@todos.route('/todos/', methods=['POST'])
def add_todo():
    post_data = request.get_json()
    if not post_data:
        return generate_response(400, 'Invalid payload.')

    task = post_data.get('task')
    db.session.add(Todo(task=task))
    db.session.commit()

    return generate_response(201, 'Task added.')


@todos.route('/todos/<int:todo_id>', methods=['PUT'])
def update_todo(todo_id):
    todo = Todo.query.filter_by(id=todo_id).first()
    if not todo:
        return generate_response(404, 'Task not found.')

    post_data = request.get_json()
    if not post_data:
        return generate_response(400, 'Invalid payload.')

    todo.task = post_data.get('task') or todo.task
    todo.done = post_data.get('done') or todo.done
    db.session.commit()

    return generate_response(200, 'Task updated.')


@todos.route('/todos/<int:todo_id>', methods=['DELETE'])
def delete_todo(todo_id):
    todo = Todo.query.filter_by(id=todo_id).first()
    if not todo:
        return generate_response(404, 'Task not found.')

    db.session.delete(todo)
    db.session.commit()
    return generate_response(200, 'Task deleted.')
