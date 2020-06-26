import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-uk-hold-tag',
  templateUrl: './uk-hold-tag.component.html',
  styleUrls: ['./uk-hold-tag.component.sass'],
})
export class UkHoldTagComponent implements OnInit {
  @Input() holdType;
  constructor() {}

  styleTag() {
    const styles =
      this.holdType == 'Freehold'
        ? { freehold: true, leasehold: false }
        : { freehold: false, leasehold: true };
    return styles;
  }

  ngOnInit() {}
}
