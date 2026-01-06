import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  NgfFooterComponent,
  NgfFooterBrandComponent,
  NgfFooterTitleComponent,
  NgfFooterLinkComponent,
  NgfFooterLinksComponent
} from './footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgfFooterComponent,
    NgfFooterBrandComponent,
    NgfFooterTitleComponent,
    NgfFooterLinkComponent,
    NgfFooterLinksComponent
  ],
  exports: [
    NgfFooterComponent,
    NgfFooterBrandComponent,
    NgfFooterTitleComponent,
    NgfFooterLinkComponent,
    NgfFooterLinksComponent
  ]
})
export class NgfFooterModule {}

