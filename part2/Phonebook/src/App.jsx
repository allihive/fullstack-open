import { useState } from 'react'

const App = (props) => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
	event.preventDefault()
	console.log('button clicked')
	console.log(newName)
	setNewName(event.target.value);
  }

  const handlePersons = ()

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          	name: <input value={handlePersons}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

    </div>
  )
}

export default App