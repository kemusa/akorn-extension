import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClipsPageRoutingModule } from './clips-routing.module';

import { ClipsPage } from './clips.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClipsPageRoutingModule,
    SharedModule
  ],
  declarations: [ClipsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClipsPageModule {}
