import { ReactNode } from 'react';

export async function generateMetadata() {
  return { title: 'Albums' };
}

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
