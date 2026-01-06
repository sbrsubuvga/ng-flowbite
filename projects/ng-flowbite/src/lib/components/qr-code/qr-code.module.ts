import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgfQrCodeComponent } from './qr-code.component';

@NgModule({
  imports: [CommonModule, NgfQrCodeComponent],
  exports: [NgfQrCodeComponent]
})
export class NgfQrCodeModule {}

