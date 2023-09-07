
import When from "@components/elements/When";
import { Button } from "@mui/material";

import { TbFolder } from "react-icons/tb";

const UploadArea = ({ onDrag, onDrop, onChange, isDragging, hasButton, onBlur, accept }) => {
  return (
    <form className="flex flex-col items-center">
      <label
        onDragOver={onDrag(true)}
        onDragEnter={onDrag(true)}
        onDragLeave={onDrag(false)}
        onDrop={onDrop}
        htmlFor="avatar-input"
        className={`
          w-full flex flex-col justify-center items-center gap-y-3 py-6 px-3 text-center
          cursor-pointer bg-border-dashed roudned-xl ${isDragging ? "bg-gray-200" : ""}
        `}
      >
        <div className="w-[100px] h-[100px] flex items-center justify-center rounded-full bg-primary-300">
          <TbFolder className="text-primary-500 text-4xl" />
        </div>
        <p classname="text-[10px] font-medium text-mute md:text-[11px] lg:text-xs">
          فایل خود را اینجا بگذارید تا آپلود شود یا انتخاب کنید
        </p>
      </label>
      <When truthy={hasButton}>
        <Button
          component="label"
          htmlFor="avatar-input"
          variant="contained"
          className="rounded-full mt-6"
        >
          انتخاب فایل
        </Button>
      </When>
      <input
        onChange={onChange}
        onBlur={onBlur}
        type="file"
        className="hidden"
        id="avatar-input"
        accept={accept}
      />
    </form>
  );
};

export default UploadArea;
