import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgfKbdComponent, NgfKbdGroupComponent } from './kbd.component';

@NgModule({
  imports: [CommonModule, NgfKbdComponent, NgfKbdGroupComponent],
  exports: [NgfKbdComponent, NgfKbdGroupComponent]
})
export class NgfKbdModule {}

