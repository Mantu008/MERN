import { useContext, useRef } from "react";
import style from "./CreatePost.module.css";
import { PostList as postListData } from "../store/post-list-store";
function CreatePost() {
  const postuserIdElement = useRef();
  const posttitleElement = useRef();
  const postbodyElement = useRef();
  const postreactionsElement = useRef();
  const posttagsElement = useRef();

  const { addPost } = useContext(postListData);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = postuserIdElement.current.value;
    const posttitle = posttitleElement.current.value;
    const postbody = postbodyElement.current.value;
    const postreactions = postreactionsElement.current.value;
    const posttags = posttagsElement.current.value.split(" ");

    addPost(userId, posttitle, postbody, postreactions, posttags);

    postuserIdElement.current.value = "";
    posttitleElement.current.value = "";
    postbodyElement.current.value = "";
    postreactionsElement.current.value = "";
    posttagsElement.current.value = "";
  };

  return (
    <>
      <form className={style.CreatePost} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter Your userId Here
          </label>
          <input
            type="text"
            ref={postuserIdElement}
            className="form-control"
            id="userId"
            placeholder="Enter userId"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title of Post
          </label>
          <input
            type="text"
            ref={posttitleElement}
            className="form-control"
            id="title"
            placeholder="How Are You Felling Today"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            rows="4"
            ref={postbodyElement}
            className="form-control"
            id="body"
            placeholder="Tell us More About it"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Number of Reactions
          </label>
          <input
            type="text"
            className="form-control"
            id="reactions"
            ref={postreactionsElement}
            placeholder="How Many people reached to this post"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter Your HastTags Here
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            ref={posttagsElement}
            placeholder="plese Entre Tang using Space"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
}

export default CreatePost;
