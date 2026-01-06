import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgfHeadingComponent } from './headings/headings.component';
import { NgfParagraphComponent } from './paragraph/paragraph.component';
import { NgfBlockquoteComponent } from './blockquote/blockquote.component';
import { NgfImageComponent } from './image/image.component';
import { NgfListComponent, NgfListItemComponent, NgfDescriptionTermComponent, NgfDescriptionDetailsComponent } from './list/list.component';
import { NgfLinkComponent } from './link/link.component';
import { NgfTextComponent } from './text/text.component';
import { NgfHrComponent } from './hr/hr.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgfHeadingComponent,
    NgfParagraphComponent,
    NgfBlockquoteComponent,
    NgfImageComponent,
    NgfListComponent,
    NgfListItemComponent,
    NgfDescriptionTermComponent,
    NgfDescriptionDetailsComponent,
    NgfLinkComponent,
    NgfTextComponent,
    NgfHrComponent
  ],
  exports: [
    NgfHeadingComponent,
    NgfParagraphComponent,
    NgfBlockquoteComponent,
    NgfImageComponent,
    NgfListComponent,
    NgfListItemComponent,
    NgfDescriptionTermComponent,
    NgfDescriptionDetailsComponent,
    NgfLinkComponent,
    NgfTextComponent,
    NgfHrComponent
  ]
})
export class NgfTypographyModule {}

