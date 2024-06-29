'use client';

import { Dispatch, SetStateAction, useEffect } from 'react';
import { useLazyLoadQuery } from 'react-relay';
import { Box } from '@mui/material';

import { AlbumCard } from '@/components/cards/AlbumCard';

import { PageQueryOptions, albumsQuery } from '@/gql/__generated__/albumsQuery.graphql';
import { ALBUMS_QUERY } from '@/gql/albums';

type AlbumsProps = {
  queryOptions: PageQueryOptions;
  setTotalItems: Dispatch<SetStateAction<number>>;
};

export function Albums({ queryOptions, setTotalItems }: AlbumsProps) {
  const { albums } = useLazyLoadQuery<albumsQuery>(ALBUMS_QUERY, {
    options: queryOptions,
  });

  const totalItems = albums?.meta?.totalCount ?? 0;

  useEffect(() => {
    setTotalItems(totalItems);
  }, [setTotalItems, totalItems]);

  return (
    <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={2}>
      {albums?.data?.map((album) => (album ? <AlbumCard key={album.id} album={album} /> : null))}
    </Box>
  );
}

export function AlbumsSkeleton() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
      {Array.from({ length: 8 }).map((v, i) => (
        <div key={i} className="animate-pulse">
          <div className="aspect-h-1 aspect-w-1 w-full rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <div className="h-40"></div>
          </div>
          <div className="mt-3 h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="mt-1 h-3 bg-gray-200 rounded w-1/4"></div>
        </div>
      ))}
    </div>
  );
}
