//  components
import MainLayout from "@components/layouts/MainLayout";

export const metadata = {
  icons: {
    icon: "/images/logo.png"
  },
  title: "آموزیلاین"
}

const layout = ({ children }) => {
  return (
    <MainLayout>
      {children}
    </MainLayout>
  )
};

export default layout;
