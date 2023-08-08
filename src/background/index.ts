import { isExtensionMode } from '@/common/helpers';
import { appLogError } from '@/common/loggers';

if (isExtensionMode()) {
  chrome.action.onClicked.addListener(async (tab) => {
    try {
      await chrome.tabs.sendMessage(tab.id, { action: 'TOGGLE' });
    } catch (error) {
      appLogError(error);
    }
  });
}
