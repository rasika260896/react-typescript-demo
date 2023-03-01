type NestedChildrenProps = {
    children : React.ReactNode
}

const NestedChildren = (props:NestedChildrenProps) =>{
    return(
        <p>{props.children}</p>
    )
}

export default NestedChildren