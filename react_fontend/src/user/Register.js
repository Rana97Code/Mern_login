
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
//import { Link } from 'react-router-dom';
// import axios from "axios"; //for send data through api we can use axios but this case we are not doing this

// function Register() {
const Register =()=>{

//   const [user, setUser] = useState({
//         user_name: "",
//         user_phone: "",
//         user_email: "",
//         user_password: ""
//     })

    // const handleChange = e => {
    //     // console.log(e.target)
    //     const { name, value }  = e.target 
    //     setUser({
    //         ...user,
    //         [name]:value
    //     })
    // }

        const [user_name,setName]=useState("");
        const [user_phone,setPhone]=useState("");
        const [user_email,setEmail]=useState("");
        const [user_password,setPass]=useState("");


  const collectData =async () => {
    //const { user_name, user_email , user_phone, user_password } = user
    // if(user_name && user_email && user_phone){
    //   axios.post("http://localhost:5000/register", user)

    // }
    // else{
    //     alert("Invalid Input")
    // }

    let result = await fetch('http://localhost:5000/register',{
        method: 'post',
        body: JSON.stringify({user_name, user_email , user_phone, user_password}),
        headers:{
            'Content-type':'application/json'
        },
    })
    result = await result.json()
    console.warn(result);
    
  }

    return (
        <div className='login'>
        {/* {console.log("User",user)} */}

        <Container fluid>

           <Form className='login-form'>
                <Form.Group className="mb-3 f-group" controlId="formEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='user_name' value={user_name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
                    <Form.Text className="text-muted">
                       
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3 f-group" controlId="formEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" name="user_phone" value={user_phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Enter Phone Number" />
                    <Form.Text className="text-muted">
                        
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 f-group" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="user_email" value={user_email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 f-group" controlId="form">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="user_password" value={user_password} onChange={(e)=>setPass(e.target.value)} placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3 f-group" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button> 
               
            </Form>
        </Container>
      </div>
    );

}

export default Register;