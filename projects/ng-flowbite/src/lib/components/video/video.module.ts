import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgfVideoComponent } from './video.component';

@NgModule({
  imports: [CommonModule, NgfVideoComponent],
  exports: [NgfVideoComponent]
})
export class NgfVideoModule {}

