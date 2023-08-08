import React, { useEffect, useState } from 'react';
import TestComponent from './TestComponent';
import { createRoot } from 'react-dom/client';
import * as style from './global.scss';
import StyleWrapper from './StyleWrapper';

export function RootComponent({ opened = true }) {
  return (
    <StyleWrapper styleStr={style}>
      <div style={{ display: opened ? 'block' : 'none' }}>
        <TestComponent />
      </div>
    </StyleWrapper>
  );
}
const RootContainer = () => {
  const [opened, setOpened] = useState<boolean>(false);

  useEffect(() => {
    chrome.runtime.onMessage.addListener(function (
      request,
      sender,
      sendResponse
    ) {
      if (request.action == 'TOGGLE') {
        setOpened((val) => !val);
      }
    });
  }, []);

  return <RootComponent opened={opened} />;
};

export function loadUI() {
  const dudDiv = document.createElement('div');
  const shadowRoot = dudDiv.attachShadow({ mode: 'open' });
  const root = createRoot(shadowRoot!);
  root.render(<RootContainer />);
  document.body.append(dudDiv);
}
