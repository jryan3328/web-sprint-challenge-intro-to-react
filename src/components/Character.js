// Write your Character component here
import React from 'react'
import styled from 'styled-components'
import Stats from '../components/Stats'


const Jedi = styled.div`
    border:3px solid black;
    border-radius:50%;
    margin: 5px auto;
    padding: 5%;
    width: 20%;
    background-color: rgba(126, 120, 99, 0.4);
`
const StyledName = styled.h1`
font-size: 3rem;
color: black;
-webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: #ad7d37;
text-shadow: 2px 2px black;
font-family: Starjedi;
    &:hover {
        transform: scale(1.2);
        transition: all 0.2s ease-in;
    }
        transition: all 0.2s ease-in-out;

`
const Birthday = styled.p`
    font-size:1.25rem;
    font-family: Starjedi;
    color: white;
    text-shadow: 2px 2px black;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
`

const Character = props => {

    const {person} = props
    console.log(`in Character`, person)
    return (
        <Jedi>
            <StyledName>{person.name}</StyledName>
            <Birthday><em>Born {person.birth_year}</em></Birthday>
                <Stats info={person}/>
        </Jedi>
    )

}

export default Character 
