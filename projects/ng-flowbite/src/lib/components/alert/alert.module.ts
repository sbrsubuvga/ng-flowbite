import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgfAlertComponent } from './alert.component';

@NgModule({
  imports: [CommonModule, NgfAlertComponent],
  exports: [NgfAlertComponent]
})
export class NgfAlertModule {}

