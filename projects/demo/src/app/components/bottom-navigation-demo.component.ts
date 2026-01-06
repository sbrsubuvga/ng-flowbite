import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-navigation-demo',
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
      <h1 class="text-4xl font-bold text-white mb-2">Bottom Navigation</h1>
      <p class="text-xl text-gray-400 mb-8">Use the bottom navigation component to show navigation items at the bottom of the screen, typically on mobile devices.</p>

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
            The bottom navigation component is used to display navigation items at the bottom of the screen, typically on mobile devices. It supports icons, labels, badges, and active states.
          </p>
          
          <h2 class="text-2xl font-bold text-white mt-8 mb-4">Features</h2>
          <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Icon and label support</li>
            <li>Active state indication</li>
            <li>Badge support for notifications</li>
            <li>Fixed position at bottom of screen</li>
            <li>Mobile-friendly design</li>
            <li>Dark mode support</li>
            <li>Accessible with ARIA attributes</li>
          </ul>
        </div>

        <div class="space-y-12">
          <!-- Default Bottom Navigation -->
          <section id="default">
            <h2 class="text-2xl font-bold text-white mb-4">Default bottom navigation</h2>
            <p class="text-gray-400 mb-4">Use the default bottom navigation component to show navigation items.</p>
            <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700 relative" style="min-height: 100px;">
              <ngf-bottom-navigation>
                <ngf-bottom-nav-item [active]="true" label="Home" [icon]="homeIcon"></ngf-bottom-nav-item>
                <ngf-bottom-nav-item label="Settings" [icon]="settingsIcon"></ngf-bottom-nav-item>
                <ngf-bottom-nav-item label="Profile" [icon]="userIcon"></ngf-bottom-nav-item>
              </ngf-bottom-navigation>
            </div>
            <app-code-example [code]="defaultCode"></app-code-example>
          </section>

          <!-- Bottom Navigation with Badges -->
          <section id="badges">
            <h2 class="text-2xl font-bold text-white mb-4">Bottom navigation with badges</h2>
            <p class="text-gray-400 mb-4">Add badges to navigation items to show notifications or counts.</p>
            <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700 relative" style="min-height: 100px;">
              <ngf-bottom-navigation>
                <ngf-bottom-nav-item [active]="true" label="Home" [icon]="homeIcon"></ngf-bottom-nav-item>
                <ngf-bottom-nav-item label="Messages" [icon]="messageIcon" badge="5"></ngf-bottom-nav-item>
                <ngf-bottom-nav-item label="Notifications" [icon]="bellIcon" badge="12"></ngf-bottom-nav-item>
                <ngf-bottom-nav-item label="Profile" [icon]="userIcon"></ngf-bottom-nav-item>
              </ngf-bottom-navigation>
            </div>
            <app-code-example [code]="badgesCode"></app-code-example>
          </section>
        </div>
      </div>

      <!-- Examples Tab -->
      <div *ngIf="activeTab === 'examples'" class="space-y-12">
        <!-- Default Bottom Navigation -->
        <section id="default">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Default bottom navigation</h2>
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
          <p class="text-gray-400 mb-4">Use the default bottom navigation component to show navigation items.</p>
          <div *ngIf="!showDefaultCode" class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700 relative" style="min-height: 100px;">
            <ngf-bottom-navigation>
              <ngf-bottom-nav-item [active]="true" label="Home" [icon]="homeIcon"></ngf-bottom-nav-item>
              <ngf-bottom-nav-item label="Settings" [icon]="settingsIcon"></ngf-bottom-nav-item>
              <ngf-bottom-nav-item label="Profile" [icon]="userIcon"></ngf-bottom-nav-item>
            </ngf-bottom-navigation>
          </div>
          <div *ngIf="showDefaultCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">bottom-navigation-default.html</span>
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

        <!-- Bottom Navigation with Badges -->
        <section id="badges">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Bottom navigation with badges</h2>
            <button
              (click)="showBadgesCode = !showBadgesCode"
              [class.bg-blue-600]="showBadgesCode"
              [class.bg-gray-700]="!showBadgesCode"
              class="px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              Code
            </button>
          </div>
          <p class="text-gray-400 mb-4">Add badges to navigation items to show notifications or counts.</p>
          <div *ngIf="!showBadgesCode" class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700 relative" style="min-height: 100px;">
            <ngf-bottom-navigation>
              <ngf-bottom-nav-item [active]="true" label="Home" [icon]="homeIcon"></ngf-bottom-nav-item>
              <ngf-bottom-nav-item label="Messages" [icon]="messageIcon" badge="5"></ngf-bottom-nav-item>
              <ngf-bottom-nav-item label="Notifications" [icon]="bellIcon" badge="12"></ngf-bottom-nav-item>
              <ngf-bottom-nav-item label="Profile" [icon]="userIcon"></ngf-bottom-nav-item>
            </ngf-bottom-navigation>
          </div>
          <div *ngIf="showBadgesCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">bottom-navigation-badges.html</span>
              <button
                (click)="copyToClipboard(badgesCode)"
                class="text-gray-400 hover:text-white transition-colors"
                title="Copy code"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </button>
            </div>
            <div class="p-4 overflow-x-auto">
              <pre class="text-sm text-gray-300 font-mono"><code [innerHTML]="formatCode(badgesCode)"></code></pre>
            </div>
          </div>
        </section>
      </div>

      <!-- API Tab -->
      <div *ngIf="activeTab === 'api'" class="space-y-8">
        <!-- NgfBottomNavigationComponent -->
        <section>
          <h2 class="text-2xl font-bold text-white mb-4">NgfBottomNavigationComponent</h2>
          <p class="text-gray-400 mb-6">Bottom navigation container component.</p>
          
          <h3 class="text-xl font-semibold text-white mb-3">Selector</h3>
          <div class="bg-gray-800 rounded-lg p-4 mb-6">
            <code class="text-blue-400">ngf-bottom-navigation</code>
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">navigationId</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">string</td>
                  <td class="px-6 py-4 text-sm text-gray-300">auto-generated</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Unique identifier for the navigation</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">fixed</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-300">true</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Whether the navigation is fixed at the bottom</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- NgfBottomNavItemComponent -->
        <section>
          <h2 class="text-2xl font-bold text-white mb-4">NgfBottomNavItemComponent</h2>
          <p class="text-gray-400 mb-6">Bottom navigation item component.</p>
          
          <h3 class="text-xl font-semibold text-white mb-3">Selector</h3>
          <div class="bg-gray-800 rounded-lg p-4 mb-6">
            <code class="text-blue-400">ngf-bottom-nav-item</code>
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">label</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">string</td>
                  <td class="px-6 py-4 text-sm text-gray-300">-</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Label text for the navigation item</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">icon</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">string</td>
                  <td class="px-6 py-4 text-sm text-gray-300">-</td>
                  <td class="px-6 py-4 text-sm text-gray-300">SVG path data for the icon</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">badge</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">string | number</td>
                  <td class="px-6 py-4 text-sm text-gray-300">-</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Badge value to display (notification count)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">active</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-300">false</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Whether the item is active</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">routerLink</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">string</td>
                  <td class="px-6 py-4 text-sm text-gray-300">-</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Angular router link for the item</td>
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
                  <td class="px-6 py-4 text-sm text-gray-300">EventEmitter&lt;void&gt;</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Emitted when the item is clicked</td>
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
export class BottomNavigationDemoComponent {
  activeTab: 'overview' | 'examples' | 'api' = 'overview';
  showDefaultCode = false;
  showBadgesCode = false;

  // SVG icon paths
  homeIcon = 'M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z';
  settingsIcon = 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z';
  userIcon = 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z';
  messageIcon = 'M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z';
  bellIcon = 'M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z';

  defaultCode = `<ngf-bottom-navigation>
  <ngf-bottom-nav-item [active]="true" label="Home" [icon]="homeIcon"></ngf-bottom-nav-item>
  <ngf-bottom-nav-item label="Settings" [icon]="settingsIcon"></ngf-bottom-nav-item>
  <ngf-bottom-nav-item label="Profile" [icon]="userIcon"></ngf-bottom-nav-item>
</ngf-bottom-navigation>`;

  badgesCode = `<ngf-bottom-navigation>
  <ngf-bottom-nav-item [active]="true" label="Home" [icon]="homeIcon"></ngf-bottom-nav-item>
  <ngf-bottom-nav-item label="Messages" [icon]="messageIcon" badge="5"></ngf-bottom-nav-item>
  <ngf-bottom-nav-item label="Notifications" [icon]="bellIcon" badge="12"></ngf-bottom-nav-item>
  <ngf-bottom-nav-item label="Profile" [icon]="userIcon"></ngf-bottom-nav-item>
</ngf-bottom-navigation>`;

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
