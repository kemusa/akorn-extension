import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-field-light',
  templateUrl: './input-field-light.component.html',
  styleUrls: ['./input-field-light.component.sass']
})
export class InputFieldLightComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() title: string;
  @Input() control: string;
  @Input() type = 'input';
  @Input() iconName: string;
  constructor() {}

  ngOnInit() {}
}
