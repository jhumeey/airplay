import { GetStaticProps } from "next";
import Head from "next/head";
import * as React from "react";
import Image from "next/image";

import prisma from "../../lib/prisma";
import ResourceModal from "../modals/SuggestResourceModal";
import DashMobileNavbar from "../navbar/DashMobileNavbar";
import DashTopBar from "../navbar/DashTopBar";
import Sidebar from "../navbar/Sidebar";
import logo from "../../public/images/airplay.svg";

function Layout({
  children,
  pageTitle,
  description,
  previewImage,
  siteName,
}: any) {
  const [toggleNav, setToogleNavBar] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const toggleNavBar = () => {
    setToogleNavBar(!toggleNav);
  };

  return (
    <div className="a-p-container">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta property="og:image" content={previewImage} key="ogimage" />
        <meta property="og:site_name" content={siteName} key="ogsitename" />
        <title>{pageTitle}</title>
      </Head>

      <main className="flex flex-col min-h-screen text-base subpixel-antialiased font-normal">
        <div className="bg-transparent">
          <header className="py-4 md:py-6">
            <div className="container px-4 mx-auto sm:px-6 lg:px-8">
              <div className="flex items-center justify-between">
                <div className="flex-shrink-0">
                  <a
                    href="#"
                    title=""
                    className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    <Image src={logo} width="100" />
                  </a>
                </div>

                <div className="flex lg:hidden">
                  <button type="button" className="text-white">
                    <svg
                      className="w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </button>
                </div>

                <div className="hidden lg:flex lg:ml-10 xl:ml-16 lg:items-center lg:justify-center lg:space-x-8 xl:space-x-16">
                  <a
                    href="#"
                    title=""
                    className="text-base font-medium text-white transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    {" "}
                    Solutions{" "}
                  </a>

                  <a
                    href="#"
                    title=""
                    className="text-base font-medium text-white transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    {" "}
                    Industries{" "}
                  </a>

                  <a
                    href="#"
                    title=""
                    className="text-base font-medium text-white transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    {" "}
                    Fees{" "}
                  </a>

                  <a
                    href="#"
                    title=""
                    className="text-base font-medium text-white transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    {" "}
                    About Rareblocks{" "}
                  </a>
                </div>

                <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-8 xl:space-x-10">
                  <DashTopBar setShowModal={setShowModal} />
                </div>
              </div>
            </div>
          </header>

          <section className="pt-12  lg:pt-8">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-start lg:grid-cols-2 gap-y-12 lg:gap-x-16">
                <div className="pt-8">
                  <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold leading-tight text-white sm:text-5xl sm:leading-tight lg:leading-tight">
                      The Best Landing Page Design Inspiration, Templates and
                      More.
                    </h1>
                    <p className="mt-2 text-lg text-white sm:mt-8 font-inter">
                      Looking for landing page inspiration? We've got you
                      covered. Landingfolio features the best landing page
                      designs, templates, component and more on the web. Get
                      inspired by real landing page examples curated by us to
                      ensure the highest quality.
                    </p>
                  </div>
                  <button className="bg-green-400 p-4 my-4 text-white rounded-sm">
                    {" "}
                    Explore Playlists{" "}
                  </button>
                </div>

                <div>
                  <img
                    className="w-full"
                    src="https://d33wubrfki0l68.cloudfront.net/d6f1462500f7670e0db6b76b35054a081679a5a0/0ce15/images/hero/5.1/illustration.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <DashMobileNavbar toggleNavBar={toggleNavBar} />
        <div className="flex flex-col flex-1 px-4 py-4 overflow-hidden lg:py-8 lg:px-6 xl:px-8">
          <ResourceModal showModal={showModal} setShowModal={setShowModal} />
          <div className="flex-1 py-4 lg:py-10">{children}</div>
        </div>
      </main>
    </div>
  );
}
export default Layout;
