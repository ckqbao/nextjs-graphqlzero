'use client';

import { useMemo, useState } from 'react';
import { Stack, Typography } from '@mui/material';

import { NoSSR } from '@/components/NoSSR';
import { Pagination } from '@/components/Pagination';

import { useQueryParam } from '@/hooks/useQueryParam';

import { Albums, AlbumsSkeleton } from './Albums';
import { SearchAlbum } from './SearchAlbum';
import { SortAlbum } from './SortAlbum';
import { PageQueryOptions } from '@/gql/__generated__/albumsQuery.graphql';

export default function Page() {
  const limit = 12;

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useQueryParam('search', (value) => value || '');
  const [sort, setSort] = useQueryParam('sort', (value) => value ?? '');
  const [totalItems, setTotalItems] = useState(0);

  const queryOptions: PageQueryOptions = useMemo(
    () => ({
      search: { q: searchQuery },
      sort: sort ? [{ field: sort, order: 'ASC' }] : [],
      paginate: { limit, page: currentPage },
    }),
    [currentPage, limit, searchQuery, sort]
  );

  return (
    <Stack>
      <SearchAlbum searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="flex items-center justify-between mt-8">
        <Typography
          component="h2"
          variant="h3"
          sx={{ color: '#e5e5e5', fontSize: '34px', fontWeight: 700, lineHeight: 1.2 }}
        >
          Recommended albums
        </Typography>
      </div>
      <div className="mt-6 flex flex-col space-y-6">
        <div className="flex justify-between">
          <SortAlbum sort={sort} setSort={setSort} />
          {totalItems !== 0 && (
            <Pagination
              currentPage={currentPage}
              itemsPerPage={limit}
              onChangePage={setCurrentPage}
              totalItems={totalItems}
            />
          )}
        </div>
        <NoSSR fallback={<AlbumsSkeleton />}>
          <Albums queryOptions={queryOptions} setTotalItems={setTotalItems} />
        </NoSSR>
      </div>
    </Stack>
  );
}
