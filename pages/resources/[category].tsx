import * as React from "react";
import { GetStaticProps } from "next";
import Image from "next/image";
import Loader from "../../public/images/three-dot-loader.svg"
import Layout from "../../components/layout";
import { ResourcesProps } from "../../types/fetchData";
import { sidebarLinks } from "../../utils/nav-menu";
import ResourceCard from "../../components/cards/ResourceCard";
import prisma from "../../lib/prisma";



export default function DashboardWithFilter({ resources }: ResourcesProps) {
const [isLoading, setIsloading] = React.useState(false);
  
  return (
    <div>
        <div>
      {
        isLoading || !resources ?
        <div className="text-center py-14">
          <Image src={Loader} />
        </div>
         : <ul
         role="list"
         className={
           "grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 overflow-y-auto py-4"
         }
       >
         {resources && resources.map(item => (
           <ResourceCard key={item.name} item={item} />
         ))}
       </ul>
      }
    </div>
    </div>
  );
}

DashboardWithFilter.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
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
export const getStaticProps: GetStaticProps = async (context) => {
  const resources = await prisma.resources.findMany({
    where: {
      tag: context.params && context.params.category,
    }
  })
  return {
    props: {
      /* I used the method below here because NextJS cannot serialize the date type from prisma, 
      there was an option was to use superjson which handles it underhood once you add to .bablerc config but because I'm using NextJS 12 which uses 
      SWC complier, any custom .babelrc file disables the use of SWC complier automatically. 
      I cant afford for the app to be slower, so I chose the solution below.
      */
      resources: JSON.parse(JSON.stringify(resources)),
    },
  };
};




