chrome.runtime.onInstalled.addListener(() => {
  chrome.webNavigation.onCompleted.addListener(
    () => {
      chrome.tabs.query({ active: true, currentWindow: true }, ([{ id }]) => {
        chrome.pageAction.show(id);
      });
    },
    { url: [{ urlMatches: 'google.com/maps' }] }
  );
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action == 'isPopUpOpen') {
    const views = chrome.extension.getURL('popup');
    sendResponse(views);
  }
});
