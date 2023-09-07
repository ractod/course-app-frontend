import Link from "next/link";

import BaseTable from "@components/elements/BaseTable";
import EmptyState from "@components/elements/EmptyState";
import { Chip } from "@mui/material";

import { toPersianDate, toPersianNumber } from "@utils/converters";

import { paymentTableHeads } from "@constants/tablesHeads";

import isEmpty from "lodash/isEmpty";

const TableItem = ({ payment }) => {
  return (
    <tr className="tbody-row">
      <td>{toPersianNumber(payment.amount)}</td>
      <td>{toPersianDate(payment.date)}</td>
      <td>
        <Chip label="موفق" color="success" className="text-white" />
      </td>
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

const PaymentsTable = ({ payments }) => {

  if (isEmpty(payments)) {
    return (
      <EmptyState
        title="تراکنشی وجود ندارد"
        subTitle="به نظر می رسد شما خریدی انجام ندادید"
        linkLabel="دیدن دوره ها"
        linkHref="/courses"
      />
    );
  }

  return (
    <BaseTable heads={paymentTableHeads}>
      {payments.map((payment) => (
        <TableItem key={payment._id} payment={payment} />
      ))}
    </BaseTable>
  );
};

export default PaymentsTable;
