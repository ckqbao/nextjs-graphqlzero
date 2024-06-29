'use client';

import { useLazyLoadQuery } from 'react-relay';

import { albumPhotosQuery } from '@/gql/__generated__/albumPhotosQuery.graphql';
import { ALBUM_PHOTOS_QUERY } from '@/gql/album';
import { PageQueryOptions } from '@/gql/__generated__/albumsQuery.graphql';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { NoSSR } from '@/components/NoSSR';
import { Pagination } from '@/components/Pagination';

type AlbumPhotosProps = {
  albumId: string;
};

export function AlbumPhotos({ albumId }: AlbumPhotosProps) {
  const limit = 12;

  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex justify-end">
        {totalItems !== 0 && (
          <Pagination
            currentPage={currentPage}
            itemsPerPage={limit}
            onChangePage={setCurrentPage}
            totalItems={totalItems}
          />
        )}
      </div>
      <NoSSR fallback={<PhotosSkeleton />}>
        <Photos albumId={albumId} limit={limit} page={currentPage} setTotalItems={setTotalItems} />
      </NoSSR>
    </div>
  );
}

function Photos({
  albumId,
  limit,
  page,
  setTotalItems,
}: {
  albumId: string;
  limit: number;
  page: number;
  setTotalItems: Dispatch<SetStateAction<number>>;
}) {
  const { album } = useLazyLoadQuery<albumPhotosQuery>(ALBUM_PHOTOS_QUERY, { id: albumId, limit, page });

  const photos = album?.photos?.data ?? [];
  const totalItems = album?.photos?.meta?.totalCount ?? 0;

  useEffect(() => {
    setTotalItems(totalItems);
  }, [setTotalItems, totalItems]);

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {photos.map((photo) =>
        photo ? (
          <a key={photo.id} href={photo.url ?? ''} className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              {/* eslint-disable @next/next/no-img-element */}
              {photo.thumbnailUrl ? (
                <img
                  src={photo.thumbnailUrl}
                  alt={photo.title ?? ''}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              ) : (
                <div className="w-full h-full bg-gray-300"></div>
              )}
            </div>
            <h3 className="mt-3 text-sm text-white">{photo.title}</h3>
          </a>
        ) : null
      )}
    </div>
  );
}

function PhotosSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {Array.from({ length: 8 }).map((v, i) => (
        <div key={i} className="animate-pulse">
          <div className="aspect-h-1 aspect-w-1 w-full rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <div className="h-40"></div>
          </div>
          <div className="mt-3 h-4 bg-gray-300 rounded w-3/4"></div>
        </div>
      ))}
    </div>
  );
}
