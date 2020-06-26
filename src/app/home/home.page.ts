import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
// import { LoadingService } from '../core/services/loading.service';
import { ChromeService } from '../core/services/chrome.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.sass'],
})
export class HomePage implements OnInit, AfterViewInit {
  _isLoading: boolean = false;
  placeholderImg = '../../assets/images/setup_analytics.svg';
  matches: any[] = [];

  constructor(
    // private _loadingService: LoadingService,
    private _chromeService: ChromeService
  ) {
    // this._loadingService.isLoading$.subscribe((isLoading) => {
    //   this._isLoading = isLoading;
    // });
  }

  ngAfterViewInit() {}

  ngOnInit() {
    this._chromeService.initPopUp();
    this._chromeService.initMapsListener();
  }
}
