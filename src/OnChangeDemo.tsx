import { useState } from "react";
import './OnchangeDemo.css';

function OnChangeDemo(){

    let [name, setName] = useState<string>('');

    return (
    <section className="onChange my-3">
        <h2>On Change Demo</h2>
        <p>Name: {name}</p>
        <label htmlFor="name">Enter Name:</label>
        <input type="text" id="name" onChange={(event) => setName(event.target.value)}/>
    </section>
    )
}

export default OnChangeDemo;