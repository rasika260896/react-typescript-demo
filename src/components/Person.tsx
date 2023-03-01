type PersonProps = {
    name:{
        firstname:string,
        lastname:string
    }
}

const Person =(props:PersonProps) =>{
    return(
       <h1>{props.name.firstname}{props.name.lastname}</h1>
    )
}

export default Person;