// Core
import React, { Component } from 'react';

// Components
import Todo from '../Todo';
import Modal from '../Modal';

// Styles
import Styles from './styles.m.css';

export default class Todos extends Component {
  constructor() {
    super();

    this.state = {
      tasksFilter: '',
      saveButton: true,
      isModalShown: false,
      todos: [
        {
          id: '3',
          title: 'Hello world 101',
          description: 'normal todo',
          done: true,
          priority: 'normal',
        },
        {
          id: '2',
          title: 'Master JS and React',
          description: 'finish Udemy courses',
          done: true,
          priority: 'normal',
        },
        {
          id: '6',
          title: '1',
          description: 'finish Udemy courses',
          done: false,
          priority: 'low',
        },
        {
          id: '41',
          title: '2',
          description: 'finish Udemy courses',
          done: true,
          priority: 'low',
        },
        {
          id: '4',
          title: '3',
          description: 'finish Udemy courses',
          done: true,
          priority: 'low',
        },
      ],
      done: false,
      priority: ''
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.createTodo = this.createTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.todoDone = this.todoDone.bind(this);
    this.updateTasksFilter = this.updateTasksFilter.bind(this);
  }

  toggleModal() {
    const { isModalShown } = this.state;

    if (!isModalShown) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
    this.setState(prevState => ({
      isModalShown: !prevState.isModalShown,
    }));
  }

  handleOutsideClick(e) {
    if (this.node.contains(e.target)) {
      return;
    }

    this.toggleModal();
  }

  createTodo(todo) {
    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
      saveButton: true
    }));
  }

  updateTodo(todo) {
    this.setState(({ todos }) => ({
      todos: [todo, ...todos],

    }));
  }

  deleteTodo(id) {
    const { todos } = this.state;

    const newTodos = todos.filter(todo => {
      return todo.id !== id;
    });

    this.setState({
      todos: newTodos,
    });
  }

  todoDone(id) {
    const { todos } = this.state;

    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });

    this.setState({
      todos: newTodos,
    });
  }

  editTodo(id) {
    const { todos } = this.state;

    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        console.log(todo);
      }
      return todo;
    });

    this.setState({
      todos: updatedTodos,
      saveButton: false
    });
  }

  filterTasks = todo => {

    const { tasksFilter, done, priority } = this.state;

    if (done) {
    return todo.done === true;
    }

    if(!done && priority) {
      switch (priority) {
        case 'high':
          return todo.priority === priority

        case 'normal':
          return todo

        case 'low':
          return todo.priority === priority;

        default:
          return  todo.priority === priority
      }

    }


    return todo.title.toLowerCase().includes(tasksFilter);
  };

  updateTasksFilter(event) {
    this.setState({
      tasksFilter: event.target.value.toLocaleLowerCase(),
    });
  }


  handleInputChange(event) {
    const { target } = event;
    const { value } = target;
    const { name } = target;

    const {done} = this.state;


    this.setState({
      [name]: value,
      priority: name === 'priority' ? value : '',
      done: !done
    });
    console.log('NAME:',event.target.name)
    console.log('VALUE:',event.target.value)


    // if(name === 'priority') {
    //   this.setState({
    //     [name]: value,
    //     priority: value,
    //     done: false
    //   });
    // }
    //
    // if (name === 'done') {
    //   this.setState({
    //     [name]: value,
    //     done: !done
    //   });
    //
    // }



  }


  render() {
    const { todos, isModalShown, saveButton, tasksFilter} = this.state;

    const completed = (a, b) => (a > b) - (a < b);

    const todoJSX = todos
      .sort((a, b) => completed(a.done, b.done))
      .filter(this.filterTasks)
      .map(todo => (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          description={todo.description}
          done={todo.done}
          priority={todo.priority}
          deleteTodo={this.deleteTodo}
          todoDone={this.todoDone}
          toggleModal={this.toggleModal}
        />
      ));

    return (

        <main>
          <div className="container">
            <section className={Styles.toolbar}>
              <div>
                <input
                  className="searchTodo"
                  type="text"
                  placeholder="search by title"
                  value={tasksFilter}
                  onChange={this.updateTasksFilter}
                />
              </div>
              <div>
                <select name="done" className="status" defaultValue="open" onChange={this.handleInputChange}>
                  <option value="open">open</option>
                  <option value="done">done</option>
                </select>
              </div>
              <div>
                <select name="priority" className="priority" defaultValue="normal" onChange={this.handleInputChange}>
                  <option value="high">high</option>
                  <option value="normal">normal</option>
                  <option value="low">low</option>
                </select>
              </div>
              <div>
                <button className="button create-todo" type="button" onClick={this.toggleModal}>
                  create
                </button>
              </div>
            </section>
            <section className={Styles.todos}>
              <ul className={Styles.grid}>
                {
                  todoJSX
                }
                </ul>
            </section>
          </div>
          <div
            ref={node => {
              this.node = node;
            }}
          >
            {isModalShown && (
              <Modal
                createTodo={this.createTodo}
                editTodo={this.editTodo}
                updateTodo = {this.updateTodo}
                toggleModal={this.toggleModal}
                saveButton = {saveButton}
              />
            )}
            {isModalShown && <div className={Styles.modalWrapper} />}
          </div>
        </main>
    );
  }
}
