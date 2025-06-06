import { useState } from 'react'

const App = (props) => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleAddName = (event) => {setNewName(event.target.value)}

  const addName = (event) => {
	event.preventDefault()
	console.log('button clicked')
	console.log(newName)
	const newPerson = {name: newName}
	setPersons(persons.concat(newPerson))
	setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          	name: <input value={newName} onChange={handleAddName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
		<div>
			{persons.map((person, index) => (
			<p key={index}>{person.name}</p>
			))}
    </div>
	</div>
  )
}

export default App