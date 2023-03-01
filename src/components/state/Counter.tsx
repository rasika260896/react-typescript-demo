import { useReducer } from "react"

const initialState = {count:0}

type StateCounter = {
    count:number
}

type IncDecCounter = {
    type:'Increment' | 'Decrement' 
    payload:number
}
type resetCounter = {
    type:'reset' 
   
}

type ActionCounter = IncDecCounter | resetCounter

function reducer (state : StateCounter,action:ActionCounter){
    switch(action.type){
    case 'Increment':
    return {count:state.count+action.payload,}
    case 'Decrement':
    return {count:state.count - action.payload,}
    case 'reset':
        return initialState
    default:
        return state
    }
}

const Counter = () =>{
    const [state,dispatch] = useReducer(reducer,initialState)
    return (
        <>
        <h1>Counter:{state.count}</h1>
        <button onClick={()=>dispatch({type:'Increment',payload:10})}>Increment</button>
        <button onClick={()=>dispatch({type:'Decrement',payload:10})}>Decrement</button>
        <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        </>
    )
}

export default Counter