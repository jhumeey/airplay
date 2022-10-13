import type { NextPage } from "next";
import Layout from "../../components/layout";
import { GetStaticProps } from "next";
import { PlaylistProps, AirtableData } from "../../types/playlist";
import { getPlaylists, getSingleResource } from "../../utils/airtable";

const CategoryPage = ({ playlists, genre }: PlaylistProps) => {
  return (
    <>
      <main className="flex-1 relative z-0 focus:outline-none bg-black-play-05 overflow-y-scroll max-h-screen">
        {/* Start main area*/}
        <div className="py-6 px-4 sm:px-6 lg:px-12 overflow-y-scroll">
          <div className="py-8">
            <h3 className="text-white text-2xl font-bold py-4">{genre}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {playlists.map((playlist) => (
                <div className="mb-6">
                  <div
                    className="rounded-md px-4 py-4 bg-black-play-06 card"
                    key={playlist.id}
                  >
                    <div className="flex justify-between mb-7 items-center">
                      <div className="flex gap-3 wrap">
                        <button className="bg-gray-play-03 py-3 px-4 rounded-md text-gray-play-07 text-sm">
                          {playlist.fields.genre}
                        </button>
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
        </div>
      </main>
    </>
  );
};

export default CategoryPage;

CategoryPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const filter = context?.params?.category;

  const playlists = await getSingleResource(filter?.toString());
  return {
    props: {
      playlists: playlists,
      genre: filter,
    },
  };
};

export async function getStaticPaths() {
  const playlists = await getPlaylists();
  console.log(playlists, "playlists");
  let result = playlists.reduce( (r: any, a: AirtableData) => {
    r[a.fields.genre] = r[a.fields.genre] || [];
    r[a.fields.genre].push(a);
    return r;
  }, Object.create(null));
  const keys = Object.keys(result);

  const paths = keys.map((category) => ({
    params: { category: category },
  }));

  return { paths, fallback: false };
}
