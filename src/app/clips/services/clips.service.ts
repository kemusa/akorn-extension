import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClipsService {
  iFrameLoadedSubject = new BehaviorSubject<boolean>(false);
  $iFrameLoaded = this.iFrameLoadedSubject.asObservable();

  videoConfig;

  player: YT.Player;
  constructor() {}

  updatePlayerState(loaded: boolean) {
    this.iFrameLoadedSubject.next(loaded);
  }

  loadIframe(config) {
    this.videoConfig = config;
    window.onYouTubeIframeAPIReady = this.loadPlayer.bind(this);

    if (document.getElementById('iframe_api') === null) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.id = 'iframe_api';
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      this.loadPlayer();
    }
  }

  loadPlayer() {
    this.player = new YT.Player('player', {
      videoId: this.videoConfig.videoId,
      // height: '100%',
      width: '100%',
      playerVars: {
        rel: 0,
        controls: 0,
        showinfo: 0,
        autoplay: 1,
        loop: 1,
        modestbranding: 1,
        start: this.videoConfig.start,
        end: this.videoConfig.end,
        iv_load_policy: 0
      },
      events: {
        onReady: this.onPlayerReady,
        onStateChange: this.onPlayerStateChange.bind(this)
      }
    });
  }

  onPlayerReady(event) {
    event.target.playVideo();
  }

  onPlayerStateChange(event) {
    // if (event.data === 1) this.updatePlayerState(true);
  }
}
