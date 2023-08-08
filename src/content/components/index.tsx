import React, { useEffect, useState } from 'react';
import TestComponent from './TestComponent';
import { createRoot } from 'react-dom/client';
import * as style from './global.scss';
import StyleWrapper from './StyleWrapper';

const RootComponent = () => {
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

  return (
    <StyleWrapper styleStr={style}>
      <div style={{ display: opened ? 'block' : 'none' }}>
        <TestComponent />
      </div>
    </StyleWrapper>
  );
};

export function loadUI() {
  const dudDiv = document.createElement('div');
  const shadowRoot = dudDiv.attachShadow({ mode: 'open' });
  const root = createRoot(shadowRoot!);
  root.render(<RootComponent />);
  document.body.append(dudDiv);
}
