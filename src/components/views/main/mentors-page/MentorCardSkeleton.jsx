import { Skeleton } from "@mui/material";

const MentorCardSkeleton = () => {
  return (
    <div className="col-span-1">
      <Skeleton animation="wave" className="aspect-square w-full rounded-[10px] scale-100 bg-gray-200" />
      <Skeleton animation="wave" className="w-[40%] mt-[10px] bg-gray-200" />
      <Skeleton animation="wave" className="mt-2 bg-gray-200" />
    </div>
  );
}

export default MentorCardSkeleton;