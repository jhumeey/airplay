import * as React from "react";
import Layout from "../../components/layout";
import Image from "next/image";
import prisma from "../../lib/prisma";
import ResourceCard from "../../components/cards/ResourceCard";
import { ResourcesProps } from "../../types/fetchData";
import Loader from "../../public/images/three-dot-loader.svg";
import { GetStaticProps } from "next";

export default function Dashboard({ resources }: ResourcesProps) {
  return (
    <div>
      {!resources ? (
        <div className="text-center py-14">
          <Image src={Loader} />
        </div>
      ) : (
        <ul
          role="list"
          className={
            "grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 overflow-y-auto py-4"
          }
        >
          {resources.map((item) => (
            <ResourceCard key={item.name} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
}

Dashboard.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps =   async ()  => {
  const resources = await prisma.resources.findMany({
    select: {
      id: true,
      name: true,
      link: true,
      tag: true,
      imageUrl: true,
      description: true,
    },
  });
  return {
    props: {
      resources: resources,
    },
  };
}
