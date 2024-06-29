'use client';

export function NotFound(props: { message?: string }) {
  const message = props.message || 'Page not found';
  return <h2 className="text-center text-2xl">{message}</h2>;
}
