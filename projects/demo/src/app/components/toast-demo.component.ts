import { Component } from '@angular/core';
import { NgfToastService } from '@ng-flowbite/ng-flowbite';

@Component({
  selector: 'app-toast-demo',
  standalone: false,
  template: `
    <div>
      <!-- Info Badge -->
      <div class="mb-4">
        <span class="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-900/50 border border-blue-700 rounded-lg text-sm text-blue-300">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
          </svg>
          Requires Flowbite JS >
        </span>
      </div>

      <!-- Main Heading -->
      <h1 class="text-4xl font-bold text-white mb-2">Toast</h1>
      <p class="text-xl text-gray-400 mb-8">Use the toast component to show notifications to your users.</p>

      <!-- Tabs -->
      <div class="border-b border-gray-700 mb-6">
        <nav class="-mb-px flex space-x-8">
          <button
            (click)="activeTab = 'overview'"
            [class]="activeTab === 'overview' ? 'border-blue-500 text-blue-400' : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300'"
            class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors"
          >
            Overview
          </button>
          <button
            (click)="activeTab = 'examples'"
            [class]="activeTab === 'examples' ? 'border-blue-500 text-blue-400' : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300'"
            class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors"
          >
            Examples
          </button>
          <button
            (click)="activeTab = 'api'"
            [class]="activeTab === 'api' ? 'border-blue-500 text-blue-400' : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300'"
            class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors"
          >
            API
          </button>
        </nav>
      </div>

      <!-- Overview Tab -->
      <div *ngIf="activeTab === 'overview'" class="space-y-6">
        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed">
            The toast component is used to display temporary notifications to users. It supports multiple types (success, error, warning, info) and can be positioned in different corners of the screen.
          </p>
          
          <h2 class="text-2xl font-bold text-white mt-8 mb-4">Features</h2>
          <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Multiple types: success, error, warning, info</li>
            <li>Configurable duration (auto-dismiss)</li>
            <li>Multiple positions: top-right, top-left, bottom-right, bottom-left</li>
            <li>Manual dismiss option</li>
            <li>Service-based API for programmatic control</li>
            <li>Dark mode support</li>
          </ul>
        </div>

        <div class="space-y-12">
          <!-- Default Toast -->
          <section id="default">
            <h2 class="text-2xl font-bold text-white mb-4">Default toast</h2>
            <p class="text-gray-400 mb-4">Use the toast service to show notifications programmatically.</p>
            <app-demo-wrapper
              componentName="Default toast"
              githubLink="https://github.com/themesberg/flowbite-angular/blob/main/projects/ng-flowbite/src/lib/components/toast/toast.component.ts"
            >
              <div class="flex flex-wrap gap-4">
                <ngf-button color="blue" (onClick)="showSuccess()">Success</ngf-button>
                <ngf-button color="red" (onClick)="showError()">Error</ngf-button>
                <ngf-button color="yellow" (onClick)="showWarning()">Warning</ngf-button>
                <ngf-button color="blue" (onClick)="showInfo()">Info</ngf-button>
              </div>
            </app-demo-wrapper>
            <app-code-syntax-wrapper [code]="defaultCode" language="html"></app-code-syntax-wrapper>
          </section>
        </div>
      </div>

      <!-- Examples Tab -->
      <div *ngIf="activeTab === 'examples'" class="space-y-12">
        <!-- Default Toast -->
        <section id="default">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Default toast</h2>
            <button
              (click)="showDefaultCode = !showDefaultCode"
              [class.bg-blue-600]="showDefaultCode"
              [class.bg-gray-700]="!showDefaultCode"
              class="px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              Code
            </button>
          </div>
          <p class="text-gray-400 mb-4">Use the toast service to show notifications programmatically.</p>
          <app-demo-wrapper
            componentName="Default toast"
            githubLink="https://github.com/themesberg/flowbite-angular/blob/main/projects/ng-flowbite/src/lib/components/toast/toast.component.ts"
          >
            <div class="flex flex-wrap gap-4">
              <ngf-button color="blue" (onClick)="showSuccess()">Success</ngf-button>
              <ngf-button color="red" (onClick)="showError()">Error</ngf-button>
              <ngf-button color="yellow" (onClick)="showWarning()">Warning</ngf-button>
              <ngf-button color="blue" (onClick)="showInfo()">Info</ngf-button>
            </div>
          </app-demo-wrapper>
          <div *ngIf="showDefaultCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">toast-default.ts</span>
              <button
                (click)="copyToClipboard(defaultCode)"
                class="text-gray-400 hover:text-white transition-colors"
                title="Copy code"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </button>
            </div>
            <div class="p-4 overflow-x-auto">
              <pre class="text-sm text-gray-300 font-mono"><code [innerHTML]="formatCode(defaultCode)"></code></pre>
            </div>
          </div>
        </section>
      </div>

      <!-- API Tab -->
      <div *ngIf="activeTab === 'api'" class="space-y-8">
        <!-- NgfToastService -->
        <section>
          <h2 class="text-2xl font-bold text-white mb-4">NgfToastService</h2>
          <p class="text-gray-400 mb-6">A service to show toast notifications programmatically.</p>
          
          <h3 class="text-xl font-semibold text-white mb-3">Methods</h3>
          <div class="overflow-x-auto mb-6">
            <table class="min-w-full divide-y divide-gray-700">
              <thead class="bg-gray-800">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Method</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Parameters</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Returns</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody class="bg-gray-900 divide-y divide-gray-700">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">show()</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">message: string, config?: NgfToastConfig</td>
                  <td class="px-6 py-4 text-sm text-gray-300">NgfToastRef</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Shows a toast notification with the specified message and configuration</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">success()</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">message: string, config?: NgfToastConfig</td>
                  <td class="px-6 py-4 text-sm text-gray-300">NgfToastRef</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Shows a success toast notification</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">error()</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">message: string, config?: NgfToastConfig</td>
                  <td class="px-6 py-4 text-sm text-gray-300">NgfToastRef</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Shows an error toast notification</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">warning()</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">message: string, config?: NgfToastConfig</td>
                  <td class="px-6 py-4 text-sm text-gray-300">NgfToastRef</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Shows a warning toast notification</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">info()</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">message: string, config?: NgfToastConfig</td>
                  <td class="px-6 py-4 text-sm text-gray-300">NgfToastRef</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Shows an info toast notification</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- NgfToastConfig -->
        <section>
          <h2 class="text-2xl font-bold text-white mb-4">NgfToastConfig</h2>
          <p class="text-gray-400 mb-6">Configuration options for toast notifications.</p>
          
          <h3 class="text-xl font-semibold text-white mb-3">Properties</h3>
          <div class="overflow-x-auto mb-6">
            <table class="min-w-full divide-y divide-gray-700">
              <thead class="bg-gray-800">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Property</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Type</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Default</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody class="bg-gray-900 divide-y divide-gray-700">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">color</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">'blue' | 'gray' | 'green' | 'red' | 'yellow' | 'purple' | 'pink'</td>
                  <td class="px-6 py-4 text-sm text-gray-300">'blue'</td>
                  <td class="px-6 py-4 text-sm text-gray-300">The color variant of the toast</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">duration</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">number</td>
                  <td class="px-6 py-4 text-sm text-gray-300">5000</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Auto-dismiss duration in milliseconds (0 or undefined means no auto-dismiss)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">position</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'</td>
                  <td class="px-6 py-4 text-sm text-gray-300">'top-right'</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Position of the toast on the screen</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  `,
  styles: []
})
export class ToastDemoComponent {
  activeTab: 'overview' | 'examples' | 'api' = 'overview';
  showDefaultCode = false;

  constructor(private toastService: NgfToastService) {}

  showSuccess(): void {
    this.toastService.success('Success! Your action was completed.');
  }

  showError(): void {
    this.toastService.error('Error! Something went wrong.');
  }

  showWarning(): void {
    this.toastService.warning('Warning! Please check your input.');
  }

  showInfo(): void {
    this.toastService.info('Info: This is an informational message.');
  }

  defaultCode = `constructor(private toastService: NgfToastService) {}

showToast() {
  this.toastService.success('Success message');
  this.toastService.error('Error message');
  this.toastService.warning('Warning message');
  this.toastService.info('Info message');
}`;

  formatCode(code: string): string {
    return code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  copyToClipboard(code: string): void {
    navigator.clipboard.writeText(code).then(() => {
      console.log('Code copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy code:', err);
    });
  }
}
