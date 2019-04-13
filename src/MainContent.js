import React from 'react';
import TodoItem from './TodoItem'
import Contacts from './Contacts';

function MainContent() {
    return (
        <main>
            <Contacts />
            <p>This where most of my content will go&hellip;</p>
            <div className="todo-list">
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </main>
    )

}

export default MainContent