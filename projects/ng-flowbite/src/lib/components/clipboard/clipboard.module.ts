import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgfClipboardComponent } from './clipboard.component';

@NgModule({
  imports: [CommonModule, NgfClipboardComponent],
  exports: [NgfClipboardComponent]
})
export class NgfClipboardModule {}

