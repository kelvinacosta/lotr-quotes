//Importing useState from react 
import React,{useState} from "react";
import QuoteList from "./QuoteList";

const Character = ({character}) => {//The other way to destruct showQuote. Call it inside {}
    
    const {image,name,race,status,weapon,quotes} = character
    //Create a variable to call useState. Initialize the value with True in this case.
    const [showQuote,setShowQuote] = useState(true)


    //Create a function to handle Click event
    function handleClick() {
        //Set function with a short arrow function
        setShowQuote(showQuote => !showQuote)
    }

    return (
        <div className="character">
            <img src={image} alt = {`Character Portrait of ${name}`} onClick={handleClick}/>
            <h2>{name}</h2>
            <p>{race}</p>
            <p>{status}</p>
            <p>{weapon}</p>


            {showQuote ? <QuoteList quotes={quotes}/> :null}
        
        </div>
    )
}

export default Character