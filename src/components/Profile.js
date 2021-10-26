import React from 'react'
import {Card, Button} from "react-bootstrap"


const Profile = ({image, fullname, bio, handleName, test}) => {
    
    return (
        <div>
            {test ? (
                <Card style={{ width: '18rem', height:"35rem" }} >
                <Card.Img variant="top" src={image} style={{height:"20rem" }} alt="profile picture" />
                <Card.Body>
                    <Card.Title>{fullname}</Card.Title>
                    <Card.Text>
                    {bio}
                    </Card.Text>
                    <Button variant="primary" onClick={() => handleName(fullname)}>Say Hi! </Button>
                </Card.Body>
            </Card>
            ) : null}
        </div>
    )
}

Profile.defaultProps = {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png",
    fullname: "Anonymous",
    bio: "Please insert you bio"
}

export default Profile
