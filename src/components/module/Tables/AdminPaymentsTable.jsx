import Link from "next/link";

import BaseTable from "@components/elements/BaseTable";
import EmptyState from "@components/elements/EmptyState";
import { Chip } from "@mui/material";

import { toPersianDate, toPersianNumber } from "@utils/converters";

import { adminPaymentsTableHeads } from "@constants/tablesHeads";

import isEmpty from "lodash/isEmpty";

const AdminPaymentsTable = ({ payments }) => {
  if (isEmpty(payments)) {
    return (
      <EmptyState
        title="تراکنشی وجود ندارد"
        subTitle="به نظر می رشد تا حالا تراکنشی انجام نشده است"
      />
    );
  }

  return (
    <BaseTable heads={adminPaymentsTableHeads}>
      {payments.map((payment) => (
        <TableItem key={payment._id} payment={payment} />
      ))}
    </BaseTable>
  );
};

export default AdminPaymentsTable;

const TableItem = ({ payment }) => {
  return (
    <tr className="tbody-row">
      <td>{toPersianNumber(payment.amount)}</td>
      <td>{toPersianDate(payment.date)}</td>
      <td>
        <Chip label="موفق" color="success" className="text-white" />
      </td>
      <td>{payment.user.email}</td>
      <td>
        {payment.courses.map((course) => (
          <Link
            key={course._id}
            href={`/courses/${course._id}`}
            className="block whitespace-nowrap transition-colors duration-150 hover:text-primary-500"
          >
            {course.title}
            {"، "}
          </Link>
        ))}
      </td>
    </tr>
  );
};
