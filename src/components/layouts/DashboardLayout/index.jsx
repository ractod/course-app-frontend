import Header from "./Header";
import Sidebar from "./Sidebar";

// * this component is used in user, mentor, admin dashboard
const DashboardLayout = ({ children, dashboardLinks }) => {

  return (
    <div className=" xl:flex">
      <Header dashboardLinks={dashboardLinks}/>
      <Sidebar dashboardLinks={dashboardLinks}/>
      {children}
    </div>
  );
};

export default DashboardLayout;
