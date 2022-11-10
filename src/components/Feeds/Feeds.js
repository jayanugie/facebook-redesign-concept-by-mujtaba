import axios from "axios";
import React, { useEffect, useState } from "react";

function Feeds() {
  const [feeds, setFeeds] = useState(null);

  // get data
  const getData = async () => {
    const get = await axios.get("http://localhost:4000/feeds");
    const result = get.data;
    setFeeds(result);
    console.log(result);
  };

  // delete data
  const deleteData = async (id, e) => {
    e.preventDefault();
    const result = await axios.delete(
      `http://localhost:4000/feeds/delete/${id}`
    );
    alert(result.data.message);
    window.location.reload();
  };

  useEffect(() => {
    getData();
  }, []);

  if (!feeds) return null;

  return (
    <>
      {feeds.map((post) => {
        return (
          <div className="flex justify-center mt-3.5">
            <div className="container mx-auto lg:px-96 px-2">
              <div className="relative">
                <img
                  src="more.png"
                  alt="more"
                  className="absolute top-4 right-5 w-7 hover:cursor-pointer p-1 rounded-full hover:bg-gray-200 "
                />
              </div>
              <div className="border border-gray-100 rounded-md bg-white">
                <div className="p-8 ">
                  <div className="flex">
                    <img
                      src="profile-feeds.png"
                      className="w-12 shadow-md border-2 border-white rounded-full "
                      alt="profile"
                    />
                    <div className="ml-5 mt-1">
                      <p className="text-md font-bold text-sky-900">
                        Thomas Ben
                      </p>
                      <p className="text-xs text-gray-400">45 mins ago</p>
                    </div>
                  </div>
                  <div className="mt-4 ml-1">
                    <p className="text-sm mr-10 text-sky-900 font-medium">
                      {post.body}
                    </p>
                  </div>
                </div>
                <div className="mb-5 mr-8 flex justify-end">
                  <div className="flex mr-3 hover:bg-sky-300 rounded-md">
                    <img
                      src="edit.png"
                      alt="edit"
                      className="w-6 h-6 hover:cursor-pointer"
                    />
                  </div>
                  <div className="flex mr-3 hover:bg-red-300 rounded-full">
                    <img
                      src="trash.png"
                      alt="delete"
                      className="w-6 h-6 hover:cursor-pointer"
                      onClick={(e) => deleteData(post.id, e)}
                    />
                  </div>
                  <div className="flex mr-3">
                    <img
                      src="like.png"
                      alt="like"
                      className="w-6 h-6 hover:cursor-pointer"
                    />
                    <p className="text-xs text-gray-500">4</p>
                  </div>
                  <div className="flex mr-3">
                    <img
                      src="comments.png"
                      alt="comment"
                      className="w-6 h-6 hover:cursor-pointer"
                    />
                    <p className="text-xs text-gray-500">2</p>
                  </div>
                  <div className="flex">
                    <img
                      src="share.png"
                      alt="share"
                      className="w-6 h-6 hover:cursor-pointer"
                    />
                    <p className="text-xs text-gray-500">1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Feeds;
