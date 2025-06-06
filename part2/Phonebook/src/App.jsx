import { useState } from 'react'

const App = (props) => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-1234567'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('');

  const handleAddName = (event) => {setNewName(event.target.value)}
  const handleNewPhone = (event) => {setNewPhone(event.target.value)}

  const doubleCheckName = () => {
	const duplicate = persons.find(person => person.name === newName)
	if (duplicate) {
		alert(`${newName} is already added to phonebook`)
		return true;
	}
	else
		return false;
  }

  const addName = (event) => {
	event.preventDefault()
	if (doubleCheckName()) return;
	
	const newPerson = {name: newName, phone: newPhone}
	setPersons(persons.concat(newPerson, newPhone))
	setNewName('')
	setNewPhone('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          	<div>name: <input value={newName} onChange={handleAddName}/></div>
			<div>number: <input value={newPhone} onChange={handleNewPhone} /></div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
		<div>
			{persons.map((person, index) => (
			<p key={index}>{person.name} {person.phone}</p>
			))}
    </div>
	</div>
  )
}

export default App