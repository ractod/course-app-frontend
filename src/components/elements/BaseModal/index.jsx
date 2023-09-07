import { Button, Dialog, DialogContent, IconButton } from "@mui/material";

import { IoMdClose } from "react-icons/io";

import When from "../When";
import { LoadingButton } from "@mui/lab";

const BaseModal = ({ children, open, onClose, className, maxWidth = "sm" }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      scroll="body"
      fullWidth
      maxWidth={maxWidth}
      classes={{
        paper: `py-5 px-8 m-3 rounded-[15px] text-right ${className}`,
      }}
    >
      {children}
    </Dialog>
  );
};

export default BaseModal;

BaseModal.content = ({ children }) => (
  <DialogContent className="p-0 scrollbar-hidden">{children}</DialogContent>
);

BaseModal.header = ({ title, onClose }) => (
  <div className="flex items-center justify-between mb-8">
    <h4 className="text-lg font-black text-typography md:text-xl lg:text-2xl">
      {title}
    </h4>
    <IconButton
      onClick={onClose}
      size="small"
      className="border border-solid border-mute"
    >
      <IoMdClose />
    </IconButton>
  </div>
);

BaseModal.actions = ({
  primaryBtnProps = {},
  secondaryBtnProps = {},
  hasSecondaryBtn = true,
}) => (
  <div className="flex gap-x-4 mt-8">
    <LoadingButton
      variant="contained"
      className="w-full "
      {...primaryBtnProps}
    >
      {primaryBtnProps.label}
    </LoadingButton>
    <When truthy={hasSecondaryBtn}>
      <Button
        color="gray"
        variant="contained"
        className="w-full text-typography "
        {...secondaryBtnProps}
      >
        {secondaryBtnProps.label}
      </Button>
    </When>
  </div>
);
