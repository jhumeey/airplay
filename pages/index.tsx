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
import PlaylistCover from "../public/images/playlist-cover.jpg";

const Home = ({
  playlists,
  featuredPlaylist,
  trendingPlaylist,
}: PlaylistProps) => {
  return (
    <>
      <main className="flex-1 relative z-0 focus:outline-none bg-black-play-01 overflow-y-scroll max-h-screen">
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
              className=" featured-container rounded-md bg-no-repeat bg-cover opacity-75"
              style={{
                backgroundImage: `url(${PlaylistCover.src})`,
                minHeight: "300px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                //filter: 'blur(8px)',
              }}
            >
              <div className="px-4 py-20">
                <div className="flex gap-3">
                  {featuredPlaylist[0].fields.genre.map((genre) => (
                    <button className="py-3 px-8 rounded-md bg-gray-play-03 text-gray-play-04">
                      {genre}
                    </button>
                  ))}
                </div>
                <h1 className="text-4xl text-white py-4">
                  {featuredPlaylist[0].fields.name}
                </h1>

                <div className="my-8">
                  <a
                    className="bg-[#E91E63] p-4 text-white rounded-md"
                    href={featuredPlaylist[0].fields.link}
                  >
                    Check Playlist
                  </a>
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
                    className="rounded-md px-4 py-4 bg-black-play-04 border-2 border-gray-play-05"
                    key={playlist.id}
                  >
                    <div className="flex justify-between mb-7 items-center">
                      <div className="flex gap-3 wrap">
                        {playlist.fields.genre.map((genre) => (
                          <button className="bg-gray-play-03 py-3 px-4 rounded-md text-gray-play-04">
                            {genre}
                          </button>
                        ))}
                      </div>
                      <div>
                        <a
                          className="hover:text-green-500 transform hover:-translate-y-1 transition-all duration-200"
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
                      <h3 className="text-white text-lg">
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
            <h2 className="text-white text-lg py-4">Trending Playlists</h2>
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

  console.log(playlists)

  return {
    props: {
      playlists: playlists,
      featuredPlaylist: featuredPlaylist,
      trendingPlaylist: trendingPlaylist,
    },
  };
};
