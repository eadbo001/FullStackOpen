import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>
   

const Text = ({text, index}) => {
  console.log('Anecdote: ', index, text);
  
return(
    <div>
    {text}
  </div>
)
}

const Votes = ({votes}) => {
  console.log('Amount of votes', {votes});
  
  return(
    <div>
      has {votes} votes
    </div>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]  
  //changing the state of voting during use so have to use a state for it 
  // and not just create an array since it would always rerender
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(0)
  const [popular, setPopular] = useState(0)

  const handleNextAnecdote = () => {
    const random = Math.floor(Math.random() * anecdotes.length)
    console.log(random, anecdotes[random]);
    setSelected(random)
  }
  const handleVoting = () => {
    console.log('adding vote');    
    const newVotes = [...votes]    
    newVotes[selected] += 1    
    setVotes(newVotes)    
    const newPopular = newVotes.indexOf(Math.max(...newVotes))
    setPopular(newPopular)  
    console.log('popular quote', newPopular);   

  }


  return (
    <div>
      <h1>Anecdote</h1>
      <Text text={anecdotes[selected]} index={selected} />
      <Votes votes={votes[selected]} />
      <div>
        <Button onClick={handleNextAnecdote} text={'next anecdote'}/> 
        <Button onClick={handleVoting} text={'vote'}/>   
      </div> 
      <h1>Most popular anecdote</h1>
      <Text text={anecdotes[popular]} index={popular} />
      <Votes votes={votes[popular]} />
    </div>
  )
}

export default App