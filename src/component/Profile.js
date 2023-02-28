import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function Profile() {
  const {userId}=useParams();
  const [user,setUser]=useState({});
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((res)=>setUser(res.data))
    .catch((err)=>console.log(err))


  },[]);
  return (
    <div>
     <Card style={{ width: '18rem' ,marginLeft:"600px"}}>
      <Card.Header>{user.name}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>{user.email}</ListGroup.Item>
        <ListGroup.Item>{user.address && user.address.city}</ListGroup.Item>
        <ListGroup.Item>{user.phone}</ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
  )
}

export default Profile
