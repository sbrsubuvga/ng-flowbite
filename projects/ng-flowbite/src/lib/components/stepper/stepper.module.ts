import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgfStepperComponent } from './stepper.component';

@NgModule({
  imports: [CommonModule, NgfStepperComponent],
  exports: [NgfStepperComponent]
})
export class NgfStepperModule {}

