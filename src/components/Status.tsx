type StatusProps={
status:'loading'|'success'|'error'
}

const Status = (props:StatusProps) =>{
   if(props.status === 'loading'){
   return(
    <h1>Loading</h1>
   )
   }
   else if(props.status === 'success'){
    return(
     <h1>Success</h1>
    )
    }
    else {
        return(
         <h1>Error</h1>
        )
        }
}

export default Status;