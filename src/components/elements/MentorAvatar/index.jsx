import Image from "next/image";
import Link from "next/link";

const MentorAvatar = ({ mentor, width = 24, height = 24 }) => {
  return (
    <div className="flex items-center gap-x-2">
      <Image
        src={mentor.avatar || "/images/user-placeholder.png"}
        alt="mentor avatar"
        width={width}
        height={height}
        className="object-cover rounded-full"
      />
      <Link
        href={`/mentors/${mentor._id}`}
        className="text-sm font-medium transition-colors duration-300 text-mute hover:text-primary-500"
      >
        {mentor.fullname}
      </Link>
    </div>
  );
};

export default MentorAvatar;
