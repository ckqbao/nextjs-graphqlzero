'use client';
import { useState } from 'react';
import { Provider } from 'react-redux';

import { createStore } from '@/redux';

type Props = {
  children: React.ReactNode;
};

export function ReduxProvider({ children }: Props) {
  const [store] = useState(() => createStore());

  return <Provider store={store}>{children}</Provider>;
}
