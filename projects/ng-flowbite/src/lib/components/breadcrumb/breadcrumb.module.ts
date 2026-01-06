import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgfBreadcrumbComponent } from './breadcrumb.component';

@NgModule({
  imports: [CommonModule, RouterModule, NgfBreadcrumbComponent],
  exports: [NgfBreadcrumbComponent]
})
export class NgfBreadcrumbModule {}

