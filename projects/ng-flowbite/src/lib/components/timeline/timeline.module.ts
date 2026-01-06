import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgfTimelineComponent, NgfTimelineItemComponent } from './timeline.component';

@NgModule({
  imports: [CommonModule, NgfTimelineComponent, NgfTimelineItemComponent],
  exports: [NgfTimelineComponent, NgfTimelineItemComponent]
})
export class NgfTimelineModule {}

