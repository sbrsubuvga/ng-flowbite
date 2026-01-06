import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgfIndicatorComponent, NgfIndicatorWrapperComponent } from './indicators.component';

@NgModule({
  imports: [CommonModule, NgfIndicatorComponent, NgfIndicatorWrapperComponent],
  exports: [NgfIndicatorComponent, NgfIndicatorWrapperComponent]
})
export class NgfIndicatorsModule {}

