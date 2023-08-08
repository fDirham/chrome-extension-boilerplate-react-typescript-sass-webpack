import React from 'react';
import { RootComponent } from '@/content/components';
import { createRoot } from 'react-dom/client';
import { isExtensionMode } from '@/common/helpers';

function onLoad() {
  if (isExtensionMode()) return;
  const rootDiv = document.createElement('div');
  const root = createRoot(rootDiv!);
  root.render(<RootComponent />);
  document.body.appendChild(rootDiv);
}

onLoad();
