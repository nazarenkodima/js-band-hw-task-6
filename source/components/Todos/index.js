// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.m.css';

export default class Todos extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
        <>
            <div className="container">
              <section className={Styles.todos}>
                <h1>todos</h1>
              </section>
            </div>
        </>
    );
  }
}
