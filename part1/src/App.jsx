import { useState } from 'react'


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
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length))
  //const points = new Uint8Array(anecdotes.length)
  //let new_points = [...points] 
  const select_anecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length))
  const vote = () => {
	  //new_points = [...points] 
	  //points[selected]+=1
	  points[selected]+=1
	  setPoints([...points])
  };
  const get_highest_vote = () => {
	  let highest_vote = 0
	  let current_index = 0
	  for(let i=0;i<anecdotes.length;++i){
		 if(points[i]>points[current_index]){
			highest_vote = points[i]
			current_index = i
		 }
	  }
	  return current_index
  };
  const highest_vote = get_highest_vote()
  
  return (
    <div>
		<h1>Anecdote of the day</h1>
		<p>{anecdotes[selected]}</p>
		<p>has {points[selected]} points</p>
		<button onClick={vote}>vote</button>
		<button onClick={select_anecdote}>next anecdote</button>
		<h1>Anecdote with most votes</h1>
		<p>{anecdotes[highest_vote]}</p>
		<p>has {points[highest_vote]} points</p>
    </div>
  )
}

export default App
