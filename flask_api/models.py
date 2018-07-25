from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Todo(db.Model):
    __tablename__ = 'todos'

    id = db.Column(db.Integer, primary_key=True)
    task = db.Column(db.String(255), nullable=False)
    done = db.Column(db.Boolean(), default=False, nullable=False)

    def __repr__(self):
        if len(self.task) < 40:
            return '<Task {}'.format(self.task)
        return '<Task {}'.format(self.task[:40])
