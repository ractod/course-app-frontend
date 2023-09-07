import { Skeleton } from "@mui/material";

const CourseCardSkeleton = () => {
  return (
    <div className="col-span-1 p-2 rounded-[15px] bg-white md:p-3">
      <Skeleton animation="wave" className="-mt-14 aspect-[13/9] rounded-[10px] scale-100 bg-gray-200"/>
      <Skeleton animation="wave" className="mt-2 bg-gray-200" />
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-x-1">
          <Skeleton animation="wave" variant="circular" className="w-6 h-6 bg-gray-200" />
          <Skeleton animation="wave" className="h-2 w-20 bg-gray-200" />
        </div>
        <Skeleton animation="wave" className="h-2 w-20 bg-gray-200" />
      </div>
      <Skeleton animation="wave" className="mt-10 h-20 bg-gray-200" />
    </div>
  );
};

export default CourseCardSkeleton;
