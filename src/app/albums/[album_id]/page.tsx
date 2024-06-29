import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import { NotFound } from '@/components/layout/NotFound';

import { albumQuery } from '@/gql/__generated__/albumQuery.graphql';
import { ALBUM_QUERY } from '@/gql/album';

import { fetchQueryServerSide, withErrorHandler } from '@/relayEnvironment';

import { AlbumPhotos } from './AlbumPhotos';
import Link from 'next/link';

type PageProps = {
  params: {
    album_id: string;
  };
};

export async function generateMetadata({ params }: PageProps) {
  const [data, error] = await withErrorHandler(fetchQueryServerSide<albumQuery>(ALBUM_QUERY, { id: params.album_id }));
  if (error) throw error;
  if (!data?.album) return 'Patient not found';
  return { title: data.album.title };
}

export default async function AlbumPage({ params }: PageProps) {
  const [data, error] = await withErrorHandler(fetchQueryServerSide<albumQuery>(ALBUM_QUERY, { id: params.album_id }));

  if (error) throw error;

  if (!data?.album) return <NotFound message="Album not found" />;

  return (
    <div>
      <div className="mb-2.5">
        <Link href="/albums" className="inline-flex items-center justify-center space-x-2.5 text-white">
          <KeyboardBackspaceIcon />
          <span>Back</span>
        </Link>
      </div>
      <h1 className="sr-only">Album</h1>
      <h1 className="mb-3 text-4xl leading-[1.2] text-white capitalize">{data.album.title}</h1>
      <p className="mb-5 text-2xl text-white">{data.album?.user?.name}</p>
      <AlbumPhotos albumId={params.album_id} />
    </div>
  );
}
