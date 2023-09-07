"use client";
import Link from "next/link";

import BaseTable from "@components/elements/BaseTable";
import DotsLoading from "@components/elements/DotsLoading";
import EmptyState from "@components/elements/EmptyState";
import When from "@components/elements/When";
import { IconButton } from "@mui/material";
import DeleteUserModal from "./DeleteUserModal";

import useQuery from "@hooks/useQuery";
import useToggle from "@hooks/useToggle";

import { getAllUsers } from "@services/adminServices";

import { usersTableHeads } from "@constants/tablesHeads";

import { BsTrash } from "react-icons/bs";

import isEmpty from "lodash/isEmpty";

const AdminUsersPage = () => {
  const [users, { loading, setData: setUsers }] = useQuery([], getAllUsers);

  if (loading) {
    return (
      <main className="h-screen flex-1">
        <DotsLoading />
      </main>
    );
  }

  return (
    <main className="container py-10 px-5">
      <section>
        <h2 className="mb-7 text-lg text-mute font-black md:text-xl lg:text-2xl">
          کاربران
        </h2>
        <When
          truthy={!isEmpty(users)}
          fallback={
            <EmptyState
              title="دانشجویی وجود ندارد"
              subTitle="به نظر می رسد تا حالا کسی دوره ای خریداری نکرده"
            />
          }
        >
          <BaseTable heads={usersTableHeads}>
            {users.map((user) => (
              <TableItem key={user._id} user={user} setUsers={setUsers} />
            ))}
          </BaseTable>
        </When>
      </section>
    </main>
  );
};

export default AdminUsersPage;

const TableItem = ({ user, setUsers }) => {
  const [isDeleteModalOpen, toggleDeleteModal] = useToggle(false);

  return (
    <tr className="tbody-row">
      {console.log(user)}
      <td>{user.fullname}</td>
      <td>{user.email}</td>
      <td>
        {user.purchasedCourses.map((course) => (
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
      <td>
        <IconButton onClick={toggleDeleteModal}>
          <BsTrash />
        </IconButton>
        <DeleteUserModal
          setUsers={setUsers}
          user={user}
          open={isDeleteModalOpen}
          onClose={toggleDeleteModal}
        />
      </td>
    </tr>
  );
};
