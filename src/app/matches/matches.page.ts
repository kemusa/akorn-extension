import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MatchService } from './services/match.service';
import { LandRegistryService } from '../shared/services/land-registry.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.page.html',
  styleUrls: ['./matches.page.sass'],
})
export class MatchesPage implements OnInit {
  _matches: MatchObject = null;
  _totalMatches: number;
  companyString: string = 'companies';
  _heroImg = '../../assets/images/properties-hero.svg';
  @ViewChild(IonInfiniteScroll, { static: false })
  _infiniteScroll: IonInfiniteScroll;

  constructor(
    private _matchService: MatchService,
    private _landRegService: LandRegistryService,
    private _changeDetection: ChangeDetectorRef
  ) {
    this._matchService.matches$.subscribe((matches) => {
      this._totalMatches = parseInt(matches.job.totalRows);
      this._matches = matches;
      if (this._totalMatches == 1) {
        this.companyString = 'company';
      }
    });
  }

  private async _loadData(event) {
    if (this._matches.matches.length !== this._totalMatches) {
      const data = await this._landRegService.getMoreQueryData(
        this._matches.job.jobReference.jobId,
        this._matches.job.pageToken
      );
      this._updateMatches(data);
      this._matches.matches.push(...data.matches);
      event.target.complete();
      this._changeDetection.detectChanges();
    } else {
      this._infiniteScroll.disabled = true;
    }
  }

  private async _updateMatches(update) {
    this._matches.job = update.job;
  }

  ngOnInit() {}
}
