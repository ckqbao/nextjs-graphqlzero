'use client';
import { useState } from 'react';
import { RelayEnvironmentProvider } from 'react-relay';

import { createRelayEnvironment } from '@/relayEnvironment';

type Props = {
  children: React.ReactNode;
  apiUrl: string;
};

export function RelayProvider({ children, apiUrl }: Props) {
  const [environment] = useState(createRelayEnvironment(apiUrl));

  return <RelayEnvironmentProvider environment={environment}>{children}</RelayEnvironmentProvider>;
}
