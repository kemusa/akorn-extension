import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatchesPageRoutingModule } from './matches-routing.module';

import { MatchesPage } from './matches.page';
import { SharedModule } from '../shared/shared.module';
import { PropertyCardComponent } from './components/property-card/property-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatchesPageRoutingModule,
    SharedModule,
  ],
  declarations: [MatchesPage, PropertyCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MatchesPageModule {}
