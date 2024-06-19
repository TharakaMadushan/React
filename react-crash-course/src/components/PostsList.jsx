import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";
import MainHeader from "./MainHeader";

function PostsList({ isPosting, onStopPosting }) {
  // let modalContent;

  // if (modalIsVisible) {
  //   modalContent = (
  //     <Modal onClose={hideModalHandler}>
  //       <NewPost
  //         onBodyChange={bodyChangeHandler}
  //         onAuthorChange={authorChangeHandler}
  //       />
  //     </Modal>
  //   );
  // }
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPost) => [postData, ...existingPost]);
  }
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            // onBodyChange={bodyChangeHandler}
            // onAuthorChange={authorChangeHandler}
            onCancel={onStopPosting}
            onAddPost={addPostHandler}
          />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There is no post yet.</h2>
          <p>start adding some.</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
