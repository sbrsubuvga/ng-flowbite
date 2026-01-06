import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgfSkeletonComponent } from './skeleton.component';

@NgModule({
  imports: [CommonModule, NgfSkeletonComponent],
  exports: [NgfSkeletonComponent]
})
export class NgfSkeletonModule {}

