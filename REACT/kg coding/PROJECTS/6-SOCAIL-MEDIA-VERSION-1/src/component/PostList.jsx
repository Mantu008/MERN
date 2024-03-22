import { useContext } from "react";
import Post from "./Post";
import { PostList as postListData } from "../store/post-list-store";
function PostList() {
  const { postList } = useContext(postListData);
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default PostList;
