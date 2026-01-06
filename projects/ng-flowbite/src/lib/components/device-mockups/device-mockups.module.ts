import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgfDeviceMockupComponent } from './device-mockups.component';

@NgModule({
  imports: [CommonModule, NgfDeviceMockupComponent],
  exports: [NgfDeviceMockupComponent]
})
export class NgfDeviceMockupsModule {}

