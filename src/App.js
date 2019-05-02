import React, { useReducer, createContext } from 'react'
import Counter from './counter'
import { reducer } from './reducer'


export const MyContext = createContext(0)

function App() {
    const [state, dispatch] = useReducer(reducer, 0)

    return (
        <div>
            <MyContext.Provider value={{state, dispatch}}>
                <Counter />
            </MyContext.Provider>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default App
