import Airtable from "airtable";

const airtableApiKey = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY;
const airtableId = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID;

const base = new Airtable({
  apiKey: airtableApiKey,
}).base(airtableId);

const getMinifiedRecords = (records) => {
  return records.map((record) => minifyRecord(record));
};

// gets the data we want and puts it into variables
const minifyRecord = (record) => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

const resourceTable = base("playlists");

export async function getPlaylists() {
  try {
    const records = await resourceTable
      .select({ filterByFormula: "NOT({status} = 'Unpublished')" })
      .all();
    const minifiedRecords = await getMinifiedRecords(records);
    return minifiedRecords;
  } catch {
    console.error("we didnt see any data");
  }
}

export async function getTrendingPlaylists() {
  try {
    const records = await resourceTable
      .select({ filterByFormula: "IF({featured}, TRUE() )" })
      .all();
    const minifiedRecords = await getMinifiedRecords(records);
    return minifiedRecords;
  } catch {
    console.error("No data retrieved");
  }
}

export async function getFeaturedHero() {
  try {
    const records = await resourceTable
      .select({ filterByFormula: "IF({featuredHero}, TRUE() )" })
      .all();
    const minifiedRecords = await getMinifiedRecords(records);
    return minifiedRecords;
  } catch {
    console.error("No data retrieved");
  }
}

export async function getSingleResource(key) {
  try {
    const records = await resourceTable
      .select({ filterByFormula: `NOT({genre} != "${key}" )` })
      .all();
    const minifiedRecords = await getMinifiedRecords(records);
    return minifiedRecords;
  } catch {
    console.error("No data retrieved");
  }
}

export async function submitResources(values) {
  await resourceTable.create(
    {
      name: values.name,
      description: null,
      link: values.link,
      tag: values.tag,
      createdAt: new Date(),
      Status: "Unpublished",
    },
    { typecast: true }
  );
}
