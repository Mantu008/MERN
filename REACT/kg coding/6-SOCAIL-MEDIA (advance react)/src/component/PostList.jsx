import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as postListData } from "../store/post-list-store";
import WelcomeMessage from "../component/WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
function PostList() {
  const { postList, addInitialPosts } = useContext(postListData);

  const [featching, setFeatching] = useState(false);

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
      console.log("cleaning up useEffect");
      controller.abort();
    };
  }, []);

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
