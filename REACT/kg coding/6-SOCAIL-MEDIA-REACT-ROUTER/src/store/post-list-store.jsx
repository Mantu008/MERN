import { createContext, useEffect, useReducer, useState } from "react";

const defaultContext = {
  postList: [],
  featching: false,
  addPost: () => {},
  deletePost: () => {},
};

export const PostList = createContext(defaultContext);

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.paylod.Postid
    );
  } else if (action.type === "ADD") {
    newPostList = [action.paylod, ...currentPostList];
  } else if (action.type === "ADD_Initial_Posts") {
    newPostList = action.paylod.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const [featching, setFeatching] = useState(false);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD",
      paylod: post,
    });
    alert("Post Add Sucessfully..");
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_Initial_Posts",
      paylod: {
        posts,
      },
    });
  };

  const deletePost = (Postid) => {
    dispatchPostList({
      type: "DELETE",
      paylod: {
        Postid,
      },
    });
    alert("Post Remove Sucessfully..");
  };

  useEffect(() => {
    setFeatching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFeatching(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <PostList.Provider
      value={{
        postList,
        featching,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
