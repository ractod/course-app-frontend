"use client";


import Link from "next/link";

import FormInput from "@components/elements/FormControls/FormInput";
import { IconButton } from "@mui/material";

import useMutation from "@hooks/useMutation";
import useToggle from "@hooks/useToggle";

import { signupValidator } from "@utils/validators";

import { signup } from "@services/authServices";

import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineUser,
} from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { TfiLock } from "react-icons/tfi";

import { LoadingButton } from "@mui/lab";
import { Formik } from "formik";
import { toast } from "react-toastify";

const initialValues = {
  fullname: "",
  email: "",
  password: "",
};

const SignupPageTemplate = () => {
  const [isPassVisible, togglePassVisibility] = useToggle(false);

  const [mutateSignup, loading] = useMutation(signup, {
    onSuccess: (data) => {
      toast.success(data);
      window.location.pathname = "/dashboard";
    },
  });

  const handleSubmit = (formData) => mutateSignup(formData);

  return (
    <Formik
      validationSchema={signupValidator}
      onSubmit={handleSubmit}
      initialValues={initialValues}
    >
      {({ values, handleSubmit }) => (
        <form
          onSubmit={handleSubmit}
          className="w-full sm:w-[310px] md:w-[370px] flex flex-col gap-y-4"
        >
          <FormInput
            name="fullname"
            label="نام و نام خانوادگی"
            value={values.fullname}
            startAdornment={<AiOutlineUser />}
            placeholder="نام و نام خانوادگی خود را وارد کنید"
            classes={{ startAdornment: "right-[27px]", input: "pr-[50px]" }}
          />

          <FormInput
            name="email"
            label="ایمیل"
            type="email"
            value={values.email}
            startAdornment={<HiOutlineMail />}
            placeholder="ایمیل خود را وارد کنید"
            classes={{ startAdornment: "right-[27px]", input: "pr-[50px]" }}
          />

          <FormInput
            name="password"
            label="رمز عبور"
            value={values.password}
            startAdornment={<TfiLock />}
            type={isPassVisible ? "text" : "password"}
            classes={{ startAdornment: "right-[27px]", input: "pr-[50px]" }}
            endAdornment={
              <IconButton onClick={togglePassVisibility} size="small">
                {isPassVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </IconButton>
            }
          />

          <LoadingButton
            type="submit"
            loading={loading}
            variant="contained"
            className="w-full mt-[25px] py-[10px]"
          >
            ثبت نام
          </LoadingButton>

          <p className="mt-[25px] font-medium text-center text-typography">
            حساب کاربری دارید؟{" "}
            <Link href="/auth/signin" className="text-primary-500">
              ورود
            </Link>
          </p>
        </form>
      )}
    </Formik>
  );
};

export default SignupPageTemplate;
