import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Icon from "./components/Icon";

const Layout = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
      <Header />
      <Icon/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
