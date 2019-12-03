// Core
import React, { PureComponent } from 'react';
import cx from 'classnames';
import { TodoProvider } from '../ThemeContext/ThemeContext';

// Styles
import Styles from './Styles.m.css';

export default class Todo extends PureComponent {
  constructor() {
    super();

    this.deleteTodo = this.deleteTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.todoDone = this.todoDone.bind(this);
  }

  deleteTodo() {
    const { id, deleteTodo } = this.props;

    deleteTodo(id);
  }

  todoDone() {
    const { todoDone, id } = this.props;

    todoDone(id);
  }

  editTodo(event) {
    console.log(event.target.dataset);
    const { toggleModal, id, title, description, priority } = this.props;
    console.log(id, title, description, priority);

    toggleModal();
  }

  render() {
    const { title, description, priority, id, done } = this.props;

    return (
        <TodoProvider value={{
          id,
        }}
        >
      <li className={cx(Styles.todoItem, { [Styles.completed]: done })}>
        <h4 className="title">{title}</h4>
        <div className={Styles.description}>{description}</div>
        <div className={Styles.todoItem__footer}>
          <div className={Styles.priorityBox}>{priority}</div>
          <div className={Styles.actionBox}>
            <div className={Styles.actionBox__menu}>...</div>
            <div className={Styles.actions}>
              <button className="button btn btn-dark" type="button" onClick={this.todoDone}>
                done
              </button>
              <button
                  id='editButton'
                className="button btn btn-dark"
                type="button"
                data-id={id}
                onClick={this.editTodo}
              >
                edit
              </button>
              <button className="button btn btn-dark" type="button" onClick={this.deleteTodo}>
                delete
              </button>
            </div>
          </div>
        </div>
      </li>
      </TodoProvider>

    );
  }
}
