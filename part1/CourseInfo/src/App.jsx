const Header = ({text}) => { 
   console.log(text)
  return(
  <div>
  <h1>{text}</h1>
  </div>
  )
 
}
//The Content component should insert the data and render the Parts
// the content component uses an object array to pass the names and amounts into part components
const Content = ({parts}) => {
  console.log(parts)   
  return(
  <div>
  <Part part={parts[0].name} exercises={parts[0].exercises} />
  <Part part={parts[1].name} exercises={parts[1].exercises} />
  <Part part={parts[2].name} exercises={parts[2].exercises} />
  </div>
  )
} 
const Part = ({part, exercises}) => {
  return(
  <div>
    <p>
      {part} {exercises}
    </p>
  </div>
  )
}
const Total = ({exercises}) => { 
  //using a reduce method to sum upp the amounts

  const total = exercises.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log(exercises)
  return(
  <div>
    <p>Number of exercises {total}</p>
  </div>
  )
}
const App = () => {
  const course = {
   name: 'Half Stack application development',   

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
//passing the different values from the array to the component
  return (
    <div>
      <Header text={course.name} />
      <Content parts={course.parts} />
      <Total exercises={[course.parts[0].exercises, course.parts[1].exercises, course.parts[2].exercises]} />
    </div>
  )
}

export default App