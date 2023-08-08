import { appLog } from '@/common/loggers';
import * as Components from './components';

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
    appLog('Not ready');
    document.addEventListener('DOMContentLoaded', fn);
  }
}

docReady(async () => {
  Components.loadUI();
  appLog('Micro notes loaded');
});
