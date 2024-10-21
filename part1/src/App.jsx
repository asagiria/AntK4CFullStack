import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
	const all = () => good + neutral + bad
	const average = () => (good-bad)/(good + neutral + bad)
	const positive = () => good/(good + neutral + bad)
	if(all() > 0){
		return(
			<div>
				<h1>statistics</h1>
				<p>good {good}</p>
				<p>neutral {neutral}</p>
				<p>bad {bad}</p>
				<p>all {all()}</p>
				<p>average {average()}</p>
				<p>positive {positive()} %</p>
			</div>
		)
	}
	else{
		return(
			<div>
				<p>No feedback given</p>
			</div>
		)
	}
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
		<h1>give feedback</h1>
		<button onClick={increaseGood}>good</button>
		<button onClick={increaseNeutral}>neutral</button>
		<button onClick={increaseBad}>bad</button>
		<Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
