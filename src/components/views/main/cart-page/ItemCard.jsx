
import Image from "next/image";
import Link from "next/link";

import When from "@components/elements/When";
// component
import { IconButton } from "@mui/material";

import useMutation from "@hooks/useMutation";
import useUser from "@hooks/useUser";

import { toPersianNumber } from "@utils/converters";

// service
import { removeFromCart } from "@services/cartServices";

import { CgTrash } from "react-icons/cg";
import { FaChalkboardTeacher } from "react-icons/fa";

import { toast } from "react-toastify";

const ItemCard = ({ item: { _id, cover, title, discount, price, mentor } }) => {
  const { updateUser } = useUser();
  const [mutateRemoveItem] = useMutation(removeFromCart, {
    onSuccess: (data) => {
      toast.success(data.message);
      updateUser(draft => draft.cart = data.cart)
    }
  })

  return (
    <div
      className="flex h-fit gap-y-5 gap-x-10 p-2 rounded-[15px] bg-white 
      max-md:flex-col md:justify-between md:items-center sm:p-5"
    >
      <div className="min-w-0 flex items-center gap-x-5">
        <Image
          src={cover}
          alt="course cover"
          width={150}
          height={150}
          className="aspect-square h-fit w-[60px] sm:w-[100px] md:w-[120px] xl:w-[150px] rounded-[10px] object-cover"
        />
        <div className="min-w-0">
          <Link
            href={`/courses/${_id}`}
            className="block min-w-0 truncate text-lg font-black text-typography transition-colors 
            duration-150 hover:text-primary-500 md:text-xl lg:text-2xl"
          >
            {title}
          </Link>
          <div className="flex items-center gap-x-2 mt-2">
            <FaChalkboardTeacher className="text-mute" />
            <p className="text-xs font-medium text-mute md:text-sm">
              مدرس دوره:{" "}
              <Link
                href={`/mentors/${mentor._id}`}
                className="transition-colors duration-150 hover:text-primary-500"
              >
                {mentor.fullname}
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-7 max-md:justify-between">
        <div>
          <When truthy={!!discount}>
            <div className="flex items-center gap-x-2">
              <p className="font-bold line-through text-mute">
                {toPersianNumber(price)}
              </p>
              <p className="py-0.5 px-2 text-sm font-bold text-white bg-rose-500 rounded-[10px]">
                {toPersianNumber(Math.round((discount / price) * 100))}%
              </p>
            </div>
          </When>
          <p className="mt-1 text-base font-black text-primary-600 md:text-lg lg:text-xl">
            {toPersianNumber(price - discount)}{" "}
            <span className="text-xs font-medium text-mute">تومان</span>
          </p>
        </div>
        <IconButton
          onClick={() => mutateRemoveItem(_id)}
          className="border border-gray-200 border-solid rounded-xl"
        >
          <CgTrash className="text-red-600" />
        </IconButton>
      </div>
    </div>
  );
};

export default ItemCard;
