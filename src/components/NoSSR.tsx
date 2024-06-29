'use client';
import { PropsWithChildren, ReactNode, Suspense } from 'react';

export function NoSSR({ children, fallback }: PropsWithChildren<{ fallback: ReactNode }>) {
  return <Suspense fallback={fallback}>{children}</Suspense>;
}
