import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons-demo',
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
      <h1 class="text-4xl font-bold text-white mb-2">Button</h1>
      <p class="text-xl text-gray-400 mb-8">
        Use the button component inside forms, as links, social login, trigger actions and more with support for multiple sizes, colors, styles, and states.
      </p>

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
            The button component is a versatile element that can be used in forms, as links, for social login, to trigger actions, and more. It supports multiple sizes, colors, styles, and states to fit various design needs.
          </p>
          
          <h2 class="text-2xl font-bold text-white mt-8 mb-4">Features</h2>
          <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Multiple color variants: blue, gray, green, red, yellow, purple, pink</li>
            <li>Size options: xs, sm, md, lg, xl</li>
            <li>Outline and solid styles</li>
            <li>Disabled state support</li>
            <li>Pill and square shape options</li>
            <li>Full keyboard and screen reader support</li>
          </ul>
        </div>

        <div class="space-y-12">
          <!-- Default Button -->
          <section id="default">
            <h2 class="text-2xl font-bold text-white mb-4">Default button</h2>
            <p class="text-gray-400 mb-4">Use the default button styles with multiple colors to indicate an action or link within your website.</p>
            <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <div class="flex flex-wrap gap-4">
                <ngf-button color="blue">Blue</ngf-button>
                <ngf-button color="gray">Gray</ngf-button>
                <ngf-button color="green">Green</ngf-button>
                <ngf-button color="red">Red</ngf-button>
                <ngf-button color="yellow">Yellow</ngf-button>
                <ngf-button color="purple">Purple</ngf-button>
                <ngf-button color="pink">Pink</ngf-button>
              </div>
            </div>
            <app-code-example [code]="defaultCode"></app-code-example>
          </section>

          <!-- Outline Buttons -->
          <section id="outline">
            <h2 class="text-2xl font-bold text-white mb-4">Outline buttons</h2>
            <p class="text-gray-400 mb-4">Use the outline prop to show a button with an outline style.</p>
            <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <div class="flex flex-wrap gap-4">
                <ngf-button color="blue" [outline]="true">Blue</ngf-button>
                <ngf-button color="gray" [outline]="true">Gray</ngf-button>
                <ngf-button color="green" [outline]="true">Green</ngf-button>
                <ngf-button color="red" [outline]="true">Red</ngf-button>
                <ngf-button color="yellow" [outline]="true">Yellow</ngf-button>
                <ngf-button color="purple" [outline]="true">Purple</ngf-button>
                <ngf-button color="pink" [outline]="true">Pink</ngf-button>
              </div>
            </div>
            <app-code-example [code]="outlineCode"></app-code-example>
          </section>

          <!-- Button Sizes -->
          <section id="sizes">
            <h2 class="text-2xl font-bold text-white mb-4">Button sizes</h2>
            <p class="text-gray-400 mb-4">Use the size prop to change the size of the button.</p>
            <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <div class="flex flex-wrap items-center gap-4">
                <ngf-button color="blue" size="xs">Extra small</ngf-button>
                <ngf-button color="blue" size="sm">Small</ngf-button>
                <ngf-button color="blue" size="md">Base</ngf-button>
                <ngf-button color="blue" size="lg">Large</ngf-button>
                <ngf-button color="blue" size="xl">Extra large</ngf-button>
              </div>
            </div>
            <app-code-example [code]="sizesCode"></app-code-example>
          </section>

          <!-- Disabled State -->
          <section id="disabled">
            <h2 class="text-2xl font-bold text-white mb-4">Disabled state</h2>
            <p class="text-gray-400 mb-4">Use the disabled prop to disable a button.</p>
            <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <div class="flex flex-wrap gap-4">
                <ngf-button color="blue" [disabled]="true">Disabled</ngf-button>
                <ngf-button color="gray" [disabled]="true">Disabled</ngf-button>
              </div>
            </div>
            <app-code-example [code]="disabledCode"></app-code-example>
          </section>
        </div>
      </div>

      <!-- Examples Tab -->
      <div *ngIf="activeTab === 'examples'" class="space-y-12">
        <!-- Default Button -->
        <section id="default">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Default button</h2>
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
          <p class="text-gray-400 mb-4">Use the default button styles with multiple colors to indicate an action or link within your website.</p>
          <div *ngIf="!showDefaultCode" class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <div class="flex flex-wrap gap-4">
              <ngf-button color="blue">Blue</ngf-button>
              <ngf-button color="gray">Gray</ngf-button>
              <ngf-button color="green">Green</ngf-button>
              <ngf-button color="red">Red</ngf-button>
              <ngf-button color="yellow">Yellow</ngf-button>
              <ngf-button color="purple">Purple</ngf-button>
              <ngf-button color="pink">Pink</ngf-button>
            </div>
          </div>
          <div *ngIf="showDefaultCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">button-default.html</span>
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

        <!-- Outline Buttons -->
        <section id="outline">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Outline buttons</h2>
            <button
              (click)="showOutlineCode = !showOutlineCode"
              [class.bg-blue-600]="showOutlineCode"
              [class.bg-gray-700]="!showOutlineCode"
              class="px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              Code
            </button>
          </div>
          <p class="text-gray-400 mb-4">Use the outline prop to show a button with an outline style.</p>
          <div *ngIf="!showOutlineCode" class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <div class="flex flex-wrap gap-4">
              <ngf-button color="blue" [outline]="true">Blue</ngf-button>
              <ngf-button color="gray" [outline]="true">Gray</ngf-button>
              <ngf-button color="green" [outline]="true">Green</ngf-button>
              <ngf-button color="red" [outline]="true">Red</ngf-button>
              <ngf-button color="yellow" [outline]="true">Yellow</ngf-button>
              <ngf-button color="purple" [outline]="true">Purple</ngf-button>
              <ngf-button color="pink" [outline]="true">Pink</ngf-button>
            </div>
          </div>
          <div *ngIf="showOutlineCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">button-outline.html</span>
              <button
                (click)="copyToClipboard(outlineCode)"
                class="text-gray-400 hover:text-white transition-colors"
                title="Copy code"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </button>
            </div>
            <div class="p-4 overflow-x-auto">
              <pre class="text-sm text-gray-300 font-mono"><code [innerHTML]="formatCode(outlineCode)"></code></pre>
            </div>
          </div>
        </section>

        <!-- Button Sizes -->
        <section id="sizes">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Button sizes</h2>
            <button
              (click)="showSizesCode = !showSizesCode"
              [class.bg-blue-600]="showSizesCode"
              [class.bg-gray-700]="!showSizesCode"
              class="px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              Code
            </button>
          </div>
          <p class="text-gray-400 mb-4">Use the size prop to change the size of the button.</p>
          <div *ngIf="!showSizesCode" class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <div class="flex flex-wrap items-center gap-4">
              <ngf-button color="blue" size="xs">Extra small</ngf-button>
              <ngf-button color="blue" size="sm">Small</ngf-button>
              <ngf-button color="blue" size="md">Base</ngf-button>
              <ngf-button color="blue" size="lg">Large</ngf-button>
              <ngf-button color="blue" size="xl">Extra large</ngf-button>
            </div>
          </div>
          <div *ngIf="showSizesCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">button-sizes.html</span>
              <button
                (click)="copyToClipboard(sizesCode)"
                class="text-gray-400 hover:text-white transition-colors"
                title="Copy code"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </button>
            </div>
            <div class="p-4 overflow-x-auto">
              <pre class="text-sm text-gray-300 font-mono"><code [innerHTML]="formatCode(sizesCode)"></code></pre>
            </div>
          </div>
        </section>

        <!-- Disabled State -->
        <section id="disabled">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Disabled state</h2>
            <button
              (click)="showDisabledCode = !showDisabledCode"
              [class.bg-blue-600]="showDisabledCode"
              [class.bg-gray-700]="!showDisabledCode"
              class="px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              Code
            </button>
          </div>
          <p class="text-gray-400 mb-4">Use the disabled prop to disable a button.</p>
          <div *ngIf="!showDisabledCode" class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <div class="flex flex-wrap gap-4">
              <ngf-button color="blue" [disabled]="true">Disabled</ngf-button>
              <ngf-button color="gray" [disabled]="true">Disabled</ngf-button>
            </div>
          </div>
          <div *ngIf="showDisabledCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">button-disabled.html</span>
              <button
                (click)="copyToClipboard(disabledCode)"
                class="text-gray-400 hover:text-white transition-colors"
                title="Copy code"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </button>
            </div>
            <div class="p-4 overflow-x-auto">
              <pre class="text-sm text-gray-300 font-mono"><code [innerHTML]="formatCode(disabledCode)"></code></pre>
            </div>
          </div>
        </section>
      </div>

      <!-- API Tab -->
      <div *ngIf="activeTab === 'api'" class="space-y-8">
        <section>
          <h2 class="text-2xl font-bold text-white mb-4">NgfButtonComponent</h2>
          <p class="text-gray-400 mb-6">A versatile button component with multiple styles, sizes, and states.</p>
          
          <h3 class="text-xl font-semibold text-white mb-3">Selector</h3>
          <div class="bg-gray-800 rounded-lg p-4 mb-6">
            <code class="text-blue-400">ngf-button</code>
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">color</code></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">'blue' | 'gray' | 'green' | 'red' | 'yellow' | 'purple' | 'pink'</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">'blue'</td>
                  <td class="px-6 py-4 text-sm text-gray-300">The color variant of the button</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">size</code></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">'xs' | 'sm' | 'md' | 'lg' | 'xl'</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">'md'</td>
                  <td class="px-6 py-4 text-sm text-gray-300">The size of the button</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">outline</code></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">boolean</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">false</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Whether to use outline style</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">disabled</code></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">boolean</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">false</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Whether the button is disabled</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">type</code></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">'button' | 'submit' | 'reset'</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">'button'</td>
                  <td class="px-6 py-4 text-sm text-gray-300">The HTML button type</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">pill</code></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">boolean</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">false</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Whether to use pill shape (rounded-full)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">square</code></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">boolean</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">false</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Whether to use square shape (no rounding)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3">Outputs</h3>
          <div class="overflow-x-auto mb-6">
            <table class="min-w-full divide-y divide-gray-700">
              <thead class="bg-gray-800">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Event</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Type</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody class="bg-gray-900 divide-y divide-gray-700">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">onClick</code></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">EventEmitter&lt;MouseEvent&gt;</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Emitted when the button is clicked</td>
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
export class ButtonsDemoComponent {
  activeTab: 'overview' | 'examples' | 'api' = 'overview';
  showDefaultCode = false;
  showOutlineCode = false;
  showSizesCode = false;
  showDisabledCode = false;

