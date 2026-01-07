import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner-demo',
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
      <h1 class="text-4xl font-bold text-white mb-2">Spinner</h1>
      <p class="text-xl text-gray-400 mb-8">Use the spinner component to show a loading indicator.</p>

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
            The spinner component is used to display loading indicators. It supports multiple colors, sizes, and animation types.
          </p>
          
          <h2 class="text-2xl font-bold text-white mt-8 mb-4">Features</h2>
          <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Multiple color variants: blue, gray, green, red, yellow, purple, pink</li>
            <li>Size options: xs, sm, md, lg, xl</li>
            <li>Animation types: default (spin), pulse</li>
            <li>Optional text label</li>
            <li>Dark mode support</li>
          </ul>
        </div>

        <div class="space-y-12">
          <!-- Default Spinner -->
          <section id="default">
            <h2 class="text-2xl font-bold text-white mb-4">Default spinner</h2>
            <p class="text-gray-400 mb-4">Use the default spinner component to show loading states.</p>
            <app-demo-wrapper
              componentName="Default spinner"
              githubLink="https://github.com/themesberg/flowbite-angular/blob/main/projects/ng-flowbite/src/lib/components/spinner/spinner.component.ts"
            >
              <div class="flex flex-wrap gap-4">
                <ngf-spinner color="blue"></ngf-spinner>
                <ngf-spinner color="green"></ngf-spinner>
                <ngf-spinner color="red"></ngf-spinner>
                <ngf-spinner color="yellow"></ngf-spinner>
              </div>
            </app-demo-wrapper>
            <app-code-syntax-wrapper [code]="defaultCode" language="html"></app-code-syntax-wrapper>
          </section>

          <!-- Spinner Sizes -->
          <section id="sizes">
            <h2 class="text-2xl font-bold text-white mb-4">Spinner sizes</h2>
            <p class="text-gray-400 mb-4">Use the size prop to change the size of the spinner.</p>
            <app-demo-wrapper
              componentName="Spinner sizes"
              githubLink="https://github.com/themesberg/flowbite-angular/blob/main/projects/ng-flowbite/src/lib/components/spinner/spinner.component.ts"
            >
              <div class="flex flex-wrap items-center gap-4">
                <ngf-spinner size="xs"></ngf-spinner>
                <ngf-spinner size="sm"></ngf-spinner>
                <ngf-spinner size="md"></ngf-spinner>
                <ngf-spinner size="lg"></ngf-spinner>
                <ngf-spinner size="xl"></ngf-spinner>
              </div>
            </app-demo-wrapper>
            <app-code-syntax-wrapper [code]="sizesCode" language="html"></app-code-syntax-wrapper>
          </section>
        </div>
      </div>

      <!-- Examples Tab -->
      <div *ngIf="activeTab === 'examples'" class="space-y-12">
        <!-- Default Spinner -->
        <section id="default">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Default spinner</h2>
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
          <p class="text-gray-400 mb-4">Use the default spinner component to show loading states.</p>
          <app-demo-wrapper
            componentName="Default spinner"
            githubLink="https://github.com/themesberg/flowbite-angular/blob/main/projects/ng-flowbite/src/lib/components/spinner/spinner.component.ts"
          >
            <div class="flex flex-wrap gap-4">
              <ngf-spinner color="blue"></ngf-spinner>
              <ngf-spinner color="green"></ngf-spinner>
              <ngf-spinner color="red"></ngf-spinner>
              <ngf-spinner color="yellow"></ngf-spinner>
            </div>
          </app-demo-wrapper>
          <div *ngIf="showDefaultCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">spinner-default.html</span>
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

        <!-- Spinner Sizes -->
        <section id="sizes">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Spinner sizes</h2>
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
          <p class="text-gray-400 mb-4">Use the size prop to change the size of the spinner.</p>
          <app-demo-wrapper
            componentName="Spinner sizes"
            githubLink="https://github.com/themesberg/flowbite-angular/blob/main/projects/ng-flowbite/src/lib/components/spinner/spinner.component.ts"
          >
            <div class="flex flex-wrap items-center gap-4">
              <ngf-spinner size="xs"></ngf-spinner>
              <ngf-spinner size="sm"></ngf-spinner>
              <ngf-spinner size="md"></ngf-spinner>
              <ngf-spinner size="lg"></ngf-spinner>
              <ngf-spinner size="xl"></ngf-spinner>
            </div>
          </app-demo-wrapper>
          <div *ngIf="showSizesCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">spinner-sizes.html</span>
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
      </div>

      <!-- API Tab -->
      <div *ngIf="activeTab === 'api'" class="space-y-8">
        <section>
          <h2 class="text-2xl font-bold text-white mb-4">NgfSpinnerComponent</h2>
          <p class="text-gray-400 mb-6">A component for displaying loading indicators.</p>
          
          <h3 class="text-xl font-semibold text-white mb-3">Selector</h3>
          <div class="bg-gray-800 rounded-lg p-4 mb-6">
            <code class="text-blue-400">ngf-spinner</code>
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">size</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">'xs' | 'sm' | 'md' | 'lg' | 'xl'</td>
                  <td class="px-6 py-4 text-sm text-gray-300">'md'</td>
                  <td class="px-6 py-4 text-sm text-gray-300">The size of the spinner</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">color</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">'blue' | 'gray' | 'green' | 'red' | 'yellow' | 'purple' | 'pink'</td>
                  <td class="px-6 py-4 text-sm text-gray-300">'blue'</td>
                  <td class="px-6 py-4 text-sm text-gray-300">The color variant of the spinner</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">type</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">'default' | 'pulse'</td>
                  <td class="px-6 py-4 text-sm text-gray-300">'default'</td>
                  <td class="px-6 py-4 text-sm text-gray-300">The animation type of the spinner</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">showText</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-300">false</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Whether to show text label</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">text</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">string</td>
                  <td class="px-6 py-4 text-sm text-gray-300">'Loading...'</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Text to display when showText is true</td>
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
export class SpinnerDemoComponent {
  activeTab: 'overview' | 'examples' | 'api' = 'overview';
  showDefaultCode = false;
  showSizesCode = false;

  defaultCode = `<ngf-spinner color="blue"></ngf-spinner>
<ngf-spinner color="green"></ngf-spinner>
<ngf-spinner color="red"></ngf-spinner>
<ngf-spinner color="yellow"></ngf-spinner>`;

  sizesCode = `<ngf-spinner size="xs"></ngf-spinner>
<ngf-spinner size="sm"></ngf-spinner>
<ngf-spinner size="md"></ngf-spinner>
<ngf-spinner size="lg"></ngf-spinner>
<ngf-spinner size="xl"></ngf-spinner>`;

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
