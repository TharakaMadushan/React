import classes from "./Post.module.css";

function Post(props) {
  return (
    <div className={classes.post}>
      <h2 className={classes.author}>{props.author}</h2>
      <p className={classes.text}>{props.body}</p>
    </div>
  );
}

export default Post;
