import type { NextPage } from "next";
import Layout from "../components/Layout"
import { GetStaticProps } from "next";
import { PlaylistProps, Play } from "../types/playlist";
import {
  getPlaylists,
  getFeaturedHero,
  getTrendingPlaylists,
} from "../utils/airtable";
import PlaylistCover from "../public/images/cover-img.jpg";
import PlaylistCard from "../components/PlaylistCard";

const Home = ({
  playlists,
  featuredPlaylist
}: PlaylistProps) => {
  let result = playlists.reduce(function (r, a) {
    r[a.fields.genre] = r[a.fields.genre] || [];
    r[a.fields.genre].push(a);
    return r;
  }, Object.create(null));
  const keys = Object.keys(result);

  return (
    <>
      <main className="flex-1 relative z-0 focus:outline-none bg-black-play-05 overflow-y-scroll max-h-screen">
        {/* Start main area*/}
        <div className="py-6 px-4 sm:px-6 lg:px-12 overflow-y-scroll">
          {featuredPlaylist && (
            <div
              className=" featured-container rounded-md bg-no-repeat bg-cover opacity-75 "
              style={{
                backgroundImage: `url(${PlaylistCover.src})`,
                minHeight: "350px",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                //filter: 'blur(8px)',
              }}
            >
              <div className="px-4 py-16 h-[200px]">
                <h1 className=" text-3xl lg:text-5xl text-white max-w-[600px]">
                  Discover Refreshing Playlists Anytime, Anywhere.
                </h1>

                <div className="py-4">
                  <p className="text-white text-lg text-opacity-50">
                    {" "}
                    Discover spotify playlists that suits your mood all day.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="py-8">
            {keys.map((key, index) => (
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-white text-2xl font-bold py-4 capitalize">{key}</h3>
                  <a
                    href={`/playlists/${key}`}
                    className="text-sm text-gray-play-04 hover:underline font-medium"
                  >
                    SEE ALL
                  </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4">
                  {result[key].slice(0, 5).map((playlist: Play) => (
                    <PlaylistCard playlist={playlist} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* End main area */}
      </main>
      {/* <aside className="hidden relative xl:flex xl:flex-col flex-shrink-0 w-80 border-l border-gray-play-01 overflow-y-auto bg-black-play-01"> */}
      {/* Start secondary column (hidden on smaller screens) */}
      {/* <div className="py-6 px-4 sm:px-6 lg:px-8">
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
      </aside> */}
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
