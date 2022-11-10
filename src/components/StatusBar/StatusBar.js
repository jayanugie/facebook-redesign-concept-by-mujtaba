import axios from "axios";
import React, { useState } from "react";

function StatusBar() {
  const [post, setPost] = useState("");

  // func create post
  const createPost = async (e) => {
    if (!post) {
      alert("Can not be empty");
    } else {
      e.preventDefault();
      const result = await axios.post("http://localhost:4000/feeds", {
        body: post,
      });
      alert(result.data.message);
      window.location.reload();
    }
  };

  return (
    <div className="flex justify-center mt-7">
      <div className="container mx-auto lg:px-96 px-2">
        <form className="flex" onSubmit={createPost}>
          <input
            placeholder="What's on your mind, Paul?"
            className="border-y-2 border-l-2 border-r-0 border-gray-100 text-sm rounded-l-md w-full p-2.5 text-center focus:text-left focus:outline-none"
            onChange={(e) => setPost(e.target.value)}
          />
          <button className="bg-white rounded-r-md border-y-2 border-r-2 border-gray-100 hover:bg-sky-300 hover:cursor-default">
            <img
              src="up-arrow.png"
              className="h-4 mx-3 hover:rotate-90 hover:cursor-pointer"
              alt="button"
            />
          </button>
        </form>
      </div>
    </div>
  );
}

export default StatusBar;
