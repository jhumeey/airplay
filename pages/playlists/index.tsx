import { GetStaticProps } from "next";
import Link from "next/link";
import * as React from "react";

import PlaylistCard from "../../components/cards/ResourceCard";
import FilterBox from "../../components/filter/FilterBox";
import Layout from "../../components/layout";
import prisma from "../../lib/prisma";
import appScreenshot from "../../public/images/app-screenshot.png"
import { PlaylistProps } from "../../types/playlist";
export default function Dashboard({ playlists }: PlaylistProps) {
  return (
    <div>
      {playlists.length < 1 ? (
        <div className="mx-auto w-60 h-60">
          <h2>There is no data for this category. </h2>
          <p>
            Please, check the all respirces page.{" "}
            <Link href="/resources">
              <a>Home</a>
            </Link>
          </p>
        </div>
      ) : (
        <div className="flex flex-col">
          {/* <FilterBox /> */}
          <ul
            role="list"
            className={
              "grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 overflow-y-auto py-4"
            }
          >
            {playlists.map((playlist) => (
              <PlaylistCard key={playlist.id} playlist={playlist} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

Dashboard.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout pageTitle="web development resources" description="A collection of over 500 web development resources" siteName="web scout" previewImage={appScreenshot}>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const playlists = await prisma.playlist.findMany({
    select: {
      id: true,
      name: true,
      isPublic: true,
      imageLink: true,
      createdAt: false,
      updatedAt: false,
      playlistId: true,
      genre: true,
    },
  });
  return {
    props: {
      playlists: playlists,
    },
  };
};

