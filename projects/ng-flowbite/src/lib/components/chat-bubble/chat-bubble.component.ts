import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngf-chat-bubble',
  template: `
    <div [class]="bubbleWrapperClasses">
      <div [class]="bubbleClasses">
        <p [class]="textClasses">
          <ng-content></ng-content>
        </p>
        <span [class]="timeClasses">{{ time }}</span>
      </div>
    </div>
  `
})
export class NgfChatBubbleComponent {
  @Input() position: 'start' | 'end' = 'start';
  @Input() time?: string;
  @Input() color: 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'pink' | 'gray' = 'blue';

  get bubbleWrapperClasses(): string {
    const base = 'flex items-end gap-2.5';
    const positionClass = this.position === 'end' ? 'justify-end' : 'justify-start';
    return `${base} ${positionClass}`.trim();
  }

  get bubbleClasses(): string {
    const base = 'flex flex-col max-w-[320px] leading-1.5';
    const positionClass = this.position === 'end' ? 'order-1' : 'order-2';
    const colorClasses = this._getColorClasses();
    return `${base} ${positionClass} ${colorClasses}`.trim();
  }

  get textClasses(): string {
    return 'px-4 py-2 rounded-lg rounded-tl-none';
  }

  get timeClasses(): string {
    const base = 'text-xs font-normal';
    const positionClass = this.position === 'end' ? 'text-right' : 'text-left';
    return `${base} ${positionClass} text-gray-500 dark:text-gray-400`.trim();
  }

  private _getColorClasses(): string {
    const colors = {
      blue: 'bg-blue-600 text-white',
      green: 'bg-green-600 text-white',
      red: 'bg-red-600 text-white',
      yellow: 'bg-yellow-400 text-gray-900',
      purple: 'bg-purple-600 text-white',
      pink: 'bg-pink-600 text-white',
      gray: 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white'
    };
    return colors[this.color];
  }
}

@Component({
  selector: 'ngf-chat',
  template: `
    <div [class]="chatClasses">
      <ng-content></ng-content>
    </div>
  `
})
export class NgfChatComponent {
  @Input() space: 'none' | 'tight' | 'normal' | 'loose' = 'normal';

  get chatClasses(): string {
    const base = 'space-y-4';
    const spacingClasses = {
      none: 'space-y-0',
      tight: 'space-y-2',
      normal: 'space-y-4',
      loose: 'space-y-6'
    };
    return spacingClasses[this.space];
  }
}

