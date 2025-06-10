import { useReducer } from 'react';
import './Counter.css'

type CounterState = {
    count: number;
    error: string | null;
}

type Action = {
    type: "increment" | "decrement";
}

function Counter3() {
    function reducer(counterState: CounterState, action: Action): CounterState {
        counterState.error = null;
        if (action.type == "increment") {
            if (counterState.count == 10) {
                return {
                    ...counterState,
                    error: "Count value cannot go beyond 10"
                }
            }
            return {
                ...counterState,
                count: counterState.count + 1
            }
        }
        else if (action.type == "decrement") {
            if (counterState.count == 1) {
                return {
                    ...counterState,
                    error: "Count value cannot go less than 1"
                }
            }
            return {
                ...counterState,
                count: counterState.count - 1
            }
        }
        else {
            return counterState;
        }
    }

    let initialState: CounterState = {
        count: 1,
        error: null
    }

    let [counterState, dispatch] = useReducer(reducer, initialState);

    return (
        <section>
            <h2 className='mt-4'>Counter App using useReducer()</h2>
            {counterState.error && (<h4 className='alert alert-warning mx-5'>{counterState.error}</h4>)}
            <div className="center">
                <button className="btn btn-success m-1" onClick={() => dispatch({ type: "increment" })}>Increment</button>
                <button className="btn btn-danger m-1" onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
            </div>
            <h5 className="text-light center mt-2 mb-4">
                Count: <span>{counterState.count}</span>
            </h5>
        </section>
    );
}

export default Counter3;