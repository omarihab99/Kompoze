import { EllipsisVertical, Heart, MessageCircle, Share2 } from "lucide-react";
import React, { useState } from "react";
export interface PostProps {
  imgSrc: string;
  name: string;
  date: string;
  content: string;
  onSave: (content: string) => void;
  onDelete: () => void;
  onLike: () => void;
  onComment: () => void;
  onShare: () => void;
  onCopy: (content: string) => void;
}
/**
 * Post component
 * @param {PostProps} props - The props for the Post component
 * @returns {React.ReactElement} The Post component
 */
const Post: React.FC<PostProps> = ({
  imgSrc,
  name,
  date,
  content,
  onSave,
  onDelete,
  onLike,
  onComment,
  onShare,
  onCopy,
}) => {
  const handleShare = () => {
    if (onShare) {
      onShare();
    } else {
      navigator.share({
        title: name,
        text: content,
        url: window.location.href,
      });
    }
  };
  const [postContent, setPostContent] = useState(content);
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleEdit = () => {
    setIsOpen(false);
    setIsEdit(!isEdit);
  };
  const handleSave = () => {
    setIsEdit(!isEdit);
    onSave(postContent);
  };
  const handleDelete = () => {
    onDelete();
  };
  const handleCopyLink = () => {
    navigator.clipboard.writeText(postContent);
    onCopy(postContent);
    setIsOpen(false);
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
                <div className="absolute md:top-5 md:left-8 md:right-auto top-10 right-4 bg-white shadow-md rounded-md p-2">
                  <ul className="flex flex-col gap-2 w-fit whitespace-nowrap">
                    <li className="hover:bg-gray-200 transition-all duration-300 rounded-md p-1 cursor-pointer">
                      <button
                        type="button"
                        onClick={handleEdit}
                        className="cursor-pointer w-full"
                      >
                        <p>Edit</p>
                      </button>
                    </li>
                    <li className="hover:bg-gray-200 transition-all duration-300 rounded-md p-1 cursor-pointer">
                      <button
                        type="button"
                        onClick={handleDelete}
                        className="cursor-pointer w-full"
                      >
                        <p>Delete</p>
                      </button>
                    </li>
                    <li className="hover:bg-gray-200 transition-all duration-300 rounded-md p-1 cursor-pointer">
                      <button
                        type="button"
                        onClick={handleCopyLink}
                        className="cursor-pointer w-full"
                      >
                        <p>Copy text</p>
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          {isEdit ? (
            <div className="flex flex-col gap-2 justify-center items-center">
              <textarea
                className="w-full outline-1 p-2 rounded-md"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
              />
              <button
                type="button"
                className="bg-green-700 cursor-pointer w-fit px-4 hover:bg-gray-50 transition-all duration-300 hover:text-green-700 border-2 border-green-700 text-white p-2 rounded-md"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          ) : (
            <div className="text-sm break-words text-gray-500 line-height-1">
              <p>{content}</p>
            </div>
          )}
        </div>
        <div className="flex flex-row gap-8 w-full justify-center p-2">
          <button
            className="flex flex-row gap-2 cursor-pointer"
            onClick={onLike}
          >
            <Heart className="hover:fill-red-500  transition-all duration-300 hover:text-red-500" />
            <p className="md:block hidden">Like</p>
          </button>
          <button
            className="flex flex-row gap-2 cursor-pointer"
            onClick={onComment}
          >
            <MessageCircle className="hover:fill-blue-500  transition-all duration-300 hover:text-blue-500" />
            <p className="md:block hidden">Comment</p>
          </button>
          <button
            className="flex flex-row gap-2 cursor-pointer"
            onClick={handleShare}
          >
            <Share2 className="hover:fill-green-500 transition-all duration-300 hover:text-green-500" />
            <p className="md:block hidden">Share</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
