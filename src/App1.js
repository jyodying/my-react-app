/*
In the previous iteration of this todo list app, we pulled in todos data from a JSON file and mapped over it to display the todo items.

Eventually we'll want to be able to modify the data, which will only happen if we've "loaded" the data in to the component's state

Challenge: Change the <App /> component into a stateful class component and load the imported `todosData` into state.
*/

import React, { Component } from "react"

import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import MainContent from './MainContent';
import Footer from "./Footer"

import TodoItem1 from "./TodoItem1"
import todosData from "./todosData"

function handleClick() {
    console.log("I was clicked")
}

// https://reactjs.org/docs/events.html#supported-events

class App1 extends Component {
    constructor() {
        super()
        this.state = {
            //    todos: todosData
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }


    render() {
        //const todoItems = this.state.todos.map(item => <TodoItem1 key={item.id} item={item} />)
        // {todoItems}
        return (
            <div className="todo-list">

                <img onMouseOver={() => console.log("Hovered!")} src="https://www.fillmurray.com/200/100" alt="" />
                <br />
                <br />
                <button onClick={handleClick}>Click me</button>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
            </div>
        )
    }
}

export default App1