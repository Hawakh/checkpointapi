import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function UserCard({user}) {
  return (
    <Card style={{ width: '18rem' ,marginLeft:"600px"}}>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
       {user.email}
        </Card.Text>
        <Button style={{backgroundColor: "#e7e7e7", color: "red"}}>
        <Link to={`/profile/${user.id}`}>Go to Profile</Link>
</Button>
      </Card.Body>
    </Card>
  )
}

export default UserCard