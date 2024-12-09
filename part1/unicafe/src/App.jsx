import { useState } from 'react'

const StatisticsLine = props => <div>{props.text} {props.value}</div>

const DisplayTitle = props => <h1>{props.title}</h1>

const Button = (props) => (
	<button onClick={props.handleClick}>
		{props.text}
	</button>
)

const Statistics = (props) => {
	<DisplayTitle title='statistics'/>
	if (props.allValue === 0)
		return <p>No feedback given</p>
	else {
		return (
		<div>
			<StatisticsLine text="good" value={props.goodValue}/>
			<StatisticsLine text="neutral" value={props.neutralValue}/>
			<StatisticsLine text="bad" value={props.badValue}/>
			<StatisticsLine text="all" value={props.allValue}/>
			<StatisticsLine text="average" value={props.averageValue}/>
			<StatisticsLine text="positive" value={`${props.positiveValue} %`}/> 
		</div> )
	}
}

const App = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const setToGood = (newValue) => {
		setGood(newValue)
	}
	const setToBad = (newValue) => {
		setBad(newValue)
	}
	const setToNeutral = (newValue) => {
		setNeutral(newValue)
	}

	return (
		<div>
			<DisplayTitle title='give feedback'/>
			<Button handleClick={() => setToGood(good + 1)} text='good'/>
			<Button handleClick={() => setToNeutral(neutral + 1)} text='neutral'/>
			<Button handleClick={() => setToBad(bad + 1)} text='bad'/>
			<Statistics goodValue={good} neutralValue={neutral} badValue={bad} 
			allValue={good + bad + neutral} averageValue={(good - bad) / (good + bad + neutral)}
			positiveValue={(good) / (bad + good + neutral) * 100} />
			

		</div>
	)
}

export default App
