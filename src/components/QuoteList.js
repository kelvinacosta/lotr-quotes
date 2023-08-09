import React from "react";
import Quote from "./Quote";

const QuoteList = ({quotes}) => {
    const quoteList = quotes.map(quote=>(
        <Quote key={crypto.randomUUID()} quote={quote}/>
    ))
    
    return (
        <ul className="quotes">
            {quoteList}
        </ul>
    )
}

export default QuoteList