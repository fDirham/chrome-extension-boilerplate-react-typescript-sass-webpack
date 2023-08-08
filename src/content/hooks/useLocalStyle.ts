import { generateRandomString } from '@/common/helpers';
import { useMemo } from 'react';

function styleLocalizer(
  prefix: string,
  stylesStr: string
): [{ [key: string]: string }, string] {
  /*
  Get class names by parsing string
  Change class names with prefix as context
  Replace class names in style string
  Return mapping and new style strings
  */

  // Get class names
  const regex = /\.\w+/g;
  const rawClassNames = stylesStr.match(regex);
  //@ts-ignore
  const uniqueClassNames = [...new Set(rawClassNames)].map((className) =>
    className.substring(1)
  );
  const styleMappings: { [key: string]: string } = {};
  let newStylesStr = stylesStr;

  uniqueClassNames.forEach((className: string) => {
    const newName = prefix + '_' + className + '_' + generateRandomString(3);
    styleMappings[className] = newName;
    const regex = new RegExp(`${className}`, 'g');
    newStylesStr = newStylesStr.replace(regex, newName);
  });

  return [styleMappings, newStylesStr];
}

export default function useLocalStyle(uniqueId: string, rawStyle: string) {
  return useMemo(() => styleLocalizer(uniqueId, rawStyle), []);
}
