import {useState} from 'react'
// If we know that the value after component mounting is never going to be null , then we do assertion and use keyword "as"

type AuthUser = {
    name:string,
    email:string
}

const State = () =>{
    //user type can be null or AuthUser 
    const [user,setUser] = useState<AuthUser | null>(null)
   //user type will always be of type AuthUser and never be null after mounting then we use following syntax, here we don't need to have a check (Oprional chaining)
    
   //const [user,setUser] = useState<AuthUser>({ } as AuthUser)
   
   const handleLogin=()=>{
        setUser({
            name:"Rasika",
            email:"rsd@gmail.com"
        })
    }

    const handleLogout=()=>{
        setUser(null)
    }

    return(
     <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <h1>
            User Name is : {user?.name}
            Email is is:{user?.email}
        </h1>
     </div>
    )
}

export default State