
const Header = (props) => {
	console.log(props)
	return (
		<div>{props.course}</div>
	)
}

const Part = (props) => {
	return (
		<div>
			<p> {props.name} </p>
			<p> {props.exercises} </p>
		</div>
	)
}

const Content = (props) => {
	return (
		<div>
			{props.parts.map((Part, index) =>
			<div key={index}>
			<p>{Part.name}</p>
			<p>{Part.exercises}</p>
			</div>
			)}
		</div>
	);
};

const Total = (props) => {
	return (
		<div>
			{props.parts.reduce((sum, parts) => sum + parts.exercises, 0)}
		</div>
	);
};

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
	return (
		<div>
			<h1>{course.name}</h1>
			<Content parts={course.parts}/>
			<Total parts={course.parts}/>
		</div>
	)
	
}
  
  export default App