import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClipPageRoutingModule } from './clip-routing.module';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { ClipPage } from './clip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClipPageRoutingModule,
    SharedModule,
    YouTubePlayerModule
  ],
  declarations: [ClipPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClipPageModule {}
