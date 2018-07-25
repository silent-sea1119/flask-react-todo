def todo_to_dict(todo):
    todo_dict = {
        'id': todo.id,
        'task': todo.task,
        'done': todo.done
    }
    return todo_dict