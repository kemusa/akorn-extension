import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.sass']
})
export class PageHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() defaultHref: string[];
  constructor() {}

  ngOnInit() {}
}
