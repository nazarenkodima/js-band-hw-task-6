// Core
import React, { Component } from 'react';
import TodoContext from '../ThemeContext/ThemeContext';

// Instruments
import Styles from './styles.m.css';

export default class Modal extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      description: '',
      priority: 'normal',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.createTodo = this.createTodo.bind(this);
    this.cancelTodo = this.cancelTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  componentDidMount() {
    const { updateTodo, toggleModal } = this.props;


    console.log(this.context);


    //  todos.map(todo => {
    //   if (todo.id === this.id) {
    //     console.log('1111',todo);
    //   }
    // });

    // updateTodo({
    //   ...id
    // })
  }


  handleInputChange(event) {
    const { target } = event;
    const { value } = target;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  createTodo() {
    const { createTodo, toggleModal } = this.props;
    const { title, description, priority } = this.state;


    if (!title.trim()) {
      return null;
    }

    createTodo({
      id: Date.now().toString(),
      title,
      description,
      done: false,
      priority,
    });

    toggleModal();
  }

  updateTodo() {
    const { updateTodo, toggleModal } = this.props;

    console.log(this.context);

    updateTodo({
      ...id
    })


  }

  cancelTodo() {
    const { toggleModal } = this.props;
    toggleModal();
  }

  render() {
    const { title, description, priority } = this.state;

    const { saveButton } = this.props;

    console.log('savebutton',saveButton)
    // const { save } = this.context;

    return (
      <>
        <div className={Styles.todoModal}>
          <label htmlFor="title">
            <input
              className={Styles.createInput}
              name="title"
              type="text"
              placeholder="title"
              value={title}
              onChange={this.handleInputChange}
            />
          </label>
          <label htmlFor="description">
            <textarea
              value={description}
              name="description"
              className={Styles.createDescription}
              cols="30"
              rows="10"
              placeholder="description"
              onChange={this.handleInputChange}
            />
          </label>
          <select
            className="create-priority"
            name="priority"
            value={priority}
            onChange={this.handleInputChange}
          >
            <option value="high">high</option>
            <option value="normal">normal</option>
            <option value="low">low</option>
          </select>
          <div className={Styles.modalActions}>
            <div>
              <button
                className="button btn btn-dark cancel-todo"
                type="button"
                onClick={this.cancelTodo}
              >
                Cancel
              </button>
            </div>
            <div>
              {saveButton ? (
                <button
                  className="button btn btn-dark save-todo"
                  type="button"
                  onClick={this.createTodo}
                >
                  Save
                </button>
              ) : (
                <button
                    className="button btn btn-dark update-todo"
                    type="button"
                    onClick={this.updateTodo}>
                  Update
                </button>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

Modal.contextType = TodoContext;
