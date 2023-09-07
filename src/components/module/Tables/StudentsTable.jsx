import BaseTable from "@components/elements/BaseTable";
import EmptyState from "@components/elements/EmptyState";

import { studentTableHeads } from "@constants/tablesHeads";

import isEmpty from "lodash/isEmpty";

const TableItem = ({ student: { fullname, email }, purchasedCourses }) => {
  return (
    <tr className="tbody-row">
      <td> {fullname} </td>
      <td>{email}</td>
      <td>
        {purchasedCourses.map((course) => (
          <p key={course._id}>{course.title}،</p>
        ))}
      </td>
    </tr>
  );
};

const StudentsTable = ({ students }) => {
  if (isEmpty(students)) {
    return (
      <EmptyState
        title="دانشجویی ندارید"
        subTitle="به نظر می رسد کسی دوره های شما را خریداری نکرده است"
      />
    );
  }

  return (
    <BaseTable heads={studentTableHeads}>
      {students.map((item) => (
        <TableItem
          key={item._id}
          student={item.student}
          purchasedCourses={item.purchasedCourses}
        />
      ))}
    </BaseTable>
  );
};

export default StudentsTable;
