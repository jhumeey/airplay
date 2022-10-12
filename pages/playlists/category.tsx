import type { NextPage } from "next";
import Layout from "../../components/layout";
import { GetStaticProps } from "next";
import { PlaylistProps } from "../../types/playlist";
import { getPlaylists } from "../../utils/airtable";
import PlaylistCover from "../public/images/cover-img.jpg";

const Home = ({ playlists }: PlaylistProps) => {
  let result = playlists.reduce(function (r, a) {
    r[a.fields.genre[0]] = r[a.fields.genre[0]] || [];
    r[a.fields.genre[0]].push(a);
    return r;
  }, Object.create(null));
  const keys = Object.keys(result);

  return (
    <>
      <main className="flex-1 relative z-0 focus:outline-none bg-black-play-05 overflow-y-scroll max-h-screen">
        {/* Start main area*/}
        <div className="py-6 px-4 sm:px-6 lg:px-12 overflow-y-scroll">
          <div className="py-8">
            <h3 className="text-white text-2xl font-bold py-4">Playlists</h3>
            {keys.map((key, index) => (
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-white text-2xl font-bold py-4">{key}</h3>
                  <a className="text-sm text-gray-play-04">SEE ALL</a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {result[key].slice(0, 5).map((playlist) => (
                    <div className="mb-6">
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
                          className="rounded-lg w-full h-[200px] object-cover mb-4"
                          alt="playlist-cover"
                        />
                        <div>
                          <h3 className="text-white text-base">
                            {playlist.fields.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps(ctx) {


}

export async function getStaticPaths() {
  const playlists = await getPlaylists();
  let result = playlists.reduce(function (r, a) {
    r[a.fields.genre[0]] = r[a.fields.genre[0]] || [];
    r[a.fields.genre[0]].push(a);
    return r;
  }, Object.create(null));
  const keys = Object.keys(result);

  const paths = keys.map((category) => ({
    params: { category: category },
  }));

  return { paths, fallback: false };
}
