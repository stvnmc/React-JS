import React, { useReducer, useContext } from 'react'

//Actions

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

const myContext = React.createContext(null);

const Points = () => {
    const state = useContext(myContext);

    return (
        <p>Points: {state.count}</p>
    )
}

const Counter = () => {

    // Initial State for Redurcer
    const InitialState = {
        count: 0
    }

    // Reducer to change State
    const reducer = (state, action) => {

        switch (action.type) {
            case INCREMENT:
                return {
                    count: state.count + action.payload.quantity
                };
            case DECREMENT:
                return {
                    count: state.count - action.payload.quantity
                };
            case RESET:
                return {
                    count: 0
                };
            default:
                return state;
        }
    }

    //Asing UseReducer to state, reducer and dispatch actions

    const [state, dispatch] = useReducer(reducer, InitialState)

    return (
        <myContext.Provider value={state}>
            <div>
                <Points></Points>
                <button
                    onClick={
                        () => dispatch({
                            type: INCREMENT,
                            payload: {
                                quantity: 1
                            }
                        })
                    }
                >
                    INCREMENT
                </button>
                <button
                    onClick={
                        () => dispatch({
                            type: DECREMENT,
                            payload: {
                                quantity: 1
                            }
                        })
                    }
                >
                    INCREMENT
                </button>
                <button
                    onClick={
                        () => dispatch({ type: RESET })
                    }
                >
                    INCREMENT
                </button>
            </div>
        </myContext.Provider>
    )
}
export default Counter;

