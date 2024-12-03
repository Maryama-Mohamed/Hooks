import { useContext } from 'react';
import { UserContext } from '../App';

const Header = ({setUser}) => {
    
const user = useContext(UserContext);
    // console.log(user)
    return (
        <div>
            <span >Welcome {user}!</span> 
            
            <button type="submit" 
            onClick={()=>setUser("")}
            >Logout</button>
        </div>
    )
};

export default Header;