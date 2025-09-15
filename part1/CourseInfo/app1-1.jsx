const Header = ({text}) => { 
  return(
  <>
  <h1>{text}</h1>
  </>
  )
}

const Content = ({part, exercises}) => {   
  return(
  <>
  <p>
    {part} {exercises}
  </p>
  </>
  )
} 
const Total = ({exercises}) => { 
  //I want to have a single prop that the different exercise amounts can be passed to
  //using a reduce method (for the first time) to sum upp the amounts
  //The array will be created where the data is stored (App) and then passed to the Total component
  const total = exercises.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return(
  <>
    <p>Number of exercises {total}</p>
  </>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
//passing the different exercise amounts as an array to the Total component
  return (
    <div>
      <Header text={course} />
      <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  )
}

export default App
