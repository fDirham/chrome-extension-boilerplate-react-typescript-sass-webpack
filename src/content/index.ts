import { appLog } from '@/common/loggers';
import * as components from './components';
import { isExtensionMode } from '@/common/helpers';

/*
Run function once doc is ready
*/
function docReady(fn: any) {
  if (
    //@ts-ignore
    document.attachEvent
      ? document.readyState === 'complete'
      : document.readyState !== 'loading'
  ) {
    fn();
  } else {
    appLog('Doc not ready');
    document.addEventListener('DOMContentLoaded', fn);
  }
}

if (isExtensionMode()) {
  docReady(async () => {
    components.loadUI();
  });
}
