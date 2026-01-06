import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgfCardComponent,
  NgfCardHeaderComponent,
  NgfCardTitleComponent,
  NgfCardContentComponent,
  NgfCardFooterComponent,
  NgfCardImageComponent
} from './card.component';

@NgModule({
  imports: [
    CommonModule,
    NgfCardComponent,
    NgfCardHeaderComponent,
    NgfCardTitleComponent,
    NgfCardContentComponent,
    NgfCardFooterComponent,
    NgfCardImageComponent
  ],
  exports: [
    NgfCardComponent,
    NgfCardHeaderComponent,
    NgfCardTitleComponent,
    NgfCardContentComponent,
    NgfCardFooterComponent,
    NgfCardImageComponent
  ]
})
export class NgfCardModule {}

