import { redirect } from "next/navigation";

import SigninPage from "@components/views/auth/signin-page";

import { getUser } from "@services/userServices";

export const metadata = {
  title: "آموزیلاین | ورود",
};

const page = async () => {
  const user = await getUser()
  if(user) return redirect("/dashboard")

  return <SigninPage />;
};

export default page;
