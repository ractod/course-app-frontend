"use client";

import Link from "next/link";

import FormInput from "@components/elements/FormControls/FormInput";
import { IconButton } from "@mui/material";

import useMutation from "@hooks/useMutation";
import useToggle from "@hooks/useToggle";

import { signinValidator } from "@utils/validators";

import { signin } from "@services/authServices";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { TfiLock } from "react-icons/tfi";

import { LoadingButton } from "@mui/lab";
import axios from "axios";
import { Formik } from "formik";
// toast
import { toast } from "react-toastify";

const SigninPageTemplate = () => {
  const [isPassVisible, togglePassVisibility] = useToggle(false);

  const [mutateSignin, loading] = useMutation(signin, {
    onSuccess: (data) => {
      toast.success(data.message);
      // window.location.pathname = "/dashboard";
    },
  });

  const handleSubmit = (formData) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}p/user/auth/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(formData),
    })
  }

  return (
    <Formik
      validationSchema={signinValidator}
      onSubmit={handleSubmit}
      initialValues={{ email: "", password: "" }}
    >
      {({ values, handleSubmit }) => (
        <form
          onSubmit={handleSubmit}
          className="w-full sm:w-[310px] md:w-[370px] flex flex-col gap-y-4"
        >
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
            placeholder="رمز عبور خود را وارد کنید"
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
            ورود
          </LoadingButton>

          <p className="mt-[25px] font-medium text-center text-typography">
            حساب کاربری ندارید؟{" "}
            <Link href="/auth/signup" className="text-primary-500">
              ثبت نام
            </Link>
          </p>
        </form>
      )}
    </Formik>
  );
};

export default SigninPageTemplate;
