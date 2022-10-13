import Layout from "../../components/Layout";
import { GetStaticProps } from "next";
import { PlaylistProps, AirtableData } from "../../types/playlist";
import { getPlaylists, getSingleResource } from "../../utils/airtable";
import PlaylistCard from "../../components/PlaylistCard";

const CategoryPage = ({ playlists, genre }: PlaylistProps) => {
  return (
    <>
      <main className="flex-1 relative z-0 focus:outline-none bg-black-play-05 overflow-y-scroll max-h-screen">
        <div className="py-6 px-4 sm:px-6 lg:px-12 overflow-y-scroll">
          <div className="py-8">
            <h3 className="text-white text-2xl font-bold py-4 capitalize">{genre}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4">
              {playlists.map((playlist) => (

                <PlaylistCard playlist={playlist} />
                
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
  let result = playlists.reduce((r: any, a: AirtableData) => {
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
