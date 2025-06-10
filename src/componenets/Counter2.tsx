import { useReducer } from 'react';
import './Counter.css'

type CounterState = {
    count: number;
}

type Action = {
    type: "increment" | "decrement";
}

function Counter2() {
    function reducer(counterState: CounterState, action: Action): CounterState{
        if(action.type == "increment"){
            return{
                ...counterState,
                count: counterState.count + 1
            }
        }
        else if(action.type == "decrement"){
            return{
                ...counterState,
                count: counterState.count - 1
            }
        }
        else {
            return counterState;
        }
    }
    
    let initialState: CounterState = {
        count: 1
    }

    let [counterState, dispatch] = useReducer(reducer, initialState);

    return (
        <section>
            <h2 className='mt-4'>Counter App using useReducer()</h2>
            <div className="center">
                <button className="btn btn-success m-1" onClick={() => dispatch({type: "increment"})}>Increment</button>
                <button className="btn btn-danger m-1" onClick={() => dispatch({type: "decrement"})}>Decrement</button>
            </div>
            <h5 className="text-light center mt-2 mb-4">
                Count: <span>{counterState.count}</span>
            </h5>
        </section>
    );
}

export default Counter2;