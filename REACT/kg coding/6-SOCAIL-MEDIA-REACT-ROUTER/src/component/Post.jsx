import { useContext } from "react";
import style from "./Post.module.css";
import { MdDelete } from "react-icons/md";
import { PostList as postListData } from "../store/post-list-store";

function Post({ post }) {
  const { deletePost } = useContext(postListData);
  return (
    <div className="card" id={style.card} style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(post.id)}
        >
          <MdDelete />
          <span className="visually-hidden"></span>
        </span>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag, index) => (
          <span
            className={`badge text-bg-warning ${style.tagstyle}`}
            key={index}
          >
            #{tag}
          </span>
        ))}
        <div className={`alert alert-success ${style.reactions}`} role="alert">
          This post has been reacted by {post.reactions} People
        </div>
      </div>
    </div>
  );
}

export default Post;
