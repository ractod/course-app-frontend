"use client";
import BaseTable from "@components/elements/BaseTable";
import EmptyState from "@components/elements/EmptyState";
import { IconButton } from "@mui/material";
import DeleteCouponModal from "./modals/DeleteCouponModal";
import EditCouponModal from "./modals/EditCouponModal";

import useToggle from "@hooks/useToggle";
import useUser from "@hooks/useUser";

import { toPersianDate, toPersianNumber } from "@utils/converters";

import { couponTableHeads } from "@constants/tablesHeads";

import { BiSolidPencil } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";

import { isEmpty } from "lodash";

const typeLabels = {
  percentage: "درصد",
  fixed_amount: "مقدار ثابت",
};

const CouponsTable = () => {
  const { user } = useUser();
  const coupons = user?.mentorData.coupons;

  if (isEmpty(coupons)) {
    return (
      <EmptyState
        title="کد تخفیفی وجود ندارد"
        subTitle="به نظر می رسد تا حالا کد تخفیفی نساختید"
      />
    );
  }

  return (
    <BaseTable heads={couponTableHeads}>
      {coupons.reverse().map((coupon) => (
        <TableItem key={coupon._id} coupon={coupon} />
      ))}
    </BaseTable>
  );
};

export default CouponsTable;

const TableItem = ({
  coupon,
  coupon: { code, type, discount, expireDate, inStockCount, courses, _id },
}) => {
  const [isEditModalOpen, toggleEditModal] = useToggle(false);
  const [isDeleteModalOpen, toggleDeleteModal] = useToggle(false);

  return (
    <tr className="tbody-row">
      <td>{code}</td>
      <td>{typeLabels[type]}</td>
      <td>
        {type == "percentage" && "%"} {toPersianNumber(discount)}{" "}
        {type == "fixed_amount" && "تومان"}
      </td>
      <td>{toPersianNumber(inStockCount)}</td>
      <td>
        {courses.map((course) => (
          <p key={course._id}>{course.title}</p>
        ))}
      </td>
      <td>{toPersianDate(expireDate)}</td>
      <td>
        <div className="flex items-center gap-x-5">
          <IconButton onClick={toggleEditModal}>
            <BiSolidPencil />
          </IconButton>
          <IconButton onClick={toggleDeleteModal}>
            <BsTrash />
          </IconButton>
        </div>
      </td>
      <EditCouponModal
        open={isEditModalOpen}
        onClose={toggleEditModal}
        coupon={coupon}
      />
      <DeleteCouponModal
        open={isDeleteModalOpen}
        onClose={toggleDeleteModal}
        couponId={_id}
        couponCode={code}
      />
    </tr>
  );
};