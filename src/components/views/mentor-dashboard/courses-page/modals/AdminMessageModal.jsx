import BaseModal from "@components/elements/BaseModal";
import { Alert, AlertTitle } from "@mui/material";

const AdminMessageModal = ({ message, open, onClose }) => {
  return (
    <BaseModal open={open} onClose={onClose}>
      <BaseModal.header title="پیام ادمین" onClose={onClose} />
      <BaseModal.content>
        <Alert severity="error" className="gap-x-4 rounded-xl">
          <AlertTitle className="text-right font-bold text-base md:text-[17px] lg:text-lg">
            دلیل عدم انتشار دوره
          </AlertTitle>
          <p className="text-right text-sm font-medium text-typography md:text-[15px] lg:text-base">
            {message}
          </p>
        </Alert>
      </BaseModal.content>
      <BaseModal.actions
        primaryBtnProps={{ label: "فهمیدم", onClick: onClose }}
        hasSecondaryBtn={false}
      />
    </BaseModal>
  );
};

export default AdminMessageModal;
