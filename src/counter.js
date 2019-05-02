import React, {useEffect, useState} from 'react'
import { MyContext } from './App'

export default function Counter(props) {


    return (
        <MyContext.Consumer>
            {({ state, dispatch }) => {

                return <h1>{state}</h1>
            }}
        </MyContext.Consumer>
    )
}
