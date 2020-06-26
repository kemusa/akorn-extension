import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-area-light',
  templateUrl: './text-area-light.component.html',
  styleUrls: ['./text-area-light.component.sass']
})
export class TextAreaLightComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() title: string;
  @Input() placeholder: string = '';
  @Input() control: string;
  @Input() iconName: string;
  constructor() {}

  ngOnInit() {}
}
