import React from 'react';
import TodoItem from 'TodoItem'

function MainContent() {
    return (
        <main>
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