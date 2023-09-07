import { useEffect, useState } from "react";

import isEmpty from "lodash/isEmpty";
import isEqual from "lodash/isEqual";
import { toast } from "react-toastify";

const useFormData = ({initialValues, validator = () => ({})}) => {
  const [formData, setFormData] = useState(initialValues || {});
  const [errors, setErrors] = useState({});
  const [touches, setTouches] = useState([]);

  const hasFormDataChanged = () => !isEqual(formData, initialValues)

  const resetForm = () => {
    setFormData(initialValues)
    setErrors({})
    setTouches([])
  }

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const blurHandler = (event) => {
    const { name } = event.target;
    setTouches((prevState) => ([ ...prevState, [name] ]));
  };

  const submitForm = (submitHandler) => () => {
    event.preventDefault();
    if (!isEmpty(errors)) {
      setTouches(Object.entries(initialValues).map(([key]) => key))
      toast.error("لطفا فرم را با دقت پر کنید");
    } else {
      submitHandler(formData, setFormData);
    }
  };

  // input props depending on name
  const getInputProps = (name) => ({
    name: name,
    value: formData[name],
    onChange: changeHandler,
    onBlur: blurHandler,
  });

  const getWrapperProps = (name) => ({
    showError: !!errors[name] && !!touches.includes(name),
    error: errors[name],
    name
  })

  useEffect(() => {
    setErrors(validator(formData));
  }, [formData, touches]);

  useEffect(() => {
    setFormData(initialValues)
  }, [initialValues])

  return {
    getInputProps,
    submitForm,
    formData,
    resetForm,
    hasFormDataChanged,
    getWrapperProps,
    setFormData,
    errors,
    setTouches
  };
};

export default useFormData;
