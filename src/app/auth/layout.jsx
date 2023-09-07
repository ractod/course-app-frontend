import AuthLayout from "@components/layouts/AuthLayout";

export const metadata = {
  icons: {
    icon: "/images/logo.png"
  },
  title: "آموزیلاین"
}

const layout = ({ children }) => {
  return (
    <AuthLayout>
      {children}
    </AuthLayout>
  )
};

export default layout;
