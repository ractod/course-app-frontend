import { useState } from "react";

import When from "@components/elements/When";
import { Button, CircularProgress } from "@mui/material";

import { toPersianNumber } from "@utils/converters";

const PublishStep = ({ onPrevStep, formData, onUpload, onCancelUpload, isUploading }) => {
  const [progress, setProgress] = useState(false);

  const handleUploadProgress = (event) => {
    const { loaded, total } = event;
    const percentage = Math.floor((loaded / total) * 100);
    setProgress(percentage);
  };

  const formateFormData = (values) => {
    const data = new FormData();

    data.append("title", values.title);
    data.append("price", values.price);
    data.append("discount", values.discount);
    data.append("cover", values.cover);
    data.append("duration", values.duration);
    data.append("category", values.category);
    data.append("description", values.description);
    values.sessions.map((session, index) => {
      data.append(`sessions[${index}][title]`, session.title);
      data.append(`sessions[${index}][description]`, session.description || "");
      data.append(`sessions[${index}][videoLink]`, session.videoLink);
      data.append(`sessions[${index}][isFree]`, session.isFree || false);
    });

    return data;
  };

  const handleUpload = () => {
    onUpload(formateFormData(formData), handleUploadProgress)
  };

  const handleCancelUpload = () => {
    onCancelUpload()
    setProgress(0)
  }

  return (
    <div>
      <When truthy={!isUploading}>
        <div className="max-w-[500px] mx-auto py-10">
          <h4 className="text-base font-medium text-typography md:text-[17px] lg:text-lg">
            لطفا به نکات زیر توجه کنید
          </h4>
          <p className="mt-2 text-sm font-medium text-mute md:text-[15px] lg:text-[16px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می
          </p>
        </div>
      </When>
      <When truthy={isUploading}>
        <div className="flex flex-col items-center justify-center gap-y-2">
          <div className="relative">
            <CircularProgress
              variant="determinate"
              value={progress}
              classes={{
                root: "w-[80px_!important] h-[80px_!important]",
                svg: "w-20 h-20",
              }}
            />
            <span 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-1 
              text-sm font-medium text-mute md:text-[15px] lg:text-base"
            >
              {toPersianNumber(progress)}%
            </span>
          </div>
          <span className="text-sm font-black text-typography md:text-[15px] lg:text-base">
            درحال بارگذاری دوره شما...
          </span>
        </div>
      </When>
      <div className="flex items-center justify-between mt-5">
        <When truthy={!isUploading}>
          <Button variant="contained" onClick={handleUpload}>
            بارگذاری
          </Button>
        </When>
        <When truthy={isUploading}>
          <Button variant="contained" onClick={handleCancelUpload}>
            لفو بارگذاری 
          </Button>
        </When>
        <Button
          color="gray"
          variant="contained"
          onClick={onPrevStep}
          disabled={isUploading}
        >
          مرحله قبل
        </Button>
      </div>
    </div>
  );
};

export default PublishStep;
