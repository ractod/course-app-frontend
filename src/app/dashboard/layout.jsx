import WithAuthorization from "@components/elements/WithAuthoriziation";
import DashboardLayout from "@components/layouts/DashboardLayout";

import { userDashboardLinks } from "@constants/dashbaordsLinks";

export const metadata = {
  icons: {
    icon: "/images/logo.png",
  },
  title: "آموزیلاین",
};

const Layout = ({ children }) => {
  return (
    <DashboardLayout dashboardLinks={userDashboardLinks}>
      {children}
    </DashboardLayout>
  );
};

export default WithAuthorization(Layout);
