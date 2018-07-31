from flask import jsonify


def todo_serializer(todo):
    """ Serialize a To-Do object to a dict """
    todo_dict = {'id': todo.id, 'task': todo.task, 'done': todo.done}
    return todo_dict


def generate_response(code, message, todo=None):
    """ Generate a Flask response with a json playload and HTTP code  """
    if todo:
        return jsonify({'code': code, 'message': message, 'todo': todo}), code
    return jsonify({'code': code, 'message': message}), code
