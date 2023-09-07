import ControlWrapper from "./ControlWrapper";

import { useFormikContext } from "formik";

const variants = {
  outlined: "input-outlined",
  filled: "input-filled",
};

const FormTextArea = ({
  label,
  name,
  error,
  touched,
  startAdornment,
  endAdornment,
  classes = {},
  variant = "filled",
  onChange,
  onBlur,
  ...restProps
}) => {
  const formikContext = useFormikContext()

  return (
    <ControlWrapper
      label={label}
      name={name}
      error={error || formikContext.errors[name]}
      touched={touched || formikContext.touched[name]}
      startAdornment={startAdornment}
      endAdornment={endAdornment}
      classes={classes}
    >
      <textarea
        name={name}
        id={name}
        className={`input block min-h-[100px] outline-none py-5 resize-none 
        ${variants[variant]} ${classes.textarea}  ${touched && error && "error"}`}
        onChange={onChange || formikContext.handleChange}
        onBlur={onBlur || formikContext.handleBlur}
        {...restProps}
      />
    </ControlWrapper>
  );
};

export default FormTextArea;
