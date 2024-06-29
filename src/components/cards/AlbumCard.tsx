'use client';

import React, { MouseEventHandler } from 'react';
import { useFragment } from 'react-relay';
import Link from 'next/link';

import { IconButton } from '@mui/material';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

import { albumFragment$key } from '@/gql/__generated__/albumFragment.graphql';
import { ALBUM_FRAGMENT } from '@/gql/album';
import { useAppDispatch, useAppSelector } from '@/redux';
import { likeAlbum, selectLikedAlbumIds, unlikeAlbum } from '@/redux/album.slice';
type AlbumCardProps = {
  album: albumFragment$key;
};

export function AlbumCard({ album }: AlbumCardProps) {
  const dispatch = useAppDispatch();
  const likedAlbumIds = useAppSelector(selectLikedAlbumIds);

  const data = useFragment<albumFragment$key>(ALBUM_FRAGMENT, album);

  const isLiked = likedAlbumIds.find((albumId) => albumId === data.id);

  const handleToggleLike: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (!data.id) return;

    if (isLiked) {
      dispatch(unlikeAlbum(data.id));
    } else {
      dispatch(likeAlbum(data.id));
    }
  };

  if (!data) {
    return null;
  }

  const title = data.title ?? '';
  const thumbnailUrl = data.photos?.data?.[0]?.thumbnailUrl;
  const url = `/albums/${data.id}`;
  const user = data.user?.name;

  return (
    <div className="group">
      <Link href={url}>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          {/* eslint-disable @next/next/no-img-element */}
          <img
            src={thumbnailUrl ?? ''}
            alt={title}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
      </Link>
      <div className="mt-3 flex flex-row items-center justify-between">
        <Link href={url}>
          <h3 className="text-sm text-white">{title}</h3>
          <p className="text-xs text-white">{user}</p>
        </Link>
        <IconButton size="medium" onClick={handleToggleLike} sx={{ color: 'white' }}>
          {isLiked ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon />}
        </IconButton>
      </div>
    </div>
  );
}
