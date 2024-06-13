import MainHeader from "./components/MainHeader";
import Post from "./components/Post";
import PostList from "./components/PostsList";
import { useState } from "react";

function App() {
  const [modalIsVisible, setModalIsvisible] = useState(false);

  function showModalHandler() {
    setModalIsvisible(true);
  }

  function hideModalHandler() {
    setModalIsvisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
