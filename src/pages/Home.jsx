import axios from "axios";
import { useState, useEffect } from "react";
import { PostsNew } from "../PostsNew";
import { PostsShow } from "../PostsShow";
import { PostsIndex } from "../PostsIndex";
import { Modal } from "../Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Banner } from "../Banner";
import "./Home.css";

export function Home() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowModalVisible, setIsPostsShowModalVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const handleIndexPosts = () => {
    axios.get("/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  const handleShowPost = (post) => {
    setIsPostsShowModalVisible(true);
    setCurrentPost(post);
    console.log(post);
  };

  const handleHidePost = () => {
    setIsPostsShowModalVisible(false);
  };

  useEffect(handleIndexPosts, []);

  return (
    <div className="container">
      <Banner />
      <PostsIndex posts={posts} onSelectPost={handleShowPost} />
      <Modal show={isPostsShowModalVisible} onClose={handleHidePost}>
        <PostsShow post={currentPost} />
      </Modal>
    </div>
  );
}
