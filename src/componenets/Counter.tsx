import { useEffect, useState } from "react";
import './Counter.css'

interface CounterProps {
    title: string
    initialValue: number;
}

function Counter(props: CounterProps){

    let [count, setCount] = useState(props.initialValue);

    useEffect( () => {
        console.log(`Counter Value: ${count}`);
    }, [count])

    return (
    <section>
        <h2>{props.title}</h2>
        <div className="center">
            <button className="btn btn-success m-1" onClick={() => count < 100 ? setCount(count + 1): null}>Increment</button>
            <button className="btn btn-danger m-1" onClick={() => count > 0 ? setCount(count - 1) : null}>Decrement</button>
        </div>
        <h5 className="text-light center mt-2 mb-4">
            Count: <span>{count}</span>
        </h5>
    </section>
    );
}

export default Counter;