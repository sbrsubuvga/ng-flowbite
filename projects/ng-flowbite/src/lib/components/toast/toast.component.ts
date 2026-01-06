import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgfToastConfig } from './toast-config';

@Component({
  selector: 'ngf-toast',
  template: `
    <div
      [id]="toastId"
      [class]="toastClasses"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="flex items-center">
        <div class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" [class]="iconBgClasses">
          <svg
            [class]="iconClasses"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path [attr.d]="iconPath"></path>
          </svg>
        </div>
        <div class="ms-3 text-sm font-normal">{{ message }}</div>
        <button
          type="button"
          class="ms-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex h-8 w-8 items-center justify-center"
          [class]="closeButtonClasses"
          (click)="onClose.emit()"
          aria-label="Close"
        >
          <span class="sr-only">Close</span>
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
        </button>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      animation: slideIn 0.3s ease-out;
    }
    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  `]
})
export class NgfToastComponent implements OnInit {
  @Input() message!: string;
  @Input() config!: NgfToastConfig;
  @Input() toastId!: string;
  @Output() onClose = new EventEmitter<void>();

  get toastClasses(): string {
    const base = 'flex items-center w-full max-w-xs p-4 mb-4 rounded-lg shadow';
    const colorClasses = this._getColorClasses();
    return `${base} ${colorClasses}`.trim();
  }

  get iconClasses(): string {
    return `h-5 w-5 ${this._getIconColorClasses()}`;
  }

  get iconBgClasses(): string {
    return this._getIconBgClasses();
  }

  get closeButtonClasses(): string {
    return this._getCloseButtonClasses();
  }

  get iconPath(): string {
    const paths = {
      success: 'M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z',
      error: 'M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z',
      warning: 'M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z',
      info: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
    };
    const type = this.config.color === 'green' ? 'success' : 
                 this.config.color === 'red' ? 'error' :
                 this.config.color === 'yellow' ? 'warning' : 'info';
    return paths[type];
  }

  ngOnInit(): void {
    // Component initialization
  }

  private _getColorClasses(): string {
    const colors = {
      blue: 'text-blue-500 bg-blue-100 dark:bg-blue-800 dark:text-blue-200',
      gray: 'text-gray-500 bg-gray-100 dark:bg-gray-800 dark:text-gray-200',
      green: 'text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200',
      red: 'text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200',
      yellow: 'text-yellow-500 bg-yellow-100 dark:bg-yellow-800 dark:text-yellow-200',
      purple: 'text-purple-500 bg-purple-100 dark:bg-purple-800 dark:text-purple-200',
      pink: 'text-pink-500 bg-pink-100 dark:bg-pink-800 dark:text-pink-200'
    };
    return colors[this.config.color];
  }

  private _getIconColorClasses(): string {
    const colors = {
      blue: 'text-blue-600 dark:text-blue-300',
      gray: 'text-gray-600 dark:text-gray-300',
      green: 'text-green-600 dark:text-green-300',
      red: 'text-red-600 dark:text-red-300',
      yellow: 'text-yellow-600 dark:text-yellow-300',
      purple: 'text-purple-600 dark:text-purple-300',
      pink: 'text-pink-600 dark:text-pink-300'
    };
    return colors[this.config.color];
  }

  private _getIconBgClasses(): string {
    const colors = {
      blue: 'bg-blue-100 text-blue-500 dark:bg-blue-800 dark:text-blue-200',
      gray: 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-200',
      green: 'bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200',
      red: 'bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200',
      yellow: 'bg-yellow-100 text-yellow-500 dark:bg-yellow-800 dark:text-yellow-200',
      purple: 'bg-purple-100 text-purple-500 dark:bg-purple-800 dark:text-purple-200',
      pink: 'bg-pink-100 text-pink-500 dark:bg-pink-800 dark:text-pink-200'
    };
    return colors[this.config.color];
  }

  private _getCloseButtonClasses(): string {
    return 'text-gray-400 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white';
  }
}

