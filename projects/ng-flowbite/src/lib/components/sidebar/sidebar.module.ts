import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  NgfSidebarComponent,
  NgfSidebarHeaderComponent,
  NgfSidebarContentComponent,
  NgfSidebarItemComponent,
  NgfSidebarFooterComponent
} from './sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgfSidebarComponent,
    NgfSidebarHeaderComponent,
    NgfSidebarContentComponent,
    NgfSidebarItemComponent,
    NgfSidebarFooterComponent
  ],
  exports: [
    NgfSidebarComponent,
    NgfSidebarHeaderComponent,
    NgfSidebarContentComponent,
    NgfSidebarItemComponent,
    NgfSidebarFooterComponent
  ]
})
export class NgfSidebarModule {}

