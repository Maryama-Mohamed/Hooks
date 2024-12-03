import Post from "./Post";
const PostList = ({posts}) =>{

    return posts.map((post, index) => (
    // <Post content={post.content} image={post.image}
    <Post key={index}{...post} 
    />
  
        
    ));

}
export default PostList;