import { Component, OnInit } from '@angular/core';
import { MatchService } from './services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.page.html',
  styleUrls: ['./matches.page.sass'],
})
export class MatchesPage implements OnInit {
  _matches: MatchObject;
  _heroImg = '../../assets/images/properties-hero.svg';

  constructor(private _matchService: MatchService) {
    this._matchService.matches$.subscribe((matches) => {
      this._matches = matches;
    });
  }

  ngOnInit() {}
}
