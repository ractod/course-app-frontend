import { redirect } from "next/navigation";

import { getUser } from "@services/userServices";

const WithAuthorization = (WrappedComponent, role = null) => {
  const Authorization = async (props) => {
    const user = await getUser()
    if (!user) return redirect("/auth/signin");
    if (!!role && user?.role !== role) return redirect("/");
    
    return <WrappedComponent {...props} />
  };

  return Authorization;
};

export default WithAuthorization;
