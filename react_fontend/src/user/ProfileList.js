
import { Link } from "react-router-dom";
import users from '../database/db.json';

const ProfileList = ()=> {

    return (
            <div>
                { users.map( user =>(
                    <div className="user-preview" key={user.id}>
                        <Link to={`/Profile/${user.id}`}>
                            <h2> User ID- {user.id} </h2>
                            <h2> User name- {user.name} </h2>
                            <h2> User title- {user.title} </h2>
                        </Link>
                    </div>
                  
                ))}
               
            </div>
   
        );
  }
  
  export default ProfileList;