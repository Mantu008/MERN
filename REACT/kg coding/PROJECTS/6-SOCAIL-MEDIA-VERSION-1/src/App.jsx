import Footer from "./component/Footer";
import Hadder from "./component/Hadder";
import Sidebar from "./component/Sidebar";
import CreatePost from "./component/CreatePost";
import Style from "./App.module.css";
import PostList from "./component/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className={Style.sidebar}>
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className={Style.content}>
          <Hadder />
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
