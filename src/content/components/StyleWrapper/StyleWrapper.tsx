import React from 'react';

type StyleWrapperProps = { children: any; styleStr: string };

export default function StyleWrapper(props: StyleWrapperProps) {
  return (
    <>
      {props.children}
      <style>{props.styleStr}</style>
    </>
  );
}
