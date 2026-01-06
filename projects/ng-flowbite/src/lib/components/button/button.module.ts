import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgfButtonComponent } from './button.component';

@NgModule({
  imports: [CommonModule, NgfButtonComponent],
  exports: [NgfButtonComponent]
})
export class NgfButtonModule {}

