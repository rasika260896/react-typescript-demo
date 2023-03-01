type GreetProps={
    name:string,
    msgCount?:number,
    isLoggedIn:boolean
}
//we need to inform the type of props
const Greet = (props:GreetProps)=>{
    const {msgCount = 0} = props
    return(
        <>
        {props.isLoggedIn ? <h1>Hello {props.name} You have {msgCount} unread msg</h1> :<h1>Welcome Guest</h1>}
        </>
    )
}

export default Greet;