import * as React from "react";
import DashMobileNavbar from "../navbar/DashMobileNavbar";
import Sidebar from "../navbar/Sidebar";
import Image from "next/image";
import TopBar from "../navbar/Topbar";
import DashTopBar from "../navbar/DashTopBar";
import codeIcon from "../../public/images/code-icon.png";
const Layout = ({ children }: any) => {
  const [toggleNav, setToogleNavBar] = React.useState(false);

  const toggleNavBar = () => {
    console.log("gui")
    setToogleNavBar(!toggleNav);
  };
  return (
    <main className="flex flex-col min-h-screen text-base subpixel-antialiased font-normal dark:bg-black-brand-01 bg-white lg:flex-row">
      <DashMobileNavbar toggleNavBar={toggleNavBar}/>
      <Sidebar toggleState={toggleNav} />
      <div className="flex flex-col flex-1 px-4 py-4 overflow-hidden lg:py-8 lg:px-6 xl:px-8">
        <DashTopBar/>
        <div className="border border-black-brand-05 h-60 rounded flex flex-col items-center justify-center my-4 relative">
          <div className="absolute w-10 h-10 top-15 right-5 animate-bounce">
            <Image src={codeIcon} alt="floating-icons" />
          </div>
          <h1 className="font-bold text-5xl text-white">
            Web Resources in <span className="text-green-brand-01">One</span>{" "}
            Place.
          </h1>
        </div>
        <div className="flex-1 py-4 lg:py-10">{children}</div>
      </div>
    </main>
  );
};
export default Layout;
