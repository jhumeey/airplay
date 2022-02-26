import Airtable from "airtable";

const airtableURL = process.env.NEXT_PUBLIC_AIRBASE_URL;
const airtableApiKey = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY;
const airtableId = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID;


const base = new Airtable({
  apiKey: airtableApiKey
}).base(airtableId);



const getMinifiedRecords = records => {
  return records.map(record => minifyRecord(record));
};

// gets the data we want and puts it into variables
const minifyRecord = record => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

const resourceTable = base('Resources');

export  async function getResources() {
  try {
    const records = await resourceTable.select({filterByFormula: "NOT({Status} = 'Unpublished')"}).all();
  const minifiedRecords = await getMinifiedRecords(records);
  return minifiedRecords;
  } catch {
    console.log("we didnt see any data")
  }
}

export  async function getSingleResource(key) {
  try {
    console.log(key)
    const records = await resourceTable.select({filterByFormula: `NOT({tag} != "${key}" )`}).all();
    const minifiedRecords = await getMinifiedRecords(records);
    return minifiedRecords;
  } catch {
    console.log("we didnt see any data")
  }
}

export  async function submitResources (values) {
  await resourceTable.create({
    "name": values.name,
    "description": null,
    "link": values.link,
    "tag": values.tag,
    "createdAt": new Date(),
    "Status": "Unpublished"
  },  {typecast: true});
  
}
