type PersonListProps = {
    names:{
     first:string,
     last:string
    }[],
    list: string[]
}



const PersonList = (props:PersonListProps) =>{
    return(
        <div>
            {props.names.map((name)=>(name.first + " " + name.last))}
            {props.list.map((person)=>(person))}
            
        </div>
    )
}

export default PersonList;