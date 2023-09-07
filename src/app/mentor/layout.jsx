import WithAuthorization from "@components/elements/WithAuthoriziation";
import DashboardLayout from "@components/layouts/DashboardLayout";

import { mentorDashboardLinks } from "@constants/dashbaordsLinks";

export const metadata = {
  icons: {
    icon: "/images/logo.png",
  },
  title: "آموزیلاین",
};

const Layout = ({ children }) => {
  return (
    <DashboardLayout dashboardLinks={mentorDashboardLinks}>
      {children}
    </DashboardLayout>
  );
};

export default WithAuthorization(Layout, "mentor");
