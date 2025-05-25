import { useState } from "react";

interface Quote {
    id: number;
    quote: string;
    author: string;
};

let QuoteList = () => {
    let [quotes, setQuotes] = useState<Quote[]>([]);

    let loadQuotes = async () => {
        let response = await fetch("https://dummyjson.com/quotes");
        let data = await response.json();
        let quotesData: Quote[] = data.quotes;
        setQuotes(quotesData);
    }

    return (
        <section className="text-light">
            <h2>Quotes</h2>
            <button onClick={loadQuotes}>Load Quotes</button>
            <ul className="list-group">
                {
                    quotes.slice(0,10).map((quote) => 
                        (
                            <li className="list-group-item">Author: {quote.author} <br />
                            <span>Quote: {quote.quote}</span>
                        </li>
                ))
                }
            </ul>
        </section>
    );
}

export default QuoteList;