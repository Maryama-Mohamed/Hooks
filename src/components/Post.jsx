import { useContext } from 'react';
import { PostContext, UserContext } from '../App';
const Post = ({content, image, user, id}) =>{
    
    const userValue = useContext(UserContext);
    
    // console.log(userValue)
    const {dispatch} = useContext(PostContext);
    let carUser = userValue == user;
    // console.log(carUser)
    const handleDelete = () =>{
        if(!window.confirm('Are you sure you want to delete'))
            return;
        dispatch({
            type: 'DELETE_POST',
            payload: {postId: id}
        })

    }

    return(
        <>
        <p>{content}</p>
             {image && <img src={URL.createObjectURL(image)} 
                 style={{width: '500px', height: '10'}}
                 />}
                 <br/>
                 {user && <p style={{color: carUser && "green"}}>{user}!</p>}
                {carUser &&  <button
                onClick={handleDelete}
                >Delete</button>}
                 
        </>
    )
}
export default Post;