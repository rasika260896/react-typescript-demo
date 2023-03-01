type ListProps<T> = {
    items : T[]
    onClick : (value:T) =>void
}

//generic Props are used when your array has different type
 const ListComp =<T extends string>({items,onClick}:ListProps<T>) =>{
    return(
    <> 
    <h1>Generic Props for List</h1>
    {items.map((item,index)=>{return(<div key ={index} onClick={()=>onClick(item)}>{item}</div>)})}
     </>
    )
}

export default ListComp;