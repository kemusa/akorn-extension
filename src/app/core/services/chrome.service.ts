import { Injectable } from '@angular/core';
import { GmapsService } from 'src/app/shared/services/gmaps.service';
import { LandRegistryService } from 'src/app/shared/services/land-registry.service';
import { MatchService } from 'src/app/matches/services/match.service';
import { LoaderService } from 'src/app/shared/components/loader/services/loader.service';

@Injectable({
  providedIn: 'root',
})
export class ChromeService {
  constructor(
    private _gmapsService: GmapsService,
    private _landRegService: LandRegistryService,
    private _matchService: MatchService,
    private _loader: LoaderService
  ) {}

  public initPopUp() {
    const action = 'popUpOpened';
    chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
      const activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { action });
    });
  }

  public initMapsListener() {
    chrome.runtime.onMessage.addListener(
      async (message, sender, sendResponse) => {
        this._loader.show();
        // todo: change to check to [message.action == 'findProperty']
        if (message.name && message.address) {
          const queryString = `${message.name} ${message.address}`;
          const place = await this._gmapsService.getMapsData(queryString);
          if (place) {
            const {
              matches,
              job,
            } = await this._landRegService.getPropertyOwners(place.postcode);
            // list matches
            this._matchService.listMatches({
              matches: matches,
              job: job,
              gmapAddress: message.address,
            });
            this._loader.hide();
          } else {
            // todo: send message on homepage saying "no companies matches to this property"
            this._loader.hide();
          }
        }
      }
    );
  }
}
