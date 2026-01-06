import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgfModalService } from './modal.service';
import { NgfActiveModal } from './active-modal.service';
import { NgfModalWindowComponent } from './modal-window.component';

@NgModule({
  imports: [CommonModule, NgfModalWindowComponent],
  providers: [NgfModalService, NgfActiveModal],
  exports: [NgfModalWindowComponent]
})
export class NgfModalModule {}

