import React from 'react'
import ReactDOM from 'react-dom'
import Course from './components/Course'


const App = () => {
  const courses = [
  {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 10,
        id: 1
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7,
        id: 2
      },
      {
        name: 'Komponenttien tila',
        exercises: 14,
        id: 3
      }
    ]
  },
  { 
  name: 'Node.js',
  parts: [
    {
      name: 'Routing',
      exercises: 3,
      id:1
    },
    {
      name: 'Middlewares',
      exercises:3,
      id:2
      }
    ]
  },
  {
    name: 'Full-Stack',
    parts: [
    {
      name: 'Heureka',
      exercises:4,
      id:1
    }
  ]
  }
]

const All = courses.map(course => <Course key={course.name} course={course} />)

  return (
    <div>
      {All}
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)