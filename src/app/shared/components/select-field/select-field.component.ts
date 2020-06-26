import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.sass'],
})
export class SelectFieldComponent {
  @Input() parentForm: FormGroup;
  @Input() control: string;
  @Input() title: string;
  @Input() options: Options[];
  @Input() placeholder: string = '';
  @Input() iconName: string;
  constructor() {}
}
