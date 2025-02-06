import { EllipsisVertical, Heart, MessageCircle, Share2 } from "lucide-react";
import React, { useState } from "react";
export interface PostProps {
  imgSrc: string;
  name: string;
  date: string;
  content: string;
}
const Post: React.FC<PostProps> = ({ imgSrc, name, date, content }) => {
  const handleShare = () => {
    navigator.share({
      title: name,
      text: content,
      url: window.location.href,
    });
  };
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleEdit = () => {
    console.log("Edit"); //TODO: Implement edit
  };
  const handleDelete = () => {
    console.log("Delete"); //TODO: Implement delete
  };
  const handleCopyLink = () => {
    navigator.clipboard.writeText(content);
  };
  return (
    <div className="rounded-lg w-full md:w-[500px]  bg-white shadow-md min-h-fit">
      <div className="p-4 flex flex-col gap-8">
        <div className="flex flex-col ml-4 gap-4">
          <div className="flex flex-row gap-4">
            <img src={imgSrc} alt={name} className="rounded-full w-10 h-10" />
            <div className="flex flex-col">
              <h4 className="font-bold text-md">{name}</h4>
              <p className="text-sm text-gray-500">{date}</p>
            </div>
            <div className="relative ml-auto">
              <button
                type="button"
                onClick={handleOpen}
                className=" cursor-pointer ml-auto hover:bg-gray-200 transition-all duration-300 rounded-md p-1"
              >
                <EllipsisVertical />
              </button>
              {isOpen && (
                <div className="absolute top-5 left-8 bg-white shadow-md rounded-md p-2">
                  <ul className="flex flex-col gap-2 w-fit whitespace-nowrap">
                    <li className="hover:bg-gray-200 transition-all duration-300 rounded-md p-1 cursor-pointer">
                      <button type="button" onClick={handleEdit} className="cursor-pointer w-full">
                        <p>Edit</p>
                      </button>
                    </li>
                    <li className="hover:bg-gray-200 transition-all duration-300 rounded-md p-1 cursor-pointer">
                      <button type="button" onClick={handleDelete} className="cursor-pointer w-full">
                        <p>Delete</p>
                      </button>
                    </li>
                    <li className="hover:bg-gray-200 transition-all duration-300 rounded-md p-1 cursor-pointer">
                      <button type="button" onClick={handleCopyLink} className="cursor-pointer w-full">
                        <p>Copy Link</p>
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="text-sm break-words text-gray-500 line-height-1">
            <p>{content}</p>
          </div>
        </div>
        <div className="flex flex-row gap-8 w-full justify-center p-2">
          <button className="flex flex-row gap-2 ">
            <Heart className="hover:fill-red-500 hover:scale-110 transition-all duration-300 hover:text-red-500" />
            <p className="md:block hidden">Like</p>
          </button>
          <button className="flex flex-row gap-2">
            <MessageCircle className="hover:fill-blue-500 hover:scale-110 transition-all duration-300 hover:text-blue-500" />
            <p className="md:block hidden">Comment</p>
          </button>
          <button className="flex flex-row gap-2" onClick={handleShare}>
            <Share2 className="hover:fill-green-500 hover:scale-110 transition-all duration-300 hover:text-green-500" />
            <p className="md:block hidden">Share</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
