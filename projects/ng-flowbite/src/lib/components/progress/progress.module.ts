import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgfProgressComponent } from './progress.component';

@NgModule({
  imports: [CommonModule, NgfProgressComponent],
  exports: [NgfProgressComponent]
})
export class NgfProgressModule {}

