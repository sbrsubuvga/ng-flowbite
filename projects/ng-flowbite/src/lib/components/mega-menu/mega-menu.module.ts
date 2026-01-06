import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  NgfMegaMenuComponent,
  NgfMegaMenuColumnComponent,
  NgfMegaMenuItemComponent,
  NgfMegaMenuTitleComponent
} from './mega-menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgfMegaMenuComponent,
    NgfMegaMenuColumnComponent,
    NgfMegaMenuItemComponent,
    NgfMegaMenuTitleComponent
  ],
  exports: [
    NgfMegaMenuComponent,
    NgfMegaMenuColumnComponent,
    NgfMegaMenuItemComponent,
    NgfMegaMenuTitleComponent
  ]
})
export class NgfMegaMenuModule {}

