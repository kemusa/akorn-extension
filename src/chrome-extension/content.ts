import { GMapsPageData } from './gmaps-data';

const runObserver = () => {
  const observe = new GMapsPageData();
  observe.initObserver();
};

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.action == 'popUpOpened') {
    runObserver();
  }
});
