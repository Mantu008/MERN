import Footer from "./component/Footer";
import Hadder from "./component/Hadder";
import Sidebar from "./component/Sidebar";
import CreatePost from "./component/CreatePost";
import Style from "./App.module.css";
import PostList from "./component/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";
import { Route, Routes } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className={Style.sidebar}>
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className={Style.content}>
          <Hadder />
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
