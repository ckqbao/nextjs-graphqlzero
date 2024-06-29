import './globals.css';

import type { Metadata } from 'next';
import { ErrorBoundary } from 'react-error-boundary';
import invariant from 'tiny-invariant';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Container } from '@mui/material';

import { Error } from '@/components/Error';
import { Header } from '@/components/layout/Header';
import { ReduxProvider } from '@/components/providers/ReduxProvider';
import { RelayProvider } from '@/components/providers/RelayProvider';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  invariant(process.env.GRAPHQL_API_URL, 'Must define env variable API_URL');
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ErrorBoundary FallbackComponent={Error}>
            <ReduxProvider>
              <RelayProvider apiUrl={process.env.GRAPHQL_API_URL}>
                <Header />
                <Container maxWidth="lg" sx={{ marginTop: '15px', marginBottom: '30px' }}>
                  {children}
                </Container>
              </RelayProvider>
            </ReduxProvider>
          </ErrorBoundary>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
