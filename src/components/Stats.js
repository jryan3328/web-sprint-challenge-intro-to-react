import React from 'react'
import styled from 'styled-components'


const Card = styled.div`
    border: 1px solid black;
    margin: 1rem;
    padding: 1%;
    background-color:rgba(230, 226, 205, 0.5);
    text-align: center;
        &:hover {
            transform: scale(1.1);
            transition: all 0.1s ease-in;
        }
            transition: all 0.2s ease-in-out;
    
`

const CharFacts = styled.p`
    margin: .75rem 1rem;
    font-family: Starjedi;
    font-size:1.3rem;
    
`

const Stats = props => {

    const {info} = props

    return (
        <Card>
            <CharFacts>Height: {info.height}"</CharFacts>
            <CharFacts>Hair Color: {info.hair_color}</CharFacts>
            <CharFacts>Weight: {info.mass} kilos</CharFacts>
        </Card>
    )
}

export default Stats