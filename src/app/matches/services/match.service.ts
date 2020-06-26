import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  private _matchesSub = new BehaviorSubject<MatchObject>(null);
  public matches$ = this._matchesSub.asObservable();

  constructor(private navCtrl: NavController) {}

  public listMatches(matches: MatchObject) {
    this._matchesSub.next(matches);
    this.navCtrl.navigateForward('/matches');
  }
}
