import React from 'react'

const Course = ({ course }) => {
    return (
      
      <div> 
      <Header name = {course.name} />
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
      </div>
    )
  }
  
  const Header = ({ name }) => (
    
    <h1>{name}</h1>

    )
  
  const Total = ({ parts }) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
      <div>
      <p><strong> Tehtäviä yhteensä: </strong> <em> {total} </em> </p>
      </div>
    )
  }
  
  const Part = ({name, exercises}) => (
    <div>
    <p>
    
    {name} {exercises}
        
    </p>
    </div>
  )

  const Content = ({ parts }) => (
    <div>
      {parts.map(part => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
      </div>
  )

  export default Course;