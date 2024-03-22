import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as postListData } from "../store/post-list-store";
import WelcomeMessage from "../component/WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
function PostList() {
  const { postList, featching } = useContext(postListData);

  return (
    <>
      {featching && <LoadingSpinner />}
      {!featching && postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default PostList;
