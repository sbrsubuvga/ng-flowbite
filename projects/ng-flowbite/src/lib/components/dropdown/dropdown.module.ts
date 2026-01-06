import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgfDropdownComponent, NgfDropdownItemComponent } from './dropdown.component';

@NgModule({
  imports: [CommonModule, NgfDropdownComponent, NgfDropdownItemComponent],
  exports: [NgfDropdownComponent, NgfDropdownItemComponent]
})
export class NgfDropdownModule {}

