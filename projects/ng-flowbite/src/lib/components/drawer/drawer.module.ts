import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgfDrawerService } from './drawer.service';
import { NgfActiveDrawer } from './active-drawer.service';
import { NgfDrawerWindowComponent } from './drawer-window.component';

@NgModule({
  imports: [CommonModule, NgfDrawerWindowComponent],
  providers: [NgfDrawerService, NgfActiveDrawer],
  exports: [NgfDrawerWindowComponent]
})
export class NgfDrawerModule {}

