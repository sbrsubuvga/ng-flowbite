import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgfTableComponent,
  NgfTableHeadComponent,
  NgfTableBodyComponent,
  NgfTableRowComponent,
  NgfTableHeaderComponent,
  NgfTableCellComponent
} from './table.component';

@NgModule({
  imports: [
    CommonModule,
    NgfTableComponent,
    NgfTableHeadComponent,
    NgfTableBodyComponent,
    NgfTableRowComponent,
    NgfTableHeaderComponent,
    NgfTableCellComponent
  ],
  exports: [
    NgfTableComponent,
    NgfTableHeadComponent,
    NgfTableBodyComponent,
    NgfTableRowComponent,
    NgfTableHeaderComponent,
    NgfTableCellComponent
  ]
})
export class NgfTableModule {}

