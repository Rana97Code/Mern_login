import { useParams } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


const Profile = ()=> {
const {id} = useParams();

    return (
        <Container>
            <Navbar className="Container">
                <h2>Hello </h2>
                <h2>My User Id - { id }</h2>
                   
            </Navbar>
        </Container>
  
        );
  }
  
  export default Profile;