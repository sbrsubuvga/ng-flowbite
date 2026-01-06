import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgfAccordionComponent, NgfAccordionItemComponent } from './accordion.component';

@NgModule({
  imports: [CommonModule, NgfAccordionComponent, NgfAccordionItemComponent],
  exports: [NgfAccordionComponent, NgfAccordionItemComponent]
})
export class NgfAccordionModule {}

