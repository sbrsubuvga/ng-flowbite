import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgfBadgeComponent } from './badge.component';

@NgModule({
  imports: [CommonModule, NgfBadgeComponent],
  exports: [NgfBadgeComponent]
})
export class NgfBadgeModule {}

