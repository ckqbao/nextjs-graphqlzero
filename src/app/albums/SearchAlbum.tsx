'use client';
import { useState } from 'react';

import { useDebounce } from '@/hooks/useDebounce';
import { SetQueryParam } from '@/hooks/useQueryParam';

type SearchAlbumProps = {
  searchQuery: string;
  setSearchQuery: SetQueryParam<string>;
};

export function SearchAlbum({ searchQuery, setSearchQuery }: SearchAlbumProps) {
  const [value, setValue] = useState(searchQuery);

  const debouncedSearchQuery = useDebounce(setSearchQuery, 200);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const search = e.target.value === '' ? '' : e.target.value;
    setValue(search);
    debouncedSearchQuery(search);
  }

  return <input className="text-input max-w-[480px]" onChange={onChange} placeholder="Search albums" value={value} />;
}
