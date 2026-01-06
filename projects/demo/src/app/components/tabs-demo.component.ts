import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs-demo',
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
      <h1 class="text-4xl font-bold text-white mb-2">Tabs</h1>
      <p class="text-xl text-gray-400 mb-8">Use the tabs component to organize content into multiple sections.</p>

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
            The tabs component is used to organize content into multiple sections. It consists of tab buttons and corresponding content panels that can be shown or hidden.
          </p>
          
          <h2 class="text-2xl font-bold text-white mt-8 mb-4">Features</h2>
          <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Multiple tab support</li>
            <li>Active tab highlighting</li>
            <li>Disabled tab support</li>
            <li>Pill and underline styles</li>
            <li>Content projection for flexible layouts</li>
            <li>Accessible with ARIA attributes</li>
            <li>Dark mode support</li>
          </ul>

          <h2 class="text-2xl font-bold text-white mt-8 mb-4">Components</h2>
          <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li><code class="text-blue-400">ngf-tabs</code> - Main tabs container</li>
            <li><code class="text-blue-400">ngf-tab</code> - Individual tab button</li>
            <li><code class="text-blue-400">ngf-tab-content</code> - Tab content panel</li>
          </ul>
        </div>

        <div class="space-y-12">
          <!-- Default Tabs -->
          <section id="default">
            <h2 class="text-2xl font-bold text-white mb-4">Default tabs</h2>
            <p class="text-gray-400 mb-4">Use the default tabs component to organize content.</p>
            <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <ngf-tabs>
                <ngf-tab [tabId]="'tab1'" [contentId]="'content1'" [active]="tabActiveTab === 'tab1'" (click)="setActiveTab('tab1')">Profile</ngf-tab>
                <ngf-tab [tabId]="'tab2'" [contentId]="'content2'" [active]="tabActiveTab === 'tab2'" (click)="setActiveTab('tab2')">Dashboard</ngf-tab>
                <ngf-tab [tabId]="'tab3'" [contentId]="'content3'" [active]="tabActiveTab === 'tab3'" (click)="setActiveTab('tab3')">Settings</ngf-tab>
                <div ngfTabContent>
                  <div *ngIf="tabActiveTab === 'tab1'" class="p-4 text-gray-300">Profile content goes here.</div>
                  <div *ngIf="tabActiveTab === 'tab2'" class="p-4 text-gray-300">Dashboard content goes here.</div>
                  <div *ngIf="tabActiveTab === 'tab3'" class="p-4 text-gray-300">Settings content goes here.</div>
                </div>
              </ngf-tabs>
            </div>
            <app-code-example [code]="defaultCode"></app-code-example>
          </section>
        </div>
      </div>

      <!-- Examples Tab -->
      <div *ngIf="activeTab === 'examples'" class="space-y-12">
        <!-- Default Tabs -->
        <section id="default">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Default tabs</h2>
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
          <p class="text-gray-400 mb-4">Use the default tabs component to organize content.</p>
          <div *ngIf="!showDefaultCode" class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <ngf-tabs>
              <ngf-tab [tabId]="'tab1'" [contentId]="'content1'" [active]="tabActiveTab === 'tab1'" (click)="setActiveTab('tab1')">Profile</ngf-tab>
              <ngf-tab [tabId]="'tab2'" [contentId]="'content2'" [active]="tabActiveTab === 'tab2'" (click)="setActiveTab('tab2')">Dashboard</ngf-tab>
              <ngf-tab [tabId]="'tab3'" [contentId]="'content3'" [active]="tabActiveTab === 'tab3'" (click)="setActiveTab('tab3')">Settings</ngf-tab>
              <div ngfTabContent>
                <div *ngIf="tabActiveTab === 'tab1'" class="p-4 text-gray-300">Profile content goes here.</div>
                <div *ngIf="tabActiveTab === 'tab2'" class="p-4 text-gray-300">Dashboard content goes here.</div>
                <div *ngIf="tabActiveTab === 'tab3'" class="p-4 text-gray-300">Settings content goes here.</div>
              </div>
            </ngf-tabs>
          </div>
          <div *ngIf="showDefaultCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">tabs-default.html</span>
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
        <!-- NgfTabsComponent -->
        <section>
          <h2 class="text-2xl font-bold text-white mb-4">NgfTabsComponent</h2>
          <p class="text-gray-400 mb-6">Main tabs container component.</p>
          
          <h3 class="text-xl font-semibold text-white mb-3">Selector</h3>
          <div class="bg-gray-800 rounded-lg p-4 mb-6">
            <code class="text-blue-400">ngf-tabs</code>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3">Inputs</h3>
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">ariaLabel</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">string</td>
                  <td class="px-6 py-4 text-sm text-gray-300">ARIA label for the tabs container</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">activeTabId</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">string</td>
                  <td class="px-6 py-4 text-sm text-gray-300">ID of the currently active tab</td>
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">tabChange</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">EventEmitter&lt;string&gt;</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Emitted when the active tab changes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- NgfTabComponent -->
        <section>
          <h2 class="text-2xl font-bold text-white mb-4">NgfTabComponent</h2>
          <p class="text-gray-400 mb-6">Individual tab button component.</p>
          
          <h3 class="text-xl font-semibold text-white mb-3">Selector</h3>
          <div class="bg-gray-800 rounded-lg p-4 mb-6">
            <code class="text-blue-400">ngf-tab</code>
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">tabId</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">string</td>
                  <td class="px-6 py-4 text-sm text-gray-300">-</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Unique identifier for the tab</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">contentId</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">string</td>
                  <td class="px-6 py-4 text-sm text-gray-300">-</td>
                  <td class="px-6 py-4 text-sm text-gray-300">ID of the associated content panel</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">active</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-300">false</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Whether the tab is active</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">disabled</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-300">false</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Whether the tab is disabled</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">pill</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-300">false</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Whether to use pill style</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">underline</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-300">true</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Whether to show underline</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- NgfTabContentComponent -->
        <section>
          <h2 class="text-2xl font-bold text-white mb-4">NgfTabContentComponent</h2>
          <p class="text-gray-400 mb-6">Tab content panel component.</p>
          
          <h3 class="text-xl font-semibold text-white mb-3">Selector</h3>
          <div class="bg-gray-800 rounded-lg p-4 mb-6">
            <code class="text-blue-400">ngf-tab-content</code>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3">Inputs</h3>
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">contentId</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">string</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Unique identifier for the content panel</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">tabId</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">string</td>
                  <td class="px-6 py-4 text-sm text-gray-300">ID of the associated tab button</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">isActive</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Whether the content panel is active</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3">Content Projection</h3>
          <p class="text-gray-300 leading-relaxed mb-4">
            Use <code class="text-blue-400">ngfTabContent</code> directive to mark content that should be displayed in tabs.
          </p>
        </section>
      </div>
    </div>
  `,
  styles: []
})
export class TabsDemoComponent {
  activeTab: 'overview' | 'examples' | 'api' = 'overview';
  showDefaultCode = false;
  tabActiveTab = 'tab1';

  setActiveTab(tab: string): void {
    this.tabActiveTab = tab;
  }

  defaultCode = `<ngf-tabs>
  <ngf-tab [tabId]="'tab1'" [contentId]="'content1'" [active]="activeTab === 'tab1'" (click)="setActiveTab('tab1')">Profile</ngf-tab>
  <ngf-tab [tabId]="'tab2'" [contentId]="'content2'" [active]="activeTab === 'tab2'" (click)="setActiveTab('tab2')">Dashboard</ngf-tab>
  <ngf-tab [tabId]="'tab3'" [contentId]="'content3'" [active]="activeTab === 'tab3'" (click)="setActiveTab('tab3')">Settings</ngf-tab>
  <div ngfTabContent>
    <div *ngIf="activeTab === 'tab1'">Profile content</div>
    <div *ngIf="activeTab === 'tab2'">Dashboard content</div>
    <div *ngIf="activeTab === 'tab3'">Settings content</div>
  </div>
</ngf-tabs>`;

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
