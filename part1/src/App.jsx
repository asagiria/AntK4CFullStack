import { useState } from 'react'

const Button = ({text, value}) => {
	return(
		<div>
			<button onClick={value}>{text}</button>
		</div>
	)
}

const StatisticLine = ({text, value}) => {
	return(
		<tbody>
			<tr>
				<th>{text}</th> 
				<th>{value}</th>
			</tr>
		</tbody>
	)
}

const Statistics = ({good, neutral, bad}) => {
	const all = () => good + neutral + bad
	const average = () => (good-bad)/(good + neutral + bad)
	const positive = () => good/(good + neutral + bad)
	if(all() > 0){
		return(
			<div>
				<h1>statistics</h1>
				<table>
					<StatisticLine text="good" value={good}/>
					<StatisticLine text="neutral" value={neutral}/>
					<StatisticLine text="bad" value={bad}/>
					<StatisticLine text="all" value={all()}/>
					<StatisticLine text="average" value={average()}/>
					<StatisticLine text="positive" value={positive()}/>
				</table>
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
		<Button text="good" value={increaseGood}/>
		<Button text="neutral" value={increaseNeutral}/>
		<Button text="bad" value={increaseBad}/>
		<Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
