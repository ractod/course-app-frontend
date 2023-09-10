
import { LinearProgress } from "@mui/material";

import { toPersianNumber } from "@utils/converters";

import { RxFileText } from "react-icons/rx";

const FileProgress = ({ progress, fileName }) => {
  return (
    <div className="flex justify-end items-center gap-x-2 p-4 border border-solid border-gray-300 rounded-xl">
      <div className="flex-auto">
        <div className="flex justify-between">
          <span className="text-[10px] font-medium text-mute md:text-[11px] lg:text-xs">
            {toPersianNumber(progress)}
          </span>
          <span className="text-[10px] font-medium text-mute md:text-[11px] lg:text-xs">
            {fileName}
          </span>
        </div>
        <LinearProgress
          value={progress}
          valueBuffer={progress}
          variant="buffer"
          classes={{
            indeterminate: "bg-gray-300",
            root: "roudned-full",
          }}
        />
      </div>
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200">
        <RxFileText className="text-2xl text-primary-500" />
      </div>
    </div>
  );
};

export default FileProgress;
