import { useState } from "react";

import When from "@components/elements/When";
import FileProgress from "./FileProgress";
import UploadArea from "./UploadArea";

const FileUploader = ({ hasButton = true, hasProgress = true,value, onChange, onBlur, accept }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [progress, setProgress] = useState(0);

  // handling drag state for style
  const handleDrag = (isDragging) => (event) => {
    event.preventDefault();
    setIsDragging(isDragging);
  };

  const handleUploadProgress = (event) => {
    const { loaded, total } = event;
    const percentage = Math.floor((loaded / total) * 100);
    setProgress(percentage);
  };

  // when file is selected by input
  const handleChange = (event) => {
    const file = event.target.files[0];
    onChange(file, handleUploadProgress);
  };

  // when file is dropped on area
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    onChange(file, handleUploadProgress);
    setIsDragging(false);
  };

  return (
    <div>
      <UploadArea
        onDrag={handleDrag}
        onDrop={handleDrop}
        onChange={handleChange}
        isDragging={isDragging}
        hasButton={hasButton}
        onBlur={onBlur}
        accept={accept}
      />
      <When truthy={!!value && hasProgress}>
        <hr className="h-[1px] w-full my-8 bg-gray-300" />
        <FileProgress progress={progress} fileName={value?.name} />
      </When>
    </div>
  );
};

export default FileUploader;
