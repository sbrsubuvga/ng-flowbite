import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgfCarouselComponent } from './carousel.component';

@NgModule({
  imports: [CommonModule, NgfCarouselComponent],
  exports: [NgfCarouselComponent]
})
export class NgfCarouselModule {}

