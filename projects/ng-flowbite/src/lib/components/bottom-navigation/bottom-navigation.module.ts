import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgfBottomNavigationComponent, NgfBottomNavItemComponent } from './bottom-navigation.component';

@NgModule({
  imports: [CommonModule, NgfBottomNavigationComponent, NgfBottomNavItemComponent],
  exports: [NgfBottomNavigationComponent, NgfBottomNavItemComponent]
})
export class NgfBottomNavigationModule {}

