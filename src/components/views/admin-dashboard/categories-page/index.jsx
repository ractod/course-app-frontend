"use client";
import BaseTable from "@components/elements/BaseTable";
import DotsLoading from "@components/elements/DotsLoading";
import { Button, IconButton } from "@mui/material";
import CreateCategoryModal from "./modals/CreateCategoryModal";
import DeleteCategoryModal from "./modals/DeleteCategoryModal";
import EditCategoryModal from "./modals/EditCategoryModal";

import useQuery from "@hooks/useQuery";
import useToggle from "@hooks/useToggle";

import { getAdminAllCategories } from "@services/adminServices";

import { categoriesTableHeads } from "@constants/tablesHeads";

import { BiSolidMessageSquareAdd, BiSolidPencil } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";

const AdminCategoriesPage = () => {
  const [isCreateModalOpen, toggleCreateModal] = useToggle(false);
  const [categories, { loading, setData: setCategories }] = useQuery(
    [],
    getAdminAllCategories
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
            دسته بندی ها
          </h2>
          <Button
            variant="contained"
            endIcon={<BiSolidMessageSquareAdd />}
            className="max-md:w-full"
            onClick={toggleCreateModal}
          >
            دسته بندی جدید
          </Button>
        </div>
        <BaseTable heads={categoriesTableHeads}>
          {categories.map((category) => (
            <TableItem
              key={category._id}
              category={category}
              setCategories={setCategories}
            />
          ))}
        </BaseTable>
        <CreateCategoryModal
          open={isCreateModalOpen}
          onClose={toggleCreateModal}
          setCategories={setCategories}
        />
      </section>
    </main>
  );
};

export default AdminCategoriesPage;

const TableItem = ({ category, setCategories }) => {
  const [isEditModalOpen, toggleEditModal] = useToggle(false);
  const [isDeleteModalOpen, toggleDeleteModal] = useToggle(false)

  return (
    <tr className="tbody-row">
      <td>{category.title}</td>
      <td>{category.englishTitle}</td>
      <td>
        <div className="flex items-center justify-end gap-x-2">
          <IconButton onClick={toggleEditModal}>
            <BiSolidPencil />
          </IconButton>
          <IconButton onClick={toggleDeleteModal}>
            <BsTrash />
          </IconButton>
        </div>
        <EditCategoryModal
          open={isEditModalOpen}
          onClose={toggleEditModal}
          category={category}
          setCategories={setCategories}
        />
        <DeleteCategoryModal
          open={isDeleteModalOpen}
          onClose={toggleDeleteModal}
          category={category}
          setCategories={setCategories}
        />
      </td>
    </tr>
  );
};
