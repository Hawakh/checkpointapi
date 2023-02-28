import {useState,useEffect} from 'react'
import axios from 'axios'
import UserCard from './UserCard'

function ListUsers() {
    const [users,setUsers]=useState();
    console.log(users,"tesssssssst")
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>setUsers(res.data))
        .catch((err)=>console.log(err))

    },[]);
  return (
    <div>
       <div>
       <h3 style={{textAlign:"center"}}>This is ListUsers</h3>
      {users && users.map((user) => <UserCard user={user} key={user.id} />)}
    
    </div>
    </div>
  )
}

export default ListUsers