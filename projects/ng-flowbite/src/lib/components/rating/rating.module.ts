import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgfRatingComponent } from './rating.component';

@NgModule({
  imports: [CommonModule, NgfRatingComponent],
  exports: [NgfRatingComponent]
})
export class NgfRatingModule {}

