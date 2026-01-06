import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgfListGroupComponent, NgfListGroupItemComponent } from './list-group.component';

@NgModule({
  imports: [CommonModule, RouterModule, NgfListGroupComponent, NgfListGroupItemComponent],
  exports: [NgfListGroupComponent, NgfListGroupItemComponent]
})
export class NgfListGroupModule {}

