import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgfPaginationComponent } from './pagination.component';

@NgModule({
  imports: [CommonModule, NgfPaginationComponent],
  exports: [NgfPaginationComponent]
})
export class NgfPaginationModule {}

