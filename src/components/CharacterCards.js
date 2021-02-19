import React from 'react'
import styled from 'styled-components'
import Character from './Character'


const Cards = styled.div`
    display:flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    
`

const CharCards = props => {

    const {characters} = props
    console.log(`Did it transfer`, characters)

    return (

        <Cards>
            {characters.map(char => {
                return (
                    <Character
                        key={char.id}
                        person={char}
                    />
                )
            })}

        </Cards>
    )
}

export default CharCards 