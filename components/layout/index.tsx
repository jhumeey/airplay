import * as React from "react";
import { GetStaticProps } from "next";
import prisma from "../../lib/prisma";
import DashMobileNavbar from "../navbar/DashMobileNavbar";
import Sidebar from "../navbar/Sidebar";
import DashTopBar from "../navbar/DashTopBar";
import ResourceModal from "../modals/SuggestResourceModal";

const Layout = ({ children }: any) => {
  const [toggleNav, setToogleNavBar] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const toggleNavBar = () => {
    setToogleNavBar(!toggleNav);
  };
  
  return (
    <main className="flex flex-col min-h-screen text-base subpixel-antialiased font-normal bg-black-brand-09 lg:flex-row">
      <DashMobileNavbar toggleNavBar={toggleNavBar} />
      <Sidebar toggleState={toggleNav} toggleNavBar={toggleNavBar} />
      <div className="flex flex-col flex-1 px-4 py-4 overflow-hidden lg:py-8 lg:px-6 xl:px-8">
        <DashTopBar setShowModal={setShowModal} />
        <ResourceModal showModal={showModal} setShowModal={setShowModal} />
        <div className="flex-1 py-4 lg:py-10">
          {children}
        </div>
      </div>
    </main>
  );
};
export default Layout;


