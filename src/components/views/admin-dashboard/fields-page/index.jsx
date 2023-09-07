"use client";
import BaseTable from "@components/elements/BaseTable";
import DotsLoading from "@components/elements/DotsLoading";
import { Button, IconButton } from "@mui/material";
import CreateFieldModal from "./modals/CreateFieldModal";
import DeleteFieldModal from "./modals/DeleteFieldModal";
import EditFieldModal from "./modals/EditFieldModal";

import useQuery from "@hooks/useQuery";
import useToggle from "@hooks/useToggle";

import { getAdminAllFields } from "@services/adminServices";

import { fieldsTableHeads } from "@constants/tablesHeads";

import { BiSolidMessageSquareAdd, BiSolidPencil } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";

const AdminCategoriesPage = () => {
  const [isCreateModalOpen, toggleCreateModal] = useToggle(false);
  const [fields, { loading, setData: setFields }] = useQuery(
    [],
    getAdminAllFields
  );

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
        <div className="flex flex-col  justify-between gap-5 mb-7 md:items-center md:flex-row">
          <h2 className="text-lg text-typography font-black md:text-xl lg:text-2xl">
            حوضه ها
          </h2>
          <Button
            variant="contained"
            endIcon={<BiSolidMessageSquareAdd />}
            className="max-md:w-full"
            onClick={toggleCreateModal}
          >
            حوضه جدید
          </Button>
        </div>
        <BaseTable heads={fieldsTableHeads}>
          {fields.map((field) => (
            <TableItem
              key={field._id}
              field={field}
              setFields={setFields}
            />
          ))}
        </BaseTable>
        <CreateFieldModal 
          open={isCreateModalOpen}
          onClose={toggleCreateModal}
          setFields={setFields}
        />
      </section>
    </main>
  );
};

export default AdminCategoriesPage;

const TableItem = ({ field, setFields }) => {
  const [isEditModalOpen, toggleEditModal] = useToggle(false);
  const [isDeleteModalOpen, toggleDeleteModal] = useToggle(false)

  return (
    <tr className="tbody-row">
      <td>{field.title}</td>
      <td>{field.englishTitle}</td>
      <td>
        <div className="flex items-center justify-end gap-x-2">
          <IconButton onClick={toggleEditModal}>
            <BiSolidPencil />
          </IconButton>
          <IconButton onClick={toggleDeleteModal}>
            <BsTrash />
          </IconButton>
        </div>
        <EditFieldModal
          open={isEditModalOpen}
          onClose={toggleEditModal}
          setFields={setFields}
          field={field}
        />
        <DeleteFieldModal
          open={isDeleteModalOpen}
          onClose={toggleDeleteModal}
          setFields={setFields}
          field={field}
        />
      </td>
    </tr>
  );
};
