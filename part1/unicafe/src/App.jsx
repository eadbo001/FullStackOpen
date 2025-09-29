import { useState } from 'react'

const Header = ({ text }) => {
  return(
    <div>
      <h1>{text}</h1>
    </div>
)
}
const Button = ({onClick, text}) => {
  return(
    <button onClick={onClick}> {text} </button>
  )
}
const Stat = ({text, value}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>      
    </tr>
  )
}

const Statistics = ({good, neutral, bad,}) => { 

  const total = good + bad + neutral;
  const weightedAverage = (good * 1 + neutral * 0 + bad * -1) / total;
  const positivePercentage = good / total * 100;

  if (total === 0){
    console.log('submit a review by pressing a button')
    return(
      <div>
        No reviews given
      </div>
    )
  }
  else
    console.log('rendering reviews table...')
    return(
    <div>
      <table>
        <tbody>
          <Stat text={'good'} value={good}/>
          <Stat text={'neutral'} value={neutral}/>
          <Stat text={'bad'} value={bad}/>
        </tbody>
        <tfoot>
          <Stat text={'total'} value={total}/>
          <Stat text={'average'} value={weightedAverage}/>
          <Stat text={'percentage'} value={positivePercentage + '%'}/>
        </tfoot>
      </table>
    </div>
    )
}


const App = () => {
  // saving reviews into their own complex state 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [review, setReview] = useState({
    good: 0, neutral: 0, bad: 0
  })

  
  const handleGoodClick = () => {
    console.log('good review')
    setReview({ ...review, good: review.good + 1})
  }

  const handleNeutralClick = () => { 
    console.log('neutral review')
    setReview({ ...review, neutral: review.neutral + 1})
  }

  const handleBadClick = () => { 
    console.log('bad review')
    setReview({ ...review, bad: review.bad + 1})
  }

 

  return (
    <div>
      <Header text={'give feedback'}/>
      <Button onClick={handleGoodClick} text={'good'} />
      <Button onClick={handleNeutralClick} text={'neutral'} />
      <Button onClick={handleBadClick} text={'bad'} />
      <Header text={'statistics'}/>
      <Statistics good={review.good} neutral={review.neutral} bad={review.bad} />
    </div>
  )
}

export default App