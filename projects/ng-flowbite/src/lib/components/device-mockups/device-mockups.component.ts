import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngf-device-mockup',
  template: `
    <div [class]="mockupClasses">
      <div [class]="screenClasses">
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class NgfDeviceMockupComponent {
  @Input() type: 'iphone' | 'ipad' | 'android' | 'macbook' | 'imac' = 'iphone';
  @Input() orientation: 'portrait' | 'landscape' = 'portrait';

  get mockupClasses(): string {
    const base = 'mx-auto border-gray-800 dark:border-gray-700 bg-gray-800 dark:bg-gray-700 rounded-[2.5rem]';
    const typeClasses = {
      iphone: 'max-w-xs border-[14px]',
      ipad: this.orientation === 'portrait' ? 'max-w-sm border-[16px]' : 'max-w-md border-[16px]',
      android: 'max-w-xs border-[14px]',
      macbook: 'max-w-4xl border-[14px] rounded-[2rem]',
      imac: 'max-w-5xl border-[16px] rounded-[2rem]'
    };
    return `${base} ${typeClasses[this.type]}`.trim();
  }

  get screenClasses(): string {
    const base = 'overflow-hidden rounded-[2rem] bg-white dark:bg-gray-800';
    const typeClasses = {
      iphone: 'rounded-[2rem]',
      ipad: 'rounded-[2rem]',
      android: 'rounded-[2rem]',
      macbook: 'rounded-[1.5rem]',
      imac: 'rounded-[1.5rem]'
    };
    return `${base} ${typeClasses[this.type]}`.trim();
  }
}

