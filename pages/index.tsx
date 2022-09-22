import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import { GetStaticProps } from "next";
import { PlaylistProps } from "../types/playlist";
import {
  getPlaylists,
  getFeaturedHero,
  getTrendingPlaylists,
} from "../utils/airtable";
import PlaylistCover from "../public/images/cover-img.jpg";

const Home = ({
  playlists,
  featuredPlaylist,
  trendingPlaylist,
}: PlaylistProps) => {
  return (
    <>
      <main className="flex-1 relative z-0 focus:outline-none bg-black-play-05 overflow-y-scroll max-h-screen">
        {/* Start main area*/}
        <div className="py-6 px-4 sm:px-6 lg:px-8 overflow-y-scroll">
          <div className="py-4">
            {/* <ul className="flex">
              <li className="text-gray-play-02 pr-4 hover:underline">
                <a href="/">Music</a>
              </li>
              <li className="text-gray-play-02 pr-4 hover:underline">
                <a href="/">Podcasts</a>
              </li>
            </ul> */}
          </div>
          {featuredPlaylist && (
            <div
              className=" featured-container rounded-md bg-no-repeat bg-cover opacity-75 hue-rotate-[15deg]"
              style={{
                backgroundImage: `url(${PlaylistCover.src})`,
                minHeight: "300px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                //filter: 'blur(8px)',
              }}
            >
              <div className="px-4 py-16 h-[200px]">
                <h1 className=" text-3xl lg:text-4xl text-white max-w-[500px]">
                 Discover Refreshing Music Playlist Anytime, Anywere.
                </h1>

                <div className="py-4">
                  <p className="text-white text-opacity-50"> Discover spotify playlist that suits your mood all day</p>
                </div>
              </div>
            </div>
          )}

          <div className="py-8">
            <h3 className="text-white text-2xl font-bold py-4">Playlists</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4 w-full">
              {playlists &&
                playlists.map((playlist) => (
                  <div
                    className="rounded-md px-4 py-4 bg-black-play-06 card"
                    key={playlist.id}
                  >
                    <div className="flex justify-between mb-7 items-center">
                      <div className="flex gap-3 wrap">
                        {playlist.fields.genre.map((genre) => (
                          <button className="bg-gray-play-03 py-3 px-4 rounded-md text-gray-play-07 text-sm">
                            {genre}
                          </button>
                        ))}
                      </div>
                      <div>
                        <a
                          className=" duration-200"
                          target="_blank"
                          href={playlist.fields.link}
                          rel="noopener noreferrer"
                        >
                          <svg
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="#ffffff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M17.25 15.25V6.75H8.75"
                            />
                            <path
                              stroke="#ffffff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M17 7L6.75 17.25"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <img
                      src={playlist.fields.image}
                      className="rounded-lg w-full h-[200px] object-cover mb-9"
                      alt="playlist-cover"
                    />
                    <div>
                      <h3 className="text-white text-base">
                        {playlist.fields.name}
                      </h3>
                      {/* <p className="text-gray-play-02">
                        {playlist.fields.description}
                      </p> */}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* End main area */}
      </main>
      <aside className="hidden relative xl:flex xl:flex-col flex-shrink-0 w-80 border-l border-gray-play-01 overflow-y-auto bg-black-play-01">
        {/* Start secondary column (hidden on smaller screens) */}
        <div className="py-6 px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-white text-lg py-4">Explore Playlists</h2>
            <div className="flex flex-col">
              {trendingPlaylist &&
                trendingPlaylist.map((trendingPlaylist) => (
                  <div className="grid grid-cols-2 gap-4 my-4">
                    <div>
                      <img
                        src={trendingPlaylist.fields.image}
                        alt="playlist-cover"
                        className="object-cover h-[70px] w-[170px]"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="text-white text-base truncate">{trendingPlaylist.fields.name}</h3>
                      <div className="">
                        {trendingPlaylist.fields.genre.map((genre) => (
                          <p className="text-gray-play-07 text-sm">{genre}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div>
            <h2 className="text-white text-lg py-4">Popular This Week </h2>
            <div className="flex flex-col">
              {trendingPlaylist &&
                trendingPlaylist.map((trendingPlaylist) => (
                  <div className="grid grid-cols-2 gap-4 my-4">
                    <div>
                      <img
                        src={trendingPlaylist.fields.image}
                        alt="playlist-cover"
                        className="object-cover h-[70px] w-[170px]"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="text-white text-lg truncate">{trendingPlaylist.fields.name}</h3>
                      <div className="">
                        {trendingPlaylist.fields.genre.map((genre) => (
                          <p className="text-gray-play-04">{genre}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
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
  const trendingPlaylist = await getTrendingPlaylists();

  return {
    props: {
      playlists: playlists,
      featuredPlaylist: featuredPlaylist,
      trendingPlaylist: trendingPlaylist,
    },
  };
};
