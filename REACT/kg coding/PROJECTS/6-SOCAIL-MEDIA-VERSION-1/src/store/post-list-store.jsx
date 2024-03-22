import { createContext, useReducer } from "react";

const defaultContext = {
  postList: [],
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
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    defaultPostList
  );

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

  const deletePost = (Postid) => {
    dispatchPostList({
      type: "DELETE",
      paylod: {
        Postid,
      },
    });
    alert("Post Add Sucessfully..");
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const defaultPostList = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "mumbai", "Enjay"],
  },

  {
    id: "2",
    title: "Pass ho gye bhai",
    body: "4 saal ki masti ke bad bhi ho gye hai pass. Hard to Believe",
    reactions: 15,
    userId: "user-12",
    tags: ["Graduation", "College", "Unbelievable"],
  },
];

export default PostListProvider;
