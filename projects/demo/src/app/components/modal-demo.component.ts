import { Component } from '@angular/core';
import { NgfModalService, NgfActiveModal } from '@ng-flowbite/ng-flowbite';

@Component({
  selector: 'app-modal-demo',
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
      <h1 class="text-4xl font-bold text-white mb-2">Modal</h1>
      <p class="text-xl text-gray-400 mb-8">Use the modal component to show dialogs and notifications to your users.</p>

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
            The modal component is a dialog box that appears on top of the current page. It's perfect for displaying important information, confirming actions, or gathering user input without navigating away from the current page.
          </p>
          
          <h2 class="text-2xl font-bold text-white mt-8 mb-4">Features</h2>
          <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Service-based API for programmatic control</li>
            <li>Configurable backdrop with click-to-close option</li>
            <li>Keyboard support (ESC to close)</li>
            <li>Multiple size options: sm, md, lg, xl, 2xl, full</li>
            <li>Centered or top-aligned positioning</li>
            <li>Animation support</li>
          </ul>

          <h2 class="text-2xl font-bold text-white mt-8 mb-4">Basic Usage</h2>
          <p class="text-gray-300 leading-relaxed">
            The modal is opened using the <code class="text-blue-400">NgfModalService</code>. You provide a component or template as content, and optionally configure the modal's behavior.
          </p>
        </div>

        <div class="space-y-12">
          <!-- Default Modal -->
          <section id="default">
            <h2 class="text-2xl font-bold text-white mb-4">Default modal</h2>
            <p class="text-gray-400 mb-4">Use the modal service to open modal dialogs programmatically.</p>
            <app-demo-wrapper
              componentName="Default modal"
              githubLink="https://github.com/themesberg/flowbite-angular/blob/main/projects/ng-flowbite/src/lib/components/modal/modal.component.ts"
            >
              <ngf-button color="blue" (onClick)="openModal()">Open Modal</ngf-button>
            </app-demo-wrapper>
            <app-code-syntax-wrapper [code]="defaultCode" language="html"></app-code-syntax-wrapper>
          </section>
        </div>
      </div>

      <!-- Examples Tab -->
      <div *ngIf="activeTab === 'examples'" class="space-y-12">
        <!-- Default Modal -->
        <section id="default">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Default modal</h2>
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
          <p class="text-gray-400 mb-4">Use the modal service to open modal dialogs programmatically.</p>
          <app-demo-wrapper
            componentName="Default modal"
            githubLink="https://github.com/themesberg/flowbite-angular/blob/main/projects/ng-flowbite/src/lib/components/modal/modal.component.ts"
          >
            <ngf-button color="blue" (onClick)="openModal()">Open Modal</ngf-button>
          </app-demo-wrapper>
          <div *ngIf="showDefaultCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">modal-default.ts</span>
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
        <!-- NgfModalService -->
        <section>
          <h2 class="text-2xl font-bold text-white mb-4">NgfModalService</h2>
          <p class="text-gray-400 mb-6">A service to open modal windows programmatically.</p>
          
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">open()</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">content: Type&lt;T&gt; | TemplateRef&lt;T&gt;, config?: NgfModalConfig</td>
                  <td class="px-6 py-4 text-sm text-gray-300">NgfModalRef&lt;T&gt;</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Opens a modal window with the specified content and configuration</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">dismissAll()</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">reason?: any</td>
                  <td class="px-6 py-4 text-sm text-gray-300">void</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Dismisses all currently open modal windows</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3">Properties</h3>
          <div class="overflow-x-auto mb-6">
            <table class="min-w-full divide-y divide-gray-700">
              <thead class="bg-gray-800">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Property</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Type</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody class="bg-gray-900 divide-y divide-gray-700">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">activeInstances</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">NgfModalRef[]</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Returns the list of currently active modal instances</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- NgfModalConfig -->
        <section>
          <h2 class="text-2xl font-bold text-white mb-4">NgfModalConfig</h2>
          <p class="text-gray-400 mb-6">Configuration options for modal windows.</p>
          
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">centered</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-300">false</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Whether the modal is centered vertically</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">size</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'</td>
                  <td class="px-6 py-4 text-sm text-gray-300">'md'</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Size of the modal</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">backdrop</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">boolean | 'static'</td>
                  <td class="px-6 py-4 text-sm text-gray-300">true</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Whether the modal can be closed by clicking the backdrop</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">keyboard</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-300">true</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Whether the modal can be closed by pressing ESC</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">showCloseButton</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-300">true</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Whether to show the close button</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- NgfModalRef -->
        <section>
          <h2 class="text-2xl font-bold text-white mb-4">NgfModalRef</h2>
          <p class="text-gray-400 mb-6">A reference to a newly opened modal.</p>
          
          <h3 class="text-xl font-semibold text-white mb-3">Properties</h3>
          <div class="overflow-x-auto mb-6">
            <table class="min-w-full divide-y divide-gray-700">
              <thead class="bg-gray-800">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Property</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Type</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody class="bg-gray-900 divide-y divide-gray-700">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">componentInstance</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">T</td>
                  <td class="px-6 py-4 text-sm text-gray-300">The instance of the component opened in the modal</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">result</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">Promise&lt;any&gt;</td>
                  <td class="px-6 py-4 text-sm text-gray-300">A promise that resolves when the modal is closed and rejects when dismissed</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3">Methods</h3>
          <div class="overflow-x-auto mb-6">
            <table class="min-w-full divide-y divide-gray-700">
              <thead class="bg-gray-800">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Method</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Parameters</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody class="bg-gray-900 divide-y divide-gray-700">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">close()</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">result?: any</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Closes the modal with an optional result</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">dismiss()</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">reason?: any</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Dismisses the modal with an optional reason</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- NgfActiveModal -->
        <section>
          <h2 class="text-2xl font-bold text-white mb-4">NgfActiveModal</h2>
          <p class="text-gray-400 mb-6">A service that can be injected into modal content components to control the modal instance.</p>
          
          <h3 class="text-xl font-semibold text-white mb-3">Methods</h3>
          <div class="overflow-x-auto mb-6">
            <table class="min-w-full divide-y divide-gray-700">
              <thead class="bg-gray-800">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Method</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Parameters</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody class="bg-gray-900 divide-y divide-gray-700">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">close()</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">result?: any</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Closes the modal with an optional result</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">dismiss()</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">reason?: any</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Dismisses the modal with an optional reason</td>
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
export class ModalDemoComponent {
  activeTab: 'overview' | 'examples' | 'api' = 'overview';
  showDefaultCode = false;

  constructor(private modalService: NgfModalService) {}

  openModal(): void {
    const modalRef = this.modalService.open(ModalContentComponent);
    if (modalRef.componentInstance) {
      modalRef.componentInstance.title = 'Modal Title';
      modalRef.componentInstance.content = 'This is modal content';
    }
  }

  defaultCode = `constructor(private modalService: NgfModalService) {}

openModal() {
  const modalRef = this.modalService.open(MyComponent);
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

@Component({
  selector: 'app-modal-content',
  standalone: false,
  template: `
    <div class="p-6">
      <h3 class="text-xl font-semibold mb-4 text-white">{{ title }}</h3>
      <p class="mb-4 text-gray-300">{{ content }}</p>
      <ngf-button color="blue" (onClick)="close()">Close</ngf-button>
    </div>
  `,
  styles: []
})
export class ModalContentComponent {
  title = '';
  content = '';
  constructor(public activeModal: NgfActiveModal) {}
  close(): void {
    this.activeModal.close('Closed');
  }
}
