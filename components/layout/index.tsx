import{ GetStaticProps } from 'next';
import Head from 'next/head'
import * as React from 'react';

import prisma from '../../lib/prisma';
import ResourceModal from '../modals/SuggestResourceModal';
import DashMobileNavbar from '../navbar/DashMobileNavbar';
import DashTopBar from '../navbar/DashTopBar';
import Sidebar from '../navbar/Sidebar';

function Layout({ children, pageTitle, description, previewImage, siteName }: any) {
  const [toggleNav, setToogleNavBar] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const toggleNavBar = () => {
    setToogleNavBar(!toggleNav);
  };

  return (
    <>
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
    </>
  );
}
export default Layout;
