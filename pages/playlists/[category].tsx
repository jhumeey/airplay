import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import ResourceCard from "../../components/cards/ResourceCard";
import Layout from "../../components/layout";
import prisma from "../../lib/prisma";
import appScreenshot from "../../public/images/app-screenshot.png"
import Loader from "../../public/images/three-dot-loader.svg";
import { ResourcesProps } from "../../types/playlist";
import { getSingleResource } from "../../utils/airtable";
import { sidebarLinks } from "../../utils/nav-menu";

export default function DashboardWithFilter({ resources }: ResourcesProps) {
  const [isLoading, setIsloading] = React.useState(false);

  return (
    <div>
      <div>
        {isLoading || resources.length < 1 ? (
          <div className="mx-auto w-[100%] h-[100%] text-white py-5">
          <h2 className=" text-4xl md:text-6xl font-medium">There is no data for this category. </h2>
          <p className="text--3xl md:text-4xl py-4">
            Please, check the all resources page.{" "}
            <Link href="/resources">
              <a className="underline text-green-400">Home</a>
            </Link>
          </p>
        </div>
        ) : (
          <ul
            role="list"
            className={
              "grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 overflow-y-auto py-4"
            }
          >
            {resources &&
              resources.map((item) => (
                <ResourceCard key={item.id} item={item.fields} />
              ))}
          </ul>
        )}
      </div>
    </div>
  );
}

DashboardWithFilter.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout pageTitle="web development resources" description="A collection of over 500 web development resources" siteName="web scout" previewImage={appScreenshot}>{page}</Layout>;
};

// This function gets called at build time.
export async function getStaticPaths() {
  const paths = sidebarLinks.map((link) => ({
    params: { category: link.name },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}

// This function gets called at build time


export const getStaticProps: GetStaticProps =   async (context)  => {
  const filter = context?.params?.category;

  const resources = await getSingleResource(filter?.toString());
  
  return {
    props: {
      resources: resources,
    },
  };
}
