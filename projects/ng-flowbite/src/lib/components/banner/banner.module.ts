import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgfBannerComponent } from './banner.component';

@NgModule({
  imports: [CommonModule, NgfBannerComponent],
  exports: [NgfBannerComponent]
})
export class NgfBannerModule {}

