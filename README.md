# Airply Web Application

Live App 👉 https://airplayy.vercel.app


## Prerequisites

You will need [Node.js](https://nodejs.org) version 12.0 or greater installed on your system.

## Setup

Get the code by either cloning this repository using git

```
git clone https://github.com/giselle2323/airplay.git
```

... or [downloading source code](https://github.com/giselle2323/airplay/archive/refs/heads/main.zip) code as a zip archive.

Once downloaded, open the terminal in the project directory, and install dependencies with:

```
npm install
```

If you're running your own  project with the playlist dataset sample on Airtable, go to `.env` and change the following lines:

```
  NEXT_PUBLIC_AIRTABLE_API_KEY='YOUR VALUE'
  NEXT_PUBLIC_AIRTABLE_BASE_ID='YOUR VALUE'
```

You can locate these details by going to your account settings on Airtable.
 Note the airtable must follow the following table format:

 ```
    status
    image
    name
    link
    followers
    genre

 ```
 You can check the types folder to understand more on what data is needed.

Then start the example app with:

```
npm run dev
```

The app should now be up and running at http://localhost:3000 🚀

## Deploy your own

Deploy it to the cloud with Vercel([Documentation](https://nextjs.org/docs/deployment)).


