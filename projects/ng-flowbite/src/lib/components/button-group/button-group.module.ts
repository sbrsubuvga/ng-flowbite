import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgfButtonGroupComponent, NgfButtonGroupItemComponent } from './button-group.component';

@NgModule({
  imports: [CommonModule, NgfButtonGroupComponent, NgfButtonGroupItemComponent],
  exports: [NgfButtonGroupComponent, NgfButtonGroupItemComponent]
})
export class NgfButtonGroupModule {}

