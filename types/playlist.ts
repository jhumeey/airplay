
export type Playlist = {
    // id: number;
    // createdAt?: string;
    // updatedAt?: string;
    // name: string;
    // link: string;
    // tag: string;
    // description: string
    json: {
      id: string,
      fields: Play[]
    }
  }
  
  export interface PlaylistProps {
    playlists: Play[]
  }
  
  type Play = {
    id: string;
    fields: {
      id: number,
      link: string,
      description: string,
      tag: string,
      name: string,
      createdAt: string
    }
  }