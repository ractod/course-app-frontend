"use client";
import { useState } from "react";

import useMutation from "@hooks/useMutation";
import useUser from "@hooks/useUser";

import { toPersianNumber } from "@utils/converters";

import { likeCourse, saveCourse } from "@services/coursesServices";

import { BiLike, BiSolidLike } from "react-icons/bi";
import { BsBookmark,BsBookmarkFill } from "react-icons/bs";

import includes from "lodash/includes";
import some from "lodash/some";
import xor from "lodash/xor";
import xorWith from "lodash/xorWith";

const CardActions = ({ course }) => {
  const { user, updateUser } = useUser();
  const [likesCount, setLikesCount] = useState(course.likes);
  const isSaved = () => some(user?.savedCourses, { _id: course._id });
  const isLiked = () => includes(user?.likedCourses, course._id);

  const [mutateLike] = useMutation(likeCourse, {
    onSuccess: () => {
      setLikesCount((pervState) => (isLiked() ? pervState - 1 : pervState + 1));
      updateUser((draft) => {
        draft.likedCourses =  xor(draft.likedCourses, [course._id]) 
      });
    },
  });
  const [mutateSave] = useMutation(saveCourse, {
    onSuccess: () => {
      updateUser((draft) => {
        draft.savedCourses = xorWith(user?.savedCourses, [course], (item) => item._id == course._id)
      });
    },
  });

  return (
    <div className="absolute top-0 left-0 flex justify-between w-full p-2">
      <button
        onClick={() => mutateSave(course._id)}
        className="group w-10 h-10 flex items-center justify-center rounded-[10px]
        bg-white hover:bg-blue-700 transition-colors duration-200 z-10 cursor-pointer"
      >
        {isSaved() ? (
          <BsBookmarkFill className="text-sm text-blue-700 transition-colors duration-200 group-hover:text-white " />
        ) : (
          <BsBookmark className="text-sm text-blue-700 transition-colors duration-200 group-hover:text-white " />
        )}
      </button>
      <button
        onClick={() => mutateLike(course._id)}
        className="group min-w-[40px] h-10 flex items-center justify-center gap-x-1 rounded-[10px] 
        bg-white hover:bg-red-700 transition-colors duration-200 z-10 cursor-pointer"
      >
        {isLiked() ? (
          <BiSolidLike className="text-sm text-red-700 transition-colors duration-200 group-hover:text-white" />
        ) : (
          <BiLike className="text-sm text-red-700 transition-colors duration-200 group-hover:text-white" />
        )}
        <span className="mt-1 text-[13px] font-bold text-red-700 group-hover:text-white transition-colors duration-200">
          {toPersianNumber(likesCount)}
        </span>
      </button>
    </div>
  );
};

export default CardActions;
