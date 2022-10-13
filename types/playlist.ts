export type Playlist = {
  json: {
    id: string;
    fields: Play[];
  };
};

export interface PlaylistProps {
  playlists: Play[];
  featuredPlaylist: Play[];
  trendingPlaylist: Play[];
  genre: string
}

export interface PlaylistCardProps {
  playlist: Play
}

export type Play = {
  id: string;
  fields: {
    id: number;
    link: string;
    description: string;
    genre: string;
    image: string;
    name: string;
    createdAt: string;
  };
};

export type AirtableData = {
  id: number;
  fields: {
    status: string;
    image: string;
    name: string;
    link: string;
    followers: number;
    genre: string;
    id: string;
  } 
};


