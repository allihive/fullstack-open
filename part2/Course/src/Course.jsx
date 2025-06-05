export default function Course(props) {
  return (
    <div>
		<Header course={props.course.name} />
      <Content parts={props.course.parts} />
      <Total total={props.course.parts.reduce((sum, part) => sum + part.exercises, 0)} />
    </div>
  );
};

const Header = (props) => {
	console.log(props)
	return (
		<h1>{props.course}</h1>
	)
}

const Part = (props) => {
	return (
		<div>
			<p> {props.part.name} {props.part.exercises} </p>
		</div>
	)
}

const Content = (props) => {
	return (
		<div>
			{props.parts.map((Part, index) =>
			<div key={index}>
			<p>{Part.name} {Part.exercises}</p>
			</div>
			)}
		</div>
	);
};


const Total = (props) => {
	return <h3>Number of exercises {props.total}</h3>
};

