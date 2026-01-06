import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngf-avatar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [ngClass]="getAvatarClasses()">
      <img
        *ngIf="imgSrc"
        [src]="imgSrc"
        [alt]="alt || ''"
        [ngClass]="getImgClasses()"
      />
      <div *ngIf="!imgSrc && placeholder" [ngClass]="getPlaceholderClasses()">
        {{ placeholder }}
      </div>
      <div *ngIf="status" [ngClass]="getStatusClasses()" [attr.title]="status"></div>
    </div>
  `,
  styles: [`
    :host {
      display: inline-block;
    }
  `]
})
export class NgfAvatarComponent {
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() rounded = true;
  @Input() bordered = false;
  @Input() imgSrc?: string;
  @Input() alt?: string;
  @Input() placeholder?: string;
  @Input() status?: 'online' | 'offline' | 'away' | 'busy';

  getAvatarClasses(): { [key: string]: boolean } {
    return {
      'relative': true,
      'rounded-full': this.rounded,
      'rounded': !this.rounded,
      'ring-2': this.bordered,
      'ring-gray-300': this.bordered,
      'dark:ring-gray-500': this.bordered
    };
  }

  getImgClasses(): { [key: string]: boolean } {
    const sizeClasses = this._getSizeClasses();
    return {
      ...sizeClasses,
      'rounded-full': this.rounded,
      'rounded': !this.rounded,
      'object-cover': true
    };
  }

  getPlaceholderClasses(): { [key: string]: boolean } {
    const sizeClasses = this._getPlaceholderSizeClasses();
    return {
      ...sizeClasses,
      'rounded-full': this.rounded,
      'rounded': !this.rounded,
      'inline-flex': true,
      'items-center': true,
      'justify-center': true,
      'text-gray-500': true,
      'bg-gray-100': true,
      'dark:bg-gray-600': true,
      'dark:text-gray-300': true
    };
  }

  getStatusClasses(): { [key: string]: boolean } {
    const sizeClasses = this._getStatusSizeClasses();
    const statusColors = this._getStatusColorClasses();
    return {
      'absolute': true,
      'bottom-0': true,
      'left-0': true,
      'rounded-full': true,
      'border-2': true,
      'border-white': true,
      'dark:border-gray-800': true,
      ...sizeClasses,
      ...statusColors
    };
  }

  private _getSizeClasses(): { [key: string]: boolean } {
    const sizes: { [key: string]: { [key: string]: boolean } } = {
      xs: { 'w-6': true, 'h-6': true },
      sm: { 'w-8': true, 'h-8': true },
      md: { 'w-10': true, 'h-10': true },
      lg: { 'w-20': true, 'h-20': true },
      xl: { 'w-36': true, 'h-36': true }
    };
    return sizes[this.size] || sizes['md'];
  }

  private _getPlaceholderSizeClasses(): { [key: string]: boolean } {
    const sizes: { [key: string]: { [key: string]: boolean } } = {
      xs: { 'w-6': true, 'h-6': true, 'text-xs': true },
      sm: { 'w-8': true, 'h-8': true, 'text-sm': true },
      md: { 'w-10': true, 'h-10': true, 'text-base': true },
      lg: { 'w-20': true, 'h-20': true, 'text-2xl': true },
      xl: { 'w-36': true, 'h-36': true, 'text-4xl': true }
    };
    return sizes[this.size] || sizes['md'];
  }

  private _getStatusSizeClasses(): { [key: string]: boolean } {
    const sizes: { [key: string]: { [key: string]: boolean } } = {
      xs: { 'w-2': true, 'h-2': true },
      sm: { 'w-2.5': true, 'h-2.5': true },
      md: { 'w-3': true, 'h-3': true },
      lg: { 'w-3.5': true, 'h-3.5': true },
      xl: { 'w-4': true, 'h-4': true }
    };
    return sizes[this.size] || sizes['md'];
  }

  private _getStatusColorClasses(): { [key: string]: boolean } {
    const colors: { [key: string]: { [key: string]: boolean } } = {
      online: { 'bg-green-400': true },
      offline: { 'bg-gray-400': true },
      away: { 'bg-yellow-400': true },
      busy: { 'bg-red-400': true }
    };
    return colors[this.status || 'online'] || colors['online'];
  }
}

