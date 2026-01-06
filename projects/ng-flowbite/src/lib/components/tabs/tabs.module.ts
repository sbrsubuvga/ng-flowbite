import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgfTabsComponent, NgfTabComponent, NgfTabContentComponent } from './tabs.component';

@NgModule({
  imports: [CommonModule, NgfTabsComponent, NgfTabComponent, NgfTabContentComponent],
  exports: [NgfTabsComponent, NgfTabComponent, NgfTabContentComponent]
})
export class NgfTabsModule {}

