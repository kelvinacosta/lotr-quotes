import React from "react";
import Character from "./Character";

const CharacterList = ({characters}) => {
    //console.log(characters)
    const characterList = characters.map(character=>{
         return(
            <Character key={crypto.randomUUID()} character= {character} 
            // showQuote={true} The other way without using state
            
            />
        )
    })

    return (
        <div className="characters-flex">
            {characterList}
        </div>
    )
}

export default CharacterList