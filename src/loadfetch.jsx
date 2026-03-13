import { use } from "react";
import Post from "./post";

export default function Posts({fetchLoad}){
   const posts = use(fetchLoad);
//    console.log(users)
    return(
        <div className="card">
           <h3>Posts: {posts.length}  </h3>
           {
              posts.map(post => <Post key={post.id} post = {post}></Post> )
           }
        </div>
    )
}