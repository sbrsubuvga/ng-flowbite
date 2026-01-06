import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgfDatepickerComponent } from './datepicker.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, NgfDatepickerComponent],
  exports: [NgfDatepickerComponent]
})
export class NgfDatepickerModule {}

