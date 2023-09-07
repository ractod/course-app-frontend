import { IconButton } from "@mui/material";

import { BsTrash } from "react-icons/bs";
import { RxFileText } from "react-icons/rx";

const File = ({ onDelete, fileName }) => {
  return (
    <div className="flex justify-between items-center gap-x-2 mt-2 p-4 border border-solid border-gray-300 rounded-xl">
      <IconButton color="error" onClick={onDelete}>
        <BsTrash />
      </IconButton>
      <div className="flex items-center gap-x-2">
        <span className="text-[10px] font-medium text-mute md:text-[11px] lg:text-xs">
          {fileName}
        </span>
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200">
          <RxFileText className="text-2xl text-primary-500" />
        </div>
      </div>
    </div>
  );
};

export default File;
