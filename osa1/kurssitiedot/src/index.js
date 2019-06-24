import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
    return(
    <h1>{props.course.name}</h1>
)
    }
const Part = (props) => {
    return (
    <p>{props.part} {props.exercises}</p>
)
    }
const Content = (props) => {
    return (
    props.parts.map(part => (
        <Part key={part} part={part.name} exercises = {part.exercises} />
    ))
    )
    }

    const Total = (props) => {
        return (
            <p>total: {props.parts.map(part => part.exercises).reduce((f,s) => f + s)}</p>
        )

    }

    
const App = () => {
    const course = {
        name: 'Half Stack -application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course} />
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'))


