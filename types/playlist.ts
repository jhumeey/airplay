
export interface PlaylistProps {
  playlists: Playlist[];
}

type Playlist = {
  id: number;
  imageLink: string;
  isPublic: boolean;
  genre: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  playlistId: string;
};

export interface ItemProps {
  playlist: Playlist
}

