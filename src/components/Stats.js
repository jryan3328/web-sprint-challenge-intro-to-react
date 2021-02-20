import React from 'react'
import styled from 'styled-components'


const Card = styled.div`
    
    margin: 1rem;
    padding: 1%;
    background-color:rgba(230, 226, 205, 0.5);
    text-align: center;
        &:hover {
            transform: scale(1.5);
            transition: all 0.1s ease-in;
            background-color: rgba(230, 226, 206, 1);
        }
            transition: all 0.2s ease-in-out;
    
`

const CharFacts = styled.p`
    margin: .75rem 1rem;
    font-family: Starjedi;
    font-size: .9rem;
    -webkit-text-stroke-width: .5px;
    -webkit-text-stroke-color: #2e557c;
    
`

const Stats = props => {

    const {info} = props

    return (
        <Card>
            <CharFacts>Hair Color: {info.hair_color}</CharFacts>
            <CharFacts>Mass: {info.mass} kilos</CharFacts>
            <CharFacts>Height: {info.height}"</CharFacts>
            <CharFacts>Gender: {info.gender}</CharFacts>
            <CharFacts>Skin Color: {info.skin_color}</CharFacts>
        </Card>
    )
}

export default Stats