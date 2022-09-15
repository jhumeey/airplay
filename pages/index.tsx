import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import { MenuIcon } from "@heroicons/react/outline";
import { Fragment, useState } from "react";
import { GetStaticProps } from "next";
import { PlaylistProps } from "../types/playlist";
import { getPlaylists, getFeaturedHero } from "../utils/airtable";

const Home = ({ playlists, featuredPlaylist }: PlaylistProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  console.log(featuredPlaylist);
  return (
    <>
      <main className="flex-1 relative z-0 focus:outline-none bg-black-play-01 overflow-y-scroll max-h-screen">
        {/* Start main area*/}
        <div className="py-6 px-4 sm:px-6 lg:px-8 overflow-y-scroll">
          <div className="py-4">
            <ul className="flex">
              <li className="text-gray-play-02 pr-4">Spotify</li>
              <li className="text-gray-play-02 pr-4">Apple Music</li>
              <li className="text-gray-play-02 pr-4">Others</li>
            </ul>
          </div>
          {featuredPlaylist && (
            <div
              className=" featured-container rounded-md opacity-40 bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${featuredPlaylist[0].fields.image})`,
                minHeight: " 400px",
              }}
            ></div>
          )}

          <div className="py-8">
            <h3 className="text-gray-play-02 text-xl font-bold py-4">
              Playlists
            </h3>
            <div className="flex flex-wrap gap-3  w-full">
              {playlists &&
                playlists.map((playlist) => (
                  <div
                    className="rounded-md bg-gray-800 p-4 w-[250px]"
                    key={playlist.id}
                  >
                    <img
                      src={playlist.fields.image}
                      className="rounded-md w-full h-[200px] object-cover"
                      alt="playlsit-cover"
                    />
                    <div>
                      <h3 className="text-white">{playlist.fields.name}</h3>
                      <p className="text-gray-play-02">
                        {playlist.fields.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* End main area */}
      </main>
      <aside className="hidden relative xl:flex xl:flex-col flex-shrink-0 w-60 border-l border-gray-play-01 overflow-y-auto bg-black-play-01">
        {/* Start secondary column (hidden on smaller screens) */}
        <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
          side area
        </div>
        {/* End secondary column */}
      </aside>
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const playlists = await getPlaylists();
  const featuredPlaylist = await getFeaturedHero();

  return {
    props: {
      playlists: playlists,
      featuredPlaylist: featuredPlaylist,
    },
  };
};
