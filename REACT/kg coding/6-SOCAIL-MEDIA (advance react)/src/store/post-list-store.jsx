import { createContext, useReducer } from "react";

const defaultContext = {
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
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

  const addPost = (userId, posttitle, postbody, postreactions, posttags) => {
    if (
      userId.length !== 0 &&
      posttitle.length !== 0 &&
      postbody.length !== 0 &&
      postreactions.length !== 0 &&
      posttags.length !== 0
    ) {
      dispatchPostList({
        type: "ADD",
        paylod: {
          id: Date.now(),
          title: posttitle,
          body: postbody,
          reactions: postreactions,
          userId: userId,
          tags: posttags,
        },
      });
      alert("Post Add Sucessfully..");
    } else {
      alert("Plese fill All Data Carefully");
    }
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

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        addInitialPosts,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
