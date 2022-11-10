import axios from "axios";
import React, { useEffect, useState } from "react";

function Feeds() {
  const [isShown, setIsShown] = useState(false);
  const [feeds, setFeeds] = useState(null);

  // func 'more' button
  const clickMore = () => {
    setIsShown((current) => !current);
  };

  // func get data
  const getData = async () => {
    const get = await axios.get("http://localhost:4000/feeds");
    const result = get.data;
    setFeeds(result);
    console.log(result);
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
                  onClick={clickMore}
                />
                {isShown && (
                  <div className="absolute top-10 right-8 border bg-white rounded-md">
                    <div className="flex flex-col text-xs">
                      <button className="p-2 hover:bg-sky-500 hover:text-white hover:rounded-t-md">
                        Edit Post
                      </button>
                      <button className="p-2 hover:bg-red-500 hover:text-white hover:rounded-b-md">
                        Delete Post
                      </button>
                    </div>
                  </div>
                )}
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
