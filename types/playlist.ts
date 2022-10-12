
export type Playlist = {
    json: {
      id: string,
      fields: Play[]
    }
  }
  
  export interface PlaylistProps {
    playlists: Play[],
    featuredPlaylist: Play[],
    trendingPlaylist: Play[]
  }
  
  export type Play = {
    id: string;
    fields: {
      id: number,
      link: string,
      description: string,
      genre: string[],
      image: string,
      name: string,
      createdAt: string
    }
  }