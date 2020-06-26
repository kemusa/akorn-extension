import { Component, OnInit, OnDestroy } from '@angular/core';
import { clips } from '../clips.config';
import { ActivatedRoute, Router } from '@angular/router';
import { ClipsService } from '../services/clips.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-clip',
  templateUrl: './clip.page.html',
  styleUrls: ['./clip.page.sass']
})
export class ClipPage implements OnInit {
  clip;
  clips = clips;
  videoId: string;
  videoHeight: number = 405;
  videoWidth: number = 720;
  iFrameLoaded: boolean = false;

  playerVars = {};
  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private clipsService: ClipsService // private sanitizer: DomSanitizer
  ) {}

  getConfig(param) {
    let config = { videoId: '', start: null, end: null };

    const videoMatch = this.clips.filter(x => x.id == param.videoId);
    const startMatch = videoMatch.filter(x => x.start == param.start);
    const endMatch = startMatch.filter(x => x.end == param.end);
    const clip = endMatch[0];

    if (clip) {
      this.clip = clip;
      config.videoId = clip.id;
      config.start = clip.start;
      config.end = clip.end;
    } else {
      this.router.navigate(['/clips']);
    }
    return config;
  }

  ngOnInit() {
    this.activeRoute.params.forEach(param => {
      if (!param.videoId) this.router.navigate(['/clips']);
      const config = this.getConfig(param);
      this.clipsService.loadIframe(config);
    });
  }
}
