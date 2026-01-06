import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgfNavbarComponent, NgfNavbarItemComponent } from './navbar.component';

@NgModule({
  imports: [CommonModule, RouterModule, NgfNavbarComponent, NgfNavbarItemComponent],
  exports: [NgfNavbarComponent, NgfNavbarItemComponent]
})
export class NgfNavbarModule {}

