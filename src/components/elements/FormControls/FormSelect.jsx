import { Checkbox, Chip, MenuItem, Select } from "@mui/material";
import ControlWrapper from "./ControlWrapper";

import { useFormikContext } from "formik";

const variants = {
  outlined: "input-outlined",
  filled: "input-filled",
};

const FormSelect = ({
  label,
  name,
  error,
  touched,
  startAdornment,
  endAdornment,
  classes = {},
  variant = "filled",
  options,
  multiple = false,
  value, // array of { label: "", value: "" }
  onChange,
  onBlur,
  ...restProps
}) => {
  const formikContext = useFormikContext()

  const renderMultipleValue = (values) => {
    return values.map((value) => {
      return (
        <Chip
          key={value}
          className="rounded-xl mr-2 first:mr-0 bg-primary-300 text-typography"
          label={options.find(option => option.value === value)?.label}
        />
      );
    });
  };

  const renderSingleValue = (value) => options.find(option => option.value === value)?.label

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
      <Select
        renderValue={multiple ? renderMultipleValue : renderSingleValue}
        className={`input ${variants[variant]} ${classes.select} ${touched && error && "error"}`}
        multiple={multiple}
        value={value}
        name={name}
        onChange={onChange || formikContext.handleChange}
        onBlur={onBlur || formikContext.handleBlur}
        {...restProps}
      >
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            <Checkbox checked={multiple ? value.includes(option.value) : value === option.value } />
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </ControlWrapper>
  );
};

export default FormSelect;
