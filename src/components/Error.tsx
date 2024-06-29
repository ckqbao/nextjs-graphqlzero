'use client';
import { ExtendedError } from '@/types/graphqlError';

export function Error({ error }: { error: ExtendedError; resetErrorBoundary: () => void }) {
  let message = 'Something went wrong :(';

  if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
    message = error.message;
  }

  return (
    <div className="rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
      <h2>Error</h2>
      <p>{message}</p>
    </div>
  );
}
