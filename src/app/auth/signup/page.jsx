import { redirect } from "next/navigation";

import SignupPage from "@components/views/auth/signup-page";

import { getUser } from "@services/userServices";

export const metadata = {
  title: "آموزیلاین | ثبت نام",
};

const page = async () => {
  const user = await getUser()
  if(user) return redirect("/dashboard")


  return <SignupPage />;
};

export default page;
