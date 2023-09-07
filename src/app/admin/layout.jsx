import WithAuthorization from "@components/elements/WithAuthoriziation";
import DashboardLayout from "@components/layouts/DashboardLayout";

import { adminDashboardLinks } from "@constants/dashbaordsLinks";

export const metadata = {
  icons: {
    icon: "/images/logo.png",
  },
  title: "آموزیلاین",
};

const Layout = ({ children }) => {
  return (
    <DashboardLayout dashboardLinks={adminDashboardLinks}>
      {children}
    </DashboardLayout>
  );
};

export default WithAuthorization(Layout, "admin");
