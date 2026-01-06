import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgfGalleryComponent } from './gallery.component';

@NgModule({
  imports: [CommonModule, NgfGalleryComponent],
  exports: [NgfGalleryComponent]
})
export class NgfGalleryModule {}

