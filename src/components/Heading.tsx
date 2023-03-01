type HeaderProps = {
    children:string
}

const Heading = (props:HeaderProps) =>{
    return(
        <h6>{props.children}</h6>
    )
}

export default Heading