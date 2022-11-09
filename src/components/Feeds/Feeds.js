import React from "react";

function Feeds() {
  return (
    <div className="flex justify-center mt-3.5">
      <div className="container mx-auto lg:px-96">
        <div className="relative">
          <img
            src="more.png"
            alt="more"
            className="absolute top-5 right-5 w-5 hover:cursor-pointer"
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
                <p className="text-md font-bold text-sky-900">Thomas Ben</p>
                <p className="text-xs text-gray-400">45 mins ago</p>
              </div>
            </div>
            <div className="mt-4 ml-1">
              <p className="text-sm mr-10 text-sky-900 font-medium">
                Being a father is sometimes my hardest but always my most
                rewarding job. Happy Father's Day to all dads out there.
              </p>
            </div>
          </div>
          <div className="mb-5 mr-5 flex justify-end">
            <div className="flex mr-3">
              <img src="like.png" alt="like" className="w-6 h-6" />
              <p className="text-xs text-gray-500">4</p>
            </div>
            <div className="flex mr-3">
              <img src="comments.png" alt="comment" className="w-6 h-6" />
              <p className="text-xs text-gray-500">2</p>
            </div>
            <div className="flex">
              <img src="share.png" alt="share" className="w-6 h-6" />
              <p className="text-xs text-gray-500">1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feeds;
