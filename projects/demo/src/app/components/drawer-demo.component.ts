import { Component } from '@angular/core';
import { NgfDrawerService, NgfDrawerConfig, NgfActiveDrawer } from '@ng-flowbite/ng-flowbite';

@Component({
  selector: 'app-drawer-demo',
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
      <h1 class="text-4xl font-bold text-white mb-2">Drawer</h1>
      <p class="text-xl text-gray-400 mb-8">Use the drawer component to show a side panel for navigation or content.</p>

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
            The drawer component is a side panel that slides in from the edges of the screen. It's perfect for navigation menus, settings panels, or any additional content that needs to be accessible without navigating away from the current page.
          </p>
          
          <h2 class="text-2xl font-bold text-white mt-8 mb-4">Features</h2>
          <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Multiple positions: start (left), end (right), top, bottom</li>
            <li>Configurable backdrop with click-to-close option</li>
            <li>Keyboard support (ESC to close)</li>
            <li>Customizable width and height</li>
            <li>Animation support</li>
            <li>Service-based API for programmatic control</li>
          </ul>

          <h2 class="text-2xl font-bold text-white mt-8 mb-4">Basic Usage</h2>
          <p class="text-gray-300 leading-relaxed">
            The drawer is opened using the <code class="text-blue-400">NgfDrawerService</code>. You provide a component or template as content, and optionally configure the drawer's behavior.
          </p>
        </div>

        <div class="space-y-12">
          <!-- Default Drawer -->
          <section id="default">
            <h2 class="text-2xl font-bold text-white mb-4">Default drawer</h2>
            <p class="text-gray-400 mb-4">Use the drawer service to open side panels programmatically from the right side.</p>
            <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <ngf-button color="blue" (onClick)="openDrawer('end')">Open Drawer (Right)</ngf-button>
            </div>
            <app-code-example [code]="defaultCode"></app-code-example>
          </section>

          <!-- Drawer Positions -->
          <section id="positions">
            <h2 class="text-2xl font-bold text-white mb-4">Drawer positions</h2>
            <p class="text-gray-400 mb-4">Open drawers from different positions: start (left), end (right), top, or bottom.</p>
            <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <div class="flex flex-wrap gap-4">
                <ngf-button color="blue" (onClick)="openDrawer('start')">Open from Left</ngf-button>
                <ngf-button color="blue" (onClick)="openDrawer('end')">Open from Right</ngf-button>
                <ngf-button color="blue" (onClick)="openDrawer('top')">Open from Top</ngf-button>
                <ngf-button color="blue" (onClick)="openDrawer('bottom')">Open from Bottom</ngf-button>
              </div>
            </div>
            <app-code-example [code]="positionsCode"></app-code-example>
          </section>

          <!-- Backdrop Options -->
          <section id="backdrop">
            <h2 class="text-2xl font-bold text-white mb-4">Backdrop options</h2>
            <p class="text-gray-400 mb-4">Control whether the drawer can be closed by clicking the backdrop.</p>
            <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <div class="flex flex-wrap gap-4">
                <ngf-button color="blue" (onClick)="openDrawerWithBackdrop(true)">With Backdrop (Clickable)</ngf-button>
                <ngf-button color="blue" (onClick)="openDrawerWithBackdrop(false)">Without Backdrop</ngf-button>
              </div>
            </div>
            <app-code-example [code]="backdropCode"></app-code-example>
          </section>
        </div>
      </div>

      <!-- Examples Tab -->
      <div *ngIf="activeTab === 'examples'" class="space-y-12">
        <!-- Default Drawer -->
        <section id="default">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Default drawer</h2>
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
          <p class="text-gray-400 mb-4">Use the drawer service to open side panels programmatically from the right side.</p>
          <div *ngIf="!showDefaultCode" class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <ngf-button color="blue" (onClick)="openDrawer('end')">Open Drawer (Right)</ngf-button>
          </div>
          <div *ngIf="showDefaultCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">drawer-default.ts</span>
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

        <!-- Drawer Positions -->
        <section id="positions">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Drawer positions</h2>
            <button
              (click)="showPositionsCode = !showPositionsCode"
              [class.bg-blue-600]="showPositionsCode"
              [class.bg-gray-700]="!showPositionsCode"
              class="px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              Code
            </button>
          </div>
          <p class="text-gray-400 mb-4">Open drawers from different positions: start (left), end (right), top, or bottom.</p>
          <div *ngIf="!showPositionsCode" class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <div class="flex flex-wrap gap-4">
              <ngf-button color="blue" (onClick)="openDrawer('start')">Open from Left</ngf-button>
              <ngf-button color="blue" (onClick)="openDrawer('end')">Open from Right</ngf-button>
              <ngf-button color="blue" (onClick)="openDrawer('top')">Open from Top</ngf-button>
              <ngf-button color="blue" (onClick)="openDrawer('bottom')">Open from Bottom</ngf-button>
            </div>
          </div>
          <div *ngIf="showPositionsCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">drawer-positions.ts</span>
              <button
                (click)="copyToClipboard(positionsCode)"
                class="text-gray-400 hover:text-white transition-colors"
                title="Copy code"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </button>
            </div>
            <div class="p-4 overflow-x-auto">
              <pre class="text-sm text-gray-300 font-mono"><code [innerHTML]="formatCode(positionsCode)"></code></pre>
            </div>
          </div>
        </section>

        <!-- Backdrop Options -->
        <section id="backdrop">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Backdrop options</h2>
            <button
              (click)="showBackdropCode = !showBackdropCode"
              [class.bg-blue-600]="showBackdropCode"
              [class.bg-gray-700]="!showBackdropCode"
              class="px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              Code
            </button>
          </div>
          <p class="text-gray-400 mb-4">Control whether the drawer can be closed by clicking the backdrop.</p>
          <div *ngIf="!showBackdropCode" class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <div class="flex flex-wrap gap-4">
              <ngf-button color="blue" (onClick)="openDrawerWithBackdrop(true)">With Backdrop (Clickable)</ngf-button>
              <ngf-button color="blue" (onClick)="openDrawerWithBackdrop(false)">Without Backdrop</ngf-button>
            </div>
          </div>
          <div *ngIf="showBackdropCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">drawer-backdrop.ts</span>
              <button
                (click)="copyToClipboard(backdropCode)"
                class="text-gray-400 hover:text-white transition-colors"
                title="Copy code"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </button>
            </div>
            <div class="p-4 overflow-x-auto">
              <pre class="text-sm text-gray-300 font-mono"><code [innerHTML]="formatCode(backdropCode)"></code></pre>
            </div>
          </div>
        </section>
      </div>

      <!-- API Tab -->
      <div *ngIf="activeTab === 'api'" class="space-y-8">
        <!-- NgfDrawerService -->
        <section>
          <h2 class="text-2xl font-bold text-white mb-4">NgfDrawerService</h2>
          <p class="text-gray-400 mb-6">A service to open drawer panels programmatically.</p>
          
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
                  <td class="px-6 py-4 text-sm text-gray-300">content: Type&lt;T&gt; | TemplateRef&lt;T&gt;, config?: NgfDrawerConfig</td>
                  <td class="px-6 py-4 text-sm text-gray-300">NgfDrawerRef&lt;T&gt;</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Opens a drawer panel with the specified content and configuration</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">dismissAll()</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">reason?: any</td>
                  <td class="px-6 py-4 text-sm text-gray-300">void</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Dismisses all currently open drawer panels</td>
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
                  <td class="px-6 py-4 text-sm text-gray-300">NgfDrawerRef[]</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Returns the list of currently active drawer instances</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- NgfDrawerConfig -->
        <section>
          <h2 class="text-2xl font-bold text-white mb-4">NgfDrawerConfig</h2>
          <p class="text-gray-400 mb-6">Configuration options for drawer panels.</p>
          
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">position</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">'start' | 'end' | 'top' | 'bottom'</td>
                  <td class="px-6 py-4 text-sm text-gray-300">'end'</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Position of the drawer</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">backdrop</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">boolean | 'static'</td>
                  <td class="px-6 py-4 text-sm text-gray-300">true</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Whether the drawer can be closed by clicking the backdrop</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">keyboard</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-300">true</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Whether the drawer can be closed by pressing ESC</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">showCloseButton</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-300">true</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Whether to show the close button</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">width</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">string</td>
                  <td class="px-6 py-4 text-sm text-gray-300">'384px'</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Width of the drawer (for start/end positions)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">height</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">string</td>
                  <td class="px-6 py-4 text-sm text-gray-300">'auto'</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Height of the drawer (for top/bottom positions)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">animationDuration</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">number</td>
                  <td class="px-6 py-4 text-sm text-gray-300">300</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Animation duration in milliseconds</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- NgfDrawerRef -->
        <section>
          <h2 class="text-2xl font-bold text-white mb-4">NgfDrawerRef</h2>
          <p class="text-gray-400 mb-6">A reference to a newly opened drawer panel.</p>
          
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
                  <td class="px-6 py-4 text-sm text-gray-300">The instance of the component opened in the drawer</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">result</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">Promise&lt;any&gt;</td>
                  <td class="px-6 py-4 text-sm text-gray-300">A promise that resolves when the drawer is closed and rejects when dismissed</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">config</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">NgfDrawerConfig</td>
                  <td class="px-6 py-4 text-sm text-gray-300">The configuration used for this drawer</td>
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
                  <td class="px-6 py-4 text-sm text-gray-300">Closes the drawer with an optional result</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">dismiss()</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">reason?: any</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Dismisses the drawer with an optional reason</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- NgfActiveDrawer -->
        <section>
          <h2 class="text-2xl font-bold text-white mb-4">NgfActiveDrawer</h2>
          <p class="text-gray-400 mb-6">A service that can be injected into drawer content components to control the drawer instance.</p>
          
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
                  <td class="px-6 py-4 text-sm text-gray-300">Closes the drawer with an optional result</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">dismiss()</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">reason?: any</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Dismisses the drawer with an optional reason</td>
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
export class DrawerDemoComponent {
  activeTab: 'overview' | 'examples' | 'api' = 'overview';
  showDefaultCode = false;
  showPositionsCode = false;
  showBackdropCode = false;

  constructor(private drawerService: NgfDrawerService) {}

  openDrawer(position: 'start' | 'end' | 'top' | 'bottom' = 'end'): void {
    const config = new NgfDrawerConfig();
    config.position = position;
    const drawerRef = this.drawerService.open(DrawerContentComponent, config);
    if (drawerRef.componentInstance) {
      drawerRef.componentInstance.title = `Drawer from ${position}`;
      drawerRef.componentInstance.position = position;
    }
  }

  openDrawerWithBackdrop(backdrop: boolean): void {
    const config = new NgfDrawerConfig();
    config.position = 'end';
    config.backdrop = backdrop;
    const drawerRef = this.drawerService.open(DrawerContentComponent, config);
    if (drawerRef.componentInstance) {
      drawerRef.componentInstance.title = backdrop ? 'Drawer with Backdrop' : 'Drawer without Backdrop';
    }
  }

  defaultCode = `constructor(private drawerService: NgfDrawerService) {}

openDrawer() {
  const config = new NgfDrawerConfig();
  config.position = 'end';
  const drawerRef = this.drawerService.open(MyComponent, config);
}`;

  positionsCode = `// Open from different positions
openDrawer(position: 'start' | 'end' | 'top' | 'bottom') {
  const config = new NgfDrawerConfig();
  config.position = position;
  this.drawerService.open(MyComponent, config);
}`;

  backdropCode = `// Control backdrop behavior
const config = new NgfDrawerConfig();
config.backdrop = true; // or false to disable backdrop click
this.drawerService.open(MyComponent, config);`;

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
  selector: 'app-drawer-content',
  standalone: false,
  template: `
    <div class="p-6">
      <h3 class="text-xl font-semibold mb-4 text-white dark:text-white">{{ title }}</h3>
      <p class="mb-4 text-gray-700 dark:text-gray-300">This is drawer content. You can add any content here.</p>
      <p class="mb-4 text-gray-700 dark:text-gray-300">Position: {{ position }}</p>
      <div class="flex gap-4">
        <ngf-button color="blue" (onClick)="close()">Close</ngf-button>
        <ngf-button color="gray" [outline]="true" (onClick)="close()">Cancel</ngf-button>
      </div>
    </div>
  `,
  styles: []
})
export class DrawerContentComponent {
  title = '';
  position: 'start' | 'end' | 'top' | 'bottom' = 'end';
  
  constructor(public activeDrawer: NgfActiveDrawer) {}
  
  close(): void {
    this.activeDrawer.close('Closed');
  }
}
