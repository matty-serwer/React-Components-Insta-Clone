import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts, search } = props;
  const [filtered, setFiltered] = useState([]);
  // useEffect(() => {
  //   setFiltered(posts.filter(postObj => postObj.username === search.current));
  //   console.log(filtered)
  // }, []);
  

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}

      {search.length > 0
        ? filtered.map((postObj) => {
            return <Post key={postObj.id} post={postObj} likePost={likePost} />;
          })
        : posts.map((postObj) => {
            return <Post key={postObj.id} post={postObj} likePost={likePost} />;
          })}
    </div>
  );
};

export default Posts;
