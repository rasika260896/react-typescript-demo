// Style Props
type ContainerProps ={
    styles:React.CSSProperties
}
export const Container = (props:ContainerProps) =>{
    return(
        <div style={props.styles}>
            This are style props
        </div>
    )
}