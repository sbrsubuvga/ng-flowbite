import { Component } from '@angular/core';

@Component({
  selector: 'app-breadcrumb-demo',
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
      <h1 class="text-4xl font-bold text-white mb-2">Breadcrumb</h1>
      <p class="text-xl text-gray-400 mb-8">Use the breadcrumb component to show the current page location within a navigational hierarchy.</p>

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
            The breadcrumb component is used to display the current page location within a navigational hierarchy. It helps users understand where they are and navigate back to parent pages.
          </p>
          
          <h2 class="text-2xl font-bold text-white mt-8 mb-4">Features</h2>
          <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Home icon for the first item</li>
            <li>Separator icons between items</li>
            <li>Support for href and routerLink navigation</li>
            <li>Current page styling (non-clickable)</li>
            <li>Solid breadcrumb variant with background colors</li>
            <li>Multiple color variants</li>
            <li>Accessible with ARIA attributes</li>
            <li>Dark mode support</li>
          </ul>
        </div>

        <div class="space-y-12">
          <!-- Default Breadcrumb -->
          <section id="default">
            <h2 class="text-2xl font-bold text-white mb-4">Default breadcrumb</h2>
            <p class="text-gray-400 mb-4">Use the default breadcrumb component to show navigation hierarchy.</p>
            <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <ngf-breadcrumb [items]="breadcrumbItems"></ngf-breadcrumb>
            </div>
            <app-code-example [code]="defaultCode"></app-code-example>
          </section>

          <!-- Solid Breadcrumb -->
          <section id="solid">
            <h2 class="text-2xl font-bold text-white mb-4">Solid breadcrumb</h2>
            <p class="text-gray-400 mb-4">Breadcrumb with solid background and border.</p>
            <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <ngf-breadcrumb [items]="breadcrumbItems" [solid]="true" color="default"></ngf-breadcrumb>
            </div>
            <app-code-example [code]="solidCode"></app-code-example>
          </section>

          <!-- Solid Breadcrumb with Colors -->
          <section id="solid-colors">
            <h2 class="text-2xl font-bold text-white mb-4">Solid breadcrumb with colors</h2>
            <p class="text-gray-400 mb-4">Solid breadcrumbs with different color variants.</p>
            <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700 space-y-4">
              <ngf-breadcrumb [items]="breadcrumbItems" [solid]="true" color="info"></ngf-breadcrumb>
              <ngf-breadcrumb [items]="breadcrumbItems" [solid]="true" color="success"></ngf-breadcrumb>
              <ngf-breadcrumb [items]="breadcrumbItems" [solid]="true" color="warning"></ngf-breadcrumb>
              <ngf-breadcrumb [items]="breadcrumbItems" [solid]="true" color="failure"></ngf-breadcrumb>
            </div>
            <app-code-example [code]="solidColorsCode"></app-code-example>
          </section>
        </div>
      </div>

      <!-- Examples Tab -->
      <div *ngIf="activeTab === 'examples'" class="space-y-12">
        <!-- Default Breadcrumb -->
        <section id="default">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Default breadcrumb</h2>
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
          <p class="text-gray-400 mb-4">Use the default breadcrumb component to show navigation hierarchy.</p>
          <div *ngIf="!showDefaultCode" class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <ngf-breadcrumb [items]="breadcrumbItems"></ngf-breadcrumb>
          </div>
          <div *ngIf="showDefaultCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">breadcrumb-default.html</span>
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

        <!-- Solid Breadcrumb -->
        <section id="solid">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Solid breadcrumb</h2>
            <button
              (click)="showSolidCode = !showSolidCode"
              [class.bg-blue-600]="showSolidCode"
              [class.bg-gray-700]="!showSolidCode"
              class="px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              Code
            </button>
          </div>
          <p class="text-gray-400 mb-4">Breadcrumb with solid background and border.</p>
          <div *ngIf="!showSolidCode" class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <ngf-breadcrumb [items]="breadcrumbItems" [solid]="true" color="default"></ngf-breadcrumb>
          </div>
          <div *ngIf="showSolidCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">breadcrumb-solid.html</span>
              <button
                (click)="copyToClipboard(solidCode)"
                class="text-gray-400 hover:text-white transition-colors"
                title="Copy code"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </button>
            </div>
            <div class="p-4 overflow-x-auto">
              <pre class="text-sm text-gray-300 font-mono"><code [innerHTML]="formatCode(solidCode)"></code></pre>
            </div>
          </div>
        </section>

        <!-- Solid Breadcrumb with Colors -->
        <section id="solid-colors">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Solid breadcrumb with colors</h2>
            <button
              (click)="showSolidColorsCode = !showSolidColorsCode"
              [class.bg-blue-600]="showSolidColorsCode"
              [class.bg-gray-700]="!showSolidColorsCode"
              class="px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              Code
            </button>
          </div>
          <p class="text-gray-400 mb-4">Solid breadcrumbs with different color variants.</p>
          <div *ngIf="!showSolidColorsCode" class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700 space-y-4">
            <ngf-breadcrumb [items]="breadcrumbItems" [solid]="true" color="info"></ngf-breadcrumb>
            <ngf-breadcrumb [items]="breadcrumbItems" [solid]="true" color="success"></ngf-breadcrumb>
            <ngf-breadcrumb [items]="breadcrumbItems" [solid]="true" color="warning"></ngf-breadcrumb>
            <ngf-breadcrumb [items]="breadcrumbItems" [solid]="true" color="failure"></ngf-breadcrumb>
          </div>
          <div *ngIf="showSolidColorsCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">breadcrumb-solid-colors.html</span>
              <button
                (click)="copyToClipboard(solidColorsCode)"
                class="text-gray-400 hover:text-white transition-colors"
                title="Copy code"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </button>
            </div>
            <div class="p-4 overflow-x-auto">
              <pre class="text-sm text-gray-300 font-mono"><code [innerHTML]="formatCode(solidColorsCode)"></code></pre>
            </div>
          </div>
        </section>
      </div>

      <!-- API Tab -->
      <div *ngIf="activeTab === 'api'" class="space-y-8">
        <section>
          <h2 class="text-2xl font-bold text-white mb-4">NgfBreadcrumbComponent</h2>
          <p class="text-gray-400 mb-6">A component for displaying navigation hierarchy.</p>
          
          <h3 class="text-xl font-semibold text-white mb-3">Selector</h3>
          <div class="bg-gray-800 rounded-lg p-4 mb-6">
            <code class="text-blue-400">ngf-breadcrumb</code>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3">Inputs</h3>
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">items</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">BreadcrumbItem[]</td>
                  <td class="px-6 py-4 text-sm text-gray-300">[]</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Array of breadcrumb items</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">color</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">'default' | 'info' | 'failure' | 'success' | 'warning' | 'primary'</td>
                  <td class="px-6 py-4 text-sm text-gray-300">'default'</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Color variant of the breadcrumb (affects link colors and solid background)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">solid</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-300">false</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Whether to show solid background with border</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3">BreadcrumbItem Interface</h3>
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">label</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">string</td>
                  <td class="px-6 py-4 text-sm text-gray-300">The display text for the breadcrumb item</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">href</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">string</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Optional href link for the item</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">routerLink</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">string</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Optional Angular router link for the item</td>
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
export class BreadcrumbDemoComponent {
  activeTab: 'overview' | 'examples' | 'api' = 'overview';
  showDefaultCode = false;
  showSolidCode = false;
  showSolidColorsCode = false;
  breadcrumbItems = [
    { label: 'Home', routerLink: '/' },
    { label: 'Components', routerLink: '/components' },
    { label: 'Breadcrumb' }
  ];

  defaultCode = `<ngf-breadcrumb [items]="breadcrumbItems"></ngf-breadcrumb>

breadcrumbItems = [
  { label: 'Home', routerLink: '/' },
  { label: 'Components', routerLink: '/components' },
  { label: 'Breadcrumb' }
];`;

  solidCode = `<ngf-breadcrumb [items]="breadcrumbItems" [solid]="true" color="default"></ngf-breadcrumb>`;

  solidColorsCode = `<ngf-breadcrumb [items]="breadcrumbItems" [solid]="true" color="info"></ngf-breadcrumb>
<ngf-breadcrumb [items]="breadcrumbItems" [solid]="true" color="success"></ngf-breadcrumb>
<ngf-breadcrumb [items]="breadcrumbItems" [solid]="true" color="warning"></ngf-breadcrumb>
<ngf-breadcrumb [items]="breadcrumbItems" [solid]="true" color="failure"></ngf-breadcrumb>`;

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
