import React from 'react'
import ReactDOM from 'react-dom'
import { removePropertiesDeep } from '@babel/types';
const App = () => {
    const course = 'Half FullStack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'Satet of a component'
    const exercises3 = 14

    return (
        <div>
            <Header course={course}/>
            <Content part={part1} exercises={exercises1}
                     part={part2} exercises={exercises2}
                     part={part3} exercises={exercises3}/>
            <Total total={exercises1 + exercises2 + exercises3}/>
       
        </div>

    )
    
}
    const Header = (props) => {
        return (
            <div>
                <p>
                    {props.course}
                </p>
            </div>
        )
    }

    const Content = (props) => {
        return (
            <div>
                <p>
                    {props.part} {props.exercises}
                </p>
            </div>
        )
    }

    const Total = (props) => {
        return (
            <div>
                <p>
                    Number of exercises {props.total}
                </p>
            </div>
        )
    }



ReactDOM.render(<App />, document.getElementById('root'))