"use client";
// global styles

import Providers from "./Providers";

import "@styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "plyr-react/plyr.css"
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const RootLayout = ({ children }) => {
  return (
    <html dir="rtl" lang="fa">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