  defaultCode = `<ngf-button color="blue">Blue</ngf-button>
<ngf-button color="gray">Gray</ngf-button>
<ngf-button color="green">Green</ngf-button>
<ngf-button color="red">Red</ngf-button>
<ngf-button color="yellow">Yellow</ngf-button>
<ngf-button color="purple">Purple</ngf-button>
<ngf-button color="pink">Pink</ngf-button>`;

  outlineCode = `<ngf-button color="blue" [outline]="true">Blue</ngf-button>
<ngf-button color="gray" [outline]="true">Gray</ngf-button>
<ngf-button color="green" [outline]="true">Green</ngf-button>
<ngf-button color="red" [outline]="true">Red</ngf-button>
<ngf-button color="yellow" [outline]="true">Yellow</ngf-button>
<ngf-button color="purple" [outline]="true">Purple</ngf-button>
<ngf-button color="pink" [outline]="true">Pink</ngf-button>`;

  sizesCode = `<ngf-button color="blue" size="xs">Extra small</ngf-button>
<ngf-button color="blue" size="sm">Small</ngf-button>
<ngf-button color="blue" size="md">Base</ngf-button>
<ngf-button color="blue" size="lg">Large</ngf-button>
<ngf-button color="blue" size="xl">Extra large</ngf-button>`;

  disabledCode = `<ngf-button color="blue" [disabled]="true">Disabled</ngf-button>
<ngf-button color="gray" [disabled]="true">Disabled</ngf-button>`;

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
