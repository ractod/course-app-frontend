import { useMemo } from "react";

import EmptyState from "@components/elements/EmptyState";
import ControlWrapper from "@components/elements/FormControls/ControlWrapper";
import FormInput from "@components/elements/FormControls/FormInput";
import FormTextArea from "@components/elements/FormControls/FormTextArea";
import When from "@components/elements/When";
import FileUploader from "@components/module/FileUploader";
import { Button, Checkbox, FormControlLabel, IconButton } from "@mui/material";
import File from "./File";

import { toPersianNumber } from "@utils/converters";
import { sessionsStepValidator } from "@utils/validators";

import { BiSolidMessageSquareAdd } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { RxFileText } from "react-icons/rx";

import { FieldArray, Formik } from "formik";
import isEmpty from "lodash/isEmpty";

const SessionsStep = ({ onPrevStep, onNextStep, formData, setFormData }) => {
  const initialValues = useMemo(
    () => ({ sessions: formData.sessions || [] }),
    [formData]
  );

  const handleSubmit = (values) => {
    setFormData((prevState) => ({ ...prevState, ...values }));
    onNextStep();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={sessionsStepValidator}
      onSubmit={handleSubmit}
    >
      {({
        getFieldMeta,
        getFieldProps,
        setFieldValue,
        handleSubmit,
        values,
      }) => (
        <form onSubmit={handleSubmit}>
          <FieldArray name="sessions">
            {({ remove, push }) => (
              <div>
                <Button
                  variant="contained"
                  endIcon={<BiSolidMessageSquareAdd />}
                  onClick={() => push({})}
                >
                  جلسه جدید
                </Button>
                <When
                  truthy={!isEmpty(values.sessions)}
                  fallback={<EmptyState title="جلسه ای وجود ندارد" />}
                >
                  <div className="max-w-[500px] mx-auto mt-10 space-y-7">
                    {values.sessions.map((session, index) => (
                      <SessionItem
                        key={index}
                        index={index}
                        session={session}
                        getFieldMeta={getFieldMeta}
                        getFieldProps={getFieldProps}
                        onDeleteSession={() => remove(index)}
                        checkValue={values.sessions[index].isFree}
                        onDeleteFile={() =>
                          setFieldValue(`sessions.${index}.videoLink`, null)
                        }
                        onChangeFile={(file) =>
                          setFieldValue(`sessions.${index}.videoLink`, file)
                        }
                        onCheckChange={(e, value) =>
                          setFieldValue(`sessions.${index}.isFree`, value)
                        }
                      />
                    ))}
                  </div>
                </When>
              </div>
            )}
          </FieldArray>
          <div className="flex items-center justify-between mt-5">
            <Button variant="contained" type="submit">
              مرحله بعد
            </Button>
            <Button
              color="gray"
              variant="contained"
              type="button"
              onClick={onPrevStep}
            >
              مرحله قبل
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default SessionsStep;

const SessionItem = ({
  onDeleteSession,
  onDeleteFile,
  onChangeFile,
  session,
  index,
  getFieldMeta,
  getFieldProps,
  onCheckChange,
  checkValue,
}) => (
  <div>
    <div className="flex items-center justify-between">
      <span className="text-sm font-black text-typography md:text-[15px] lg:text-base">
        قسمت {toPersianNumber(index + 1)}
      </span>
      <IconButton color="error" onClick={onDeleteSession}>
        <BsTrash />
      </IconButton>
    </div>
    <div className="mt-2 space-y-2">
      <FormInput
        {...getFieldProps(`sessions.${index}.title`)}
        {...getFieldMeta(`sessions.${index}.title`)}
        label="عنوان"
        variant="outlined"
        placeholder="عنوان این قسمت را وارد کنید"
      />
      <FormTextArea
        variant="outlined"
        {...getFieldProps(`sessions.${index}.description`)}
        {...getFieldMeta(`sessions.${index}.description`)}
        label="توضیحات (اختیاری)"
        placeholder="توضیحات مربوط به این قسمت"
      />
      <ControlWrapper label="ویدیو">
        <When truthy={!session.videoLink}>
          <FileUploader
            value={session.videoLink}
            hasProgress={false}
            hasButton={false}
            onChange={onChangeFile}
            accept="video/*"
          />
        </When>
        <When truthy={!!session.videoLink}>
          <File
            fileName={
              session.videoLink?.name ||
              `ویدیو قسمت ${toPersianNumber(index + 1)}`
            }
            onDelete={onDeleteFile}
          />
        </When>
      </ControlWrapper>
      <FormControlLabel
        className="mr-0"
        label="آیا می خواهید این قسمت رایگان باشد؟"
        name={`sessions.${index}.isFree`}
        checked={checkValue}
        onChange={onCheckChange}
        control={<Checkbox />}
      />
    </div>
  </div>
);
