export class GMapsPageData {
  private _observer: MutationObserver;
  private _config: MutationObserverInit = {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true,
  };
  private _btnSelector: string = '[data-item-id="address"]';
  private _addressClass: string = 'section-hero-header-title-title';

  constructor() {}

  public initObserver() {
    const targetNode: HTMLElement = document.getElementById('pane');
    // Create an observer instance linked to the callback function
    this._observer = new MutationObserver(this._mutationCallback.bind(this));
    // Start observing the target node for configured mutations
    this._observer.observe(targetNode, this._config);
    // Run an intial data fetch
    this._getPlaceData();
  }

  public stopObserver() {
    this._observer.disconnect();
  }

  private _getPlaceData() {
    const nameElm = document.body
      .getElementsByClassName(this._addressClass)
      .item(0);
    const addressElm = document.querySelectorAll(this._btnSelector).item(0);

    if (addressElm && nameElm) {
      this._sendPlaceData({
        name: nameElm.textContent.trim(),
        address: addressElm.textContent.trim(),
      });
    }
  }

  private _sendPlaceData(data: GMapsData) {
    chrome.runtime.sendMessage(data);
  }

  // Callback function to execute when mutations are observed
  private _mutationCallback(mutationsList, observer) {
    const targetClass = 'widget-pane';
    for (let mutation of mutationsList) {
      const classList: DOMTokenList = mutation.target.classList;
      if (mutation.type === 'attributes' && classList.contains(targetClass)) {
        this._getPlaceData();
      }
    }
  }
}
