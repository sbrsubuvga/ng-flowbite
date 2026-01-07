import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demo-wrapper',
  standalone: false,
  template: `
    <div class="flex flex-col rounded-t-xl border border-gray-200 dark:border-gray-700">
      <!-- Toolbar -->
      <div class="flex flex-row items-center justify-between rounded-t-xl border-b border-b-gray-200 bg-gray-50 p-4 dark:border-b-gray-700 dark:bg-gray-800 dark:text-gray-400">
        
        <!-- Left: GitHub Link -->
        <div class="flex items-center">
          <a [href]="githubLink" target="_blank" rel="noopener noreferrer" 
             class="flex items-center justify-center p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 focus:outline-none transition-colors duration-200">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.18 22 16.425 22 12.017 22 6.484 17.522 2 12 2Z" clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">View on GitHub</span>
          </a>
        </div>

        <!-- Center: Device Toggles -->
        <div class="hidden lg:flex items-center gap-2 bg-gray-100 dark:bg-gray-700 p-1 rounded-lg">
          <button type="button" (click)="setDevice('desktop')" 
                  [class.bg-white]="activeDevice === 'desktop'"
                  [class.dark:bg-gray-600]="activeDevice === 'desktop'"
                  [class.text-gray-900]="activeDevice === 'desktop'"
                  [class.dark:text-white]="activeDevice === 'desktop'"
                  [class.shadow-sm]="activeDevice === 'desktop'"
                  class="p-2 text-gray-500 rounded-md hover:text-gray-900 dark:hover:text-white focus:outline-none transition-all duration-200">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span class="sr-only">Desktop view</span>
          </button>
          
          <button type="button" (click)="setDevice('tablet')"
                  [class.bg-white]="activeDevice === 'tablet'"
                  [class.dark:bg-gray-600]="activeDevice === 'tablet'"
                  [class.text-gray-900]="activeDevice === 'tablet'"
                  [class.dark:text-white]="activeDevice === 'tablet'"
                  [class.shadow-sm]="activeDevice === 'tablet'"
                  class="p-2 text-gray-500 rounded-md hover:text-gray-900 dark:hover:text-white focus:outline-none transition-all duration-200">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span class="sr-only">Tablet view</span>
          </button>
          
          <button type="button" (click)="setDevice('mobile')" 
                  [class.bg-white]="activeDevice === 'mobile'"
                  [class.dark:bg-gray-600]="activeDevice === 'mobile'"
                  [class.text-gray-900]="activeDevice === 'mobile'"
                  [class.dark:text-white]="activeDevice === 'mobile'"
                  [class.shadow-sm]="activeDevice === 'mobile'"
                  class="p-2 text-gray-500 rounded-md hover:text-gray-900 dark:hover:text-white focus:outline-none transition-all duration-200">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span class="sr-only">Mobile view</span>
          </button>
        </div>

        <!-- Right: Theme Toggle -->
        <div class="flex items-center">
          <button type="button" (click)="toggleTheme()" 
                  class="p-2 text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 focus:outline-none transition-colors duration-200">
            <svg *ngIf="!isDarkMode" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <svg *ngIf="isDarkMode" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span class="sr-only">Toggle theme</span>
          </button>
        </div>
      </div>

      <!-- Preview Area -->
      <div class="relative bg-gray-50 dark:bg-gray-900 border-x border-b border-gray-200 dark:border-gray-700 rounded-b-xl overflow-hidden min-h-[400px] flex justify-center items-start pt-8 pb-8 transition-colors duration-300">
         <div [class]="getContainerClasses()" class="transition-all duration-300 ease-in-out">
             <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 w-full" 
                  [class.p-6]="padding"
                  [class.dark]="isDarkMode"
                  style="transform: translate(0)">
                <ng-content></ng-content>
             </div>
         </div>
      </div>
    </div>
  `,
  styles: []
})
export class DemoWrapperComponent {
  @Input() componentName = '';
  @Input() githubLink = '';
  @Input() padding = true;

  activeDevice: 'desktop' | 'tablet' | 'mobile' = 'desktop';
  isDarkMode = false;

  setDevice(device: 'desktop' | 'tablet' | 'mobile') {
    this.activeDevice = device;
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }

  getContainerClasses(): string {
    const baseClasses = 'w-full mx-auto px-4';
    switch (this.activeDevice) {
      case 'mobile':
        return `${baseClasses} max-w-sm`;
      case 'tablet':
        return `${baseClasses} max-w-3xl`;
      case 'desktop':
      default:
        return `${baseClasses} max-w-full`;
    }
  }
}
