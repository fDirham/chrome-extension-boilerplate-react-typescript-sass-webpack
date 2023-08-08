import { appLogError } from '@/common/loggers';

chrome.action.onClicked.addListener(async (tab) => {
  try {
    await chrome.tabs.sendMessage(tab.id, { action: 'TOGGLE' });
  } catch (error) {
    appLogError("Can't send message to tab", error);
  }
});
