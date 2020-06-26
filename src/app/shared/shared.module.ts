import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldLightComponent } from './components/input-field-light/input-field-light.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TextAreaLightComponent } from './components/text-area-light/text-area-light.component';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { SelectFieldComponent } from './components/select-field/select-field.component';
import { UkHoldTagComponent } from '../shared/components/uk-hold-tag/uk-hold-tag.component';

@NgModule({
  declarations: [
    InputFieldLightComponent,
    TextAreaLightComponent,
    SelectFieldComponent,
    MenuHeaderComponent,
    PageHeaderComponent,
    UkHoldTagComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule],
  exports: [
    InputFieldLightComponent,
    TextAreaLightComponent,
    SelectFieldComponent,
    MenuHeaderComponent,
    PageHeaderComponent,
    UkHoldTagComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
