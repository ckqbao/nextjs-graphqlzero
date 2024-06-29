import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';

type AlbumState = {
  likedAlbums: string[];
};

const initialState: AlbumState = {
  likedAlbums: [],
};

export const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {
    likeAlbum(state, action: PayloadAction<string>) {
      const albumId = action.payload;
      state.likedAlbums.push(albumId);
    },
    unlikeAlbum(state, action: PayloadAction<string>) {
      const albumId = action.payload;
      state.likedAlbums = state.likedAlbums.filter((likedAlbumId) => likedAlbumId !== albumId);
    },
  },
});

export const { likeAlbum, unlikeAlbum } = albumSlice.actions;

export const selectLikedAlbumIds = (state: RootState) => state.album.likedAlbums;
