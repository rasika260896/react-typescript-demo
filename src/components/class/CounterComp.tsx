import {Component} from 'react'

type msgProps = {
    message:string
}

type CountState = {
    count :  number
}

// send props first and then state
class CounterComp extends Component <msgProps , CountState >{
    state = {
        count : 0,
    }


    render() {
        return(
            <>
     
            <h1>{this.props.message} {this.state.count}</h1>
            </>
        )
    }
}

export default CounterComp