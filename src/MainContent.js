import React from 'react';
import TodoItem from './TodoItem'
import Contacts from './Contacts';
import Joke from './Joke';
import jokesData from "./jokesData"
import Product from './Product';
import productsData from "./vschoolProducts"

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex

function MainContent() {
    const productComponents = productsData.map(item => <Product key={item.id} product={item} />)
    const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)
    return (
        <main>
            {productComponents}
            {jokeComponents}
            <Joke punchLine="It’s hard to explain puns to kleptomaniacs because they always take things literally." />

            <Joke
                question="What's the best thing about Switzerland?"
                punchLine="I don't know, but the flag is a big plus!"
            />

            <Joke
                question="Did you hear about the mathematician who's afraid of negative numbers?"
                punchLine="He'll stop at nothing to avoid them!"
            />

            <Joke
                question="Hear about the new restaurant called Karma?"
                punchLine="There’s no menu: You get what you deserve."
            />

            <Joke
                question="Did you hear about the actor who fell through the floorboards?"
                punchLine="He was just going through a stage."
            />
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