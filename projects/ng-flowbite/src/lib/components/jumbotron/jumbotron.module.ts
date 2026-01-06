import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgfJumbotronComponent } from './jumbotron.component';

@NgModule({
  imports: [CommonModule, NgfJumbotronComponent],
  exports: [NgfJumbotronComponent]
})
export class NgfJumbotronModule {}

