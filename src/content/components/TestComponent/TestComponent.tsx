import React, { useState } from 'react';
import * as rawStyle from './TestComponent.scss';
import StyleWrapper from '../StyleWrapper';
import useLocalStyle from '../../hooks/useLocalStyle';

type TestComponentProps = {};

export default function TestComponent(props: TestComponentProps) {
  /* Example on how to use styles */
  const [styles, styleString] = useLocalStyle('Test', rawStyle);
  const [clicked, setClicked] = useState(0);

  return (
    <StyleWrapper styleStr={styleString}>
      <div className={styles.container}>
        <span>Hello world!</span>
        <button onClick={() => setClicked((num) => num + 1)}>Click me!</button>
        <span className={styles.numText}>Num clicked: {clicked}</span>
      </div>
    </StyleWrapper>
  );
}
