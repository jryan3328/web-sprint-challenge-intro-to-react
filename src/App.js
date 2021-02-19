import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Cards from './components/CharacterCards'
import styled from 'styled-components'

const StyledCharacters = styled.h1`
  font-size: 4rem;
  color:#2e557c;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #ad7d37;
  font-family: Starjedi;
  text-shadow: 2px 6px black;
  &:hover {
    transform: scale(1.5);
    transition: all 0.5s ease-in;
  }
  transition: all 0.5s ease-in-out;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([])
  

  useEffect(() => {
    axios.get("https://swapi.dev/api/people")
    .then(res => {
      console.log(res.data)
      setCharacters(res.data)
    })
    .catch(err => {
      console.log('Error', err)
    })
  },[])

  console.log(`Characters`, characters)

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <StyledCharacters>Star Wars Characters</StyledCharacters>
      <Cards characters={characters}></Cards>
    </div>
  );
}

export default App;