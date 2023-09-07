import { redirect } from "next/navigation";

import UpgradePage from "@components/views/auth/upgrade-page";

import { getUser } from "@services/userServices";

export const metadata = {
  title: "آموزیلاین | ارتقا به مدرس",
};

const page = async () => {
  const user = await getUser()
  if(!user) return redirect("/auth/signin")
  if(user?.role === "mentor") return redirect("/mentor")

  return <UpgradePage />;
};

export default page;
