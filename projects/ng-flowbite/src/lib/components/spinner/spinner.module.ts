import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgfSpinnerComponent } from './spinner.component';

@NgModule({
  imports: [CommonModule, NgfSpinnerComponent],
  exports: [NgfSpinnerComponent]
})
export class NgfSpinnerModule {}

