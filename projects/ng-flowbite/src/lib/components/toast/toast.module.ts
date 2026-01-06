import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgfToastComponent } from './toast.component';
import { NgfToastService } from './toast.service';

@NgModule({
  imports: [CommonModule, NgfToastComponent],
  providers: [NgfToastService],
  exports: [NgfToastComponent]
})
export class NgfToastModule {}

