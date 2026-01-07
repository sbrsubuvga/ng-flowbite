import { Component } from '@angular/core';

@Component({
  selector: 'app-alerts-demo',
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
      <h1 class="text-4xl font-bold text-white mb-2">Alert</h1>
      <p class="text-xl text-gray-400 mb-8">
        Use the alert component to show important messages to your users using the Tailwind CSS utility classes.
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
            The alert component is used to display important messages to users. It supports multiple color variants and can be dismissible with a close button.
          </p>
          
          <h2 class="text-2xl font-bold text-white mt-8 mb-4">Features</h2>
          <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Multiple color variants: default, info, success, failure, warning, primary</li>
            <li>Optional dismissible functionality</li>
            <li>Icon support</li>
            <li>Border and accent border options</li>
            <li>Dark mode support</li>
            <li>Accessible with ARIA attributes</li>
          </ul>
        </div>

        <div class="space-y-12">
          <!-- Default Alert -->
          <section id="default">
            <h2 class="text-2xl font-bold text-white mb-4">Default alert</h2>
            <p class="text-gray-400 mb-4">Use the following alert components to show messages to your users.</p>
            <app-demo-wrapper
              componentName="Default Alert"
              githubLink="https://github.com/themesberg/flowbite-angular/blob/main/projects/ng-flowbite/src/lib/components/alert/alert.component.ts"
            >
              <div class="space-y-4">
                <ngf-alert color="default" [showIcon]="false">
                  <span class="font-medium">default alert!</span> Change a few things up and try submitting again.
                </ngf-alert>
                <ngf-alert color="info" [showIcon]="false">
                  <span class="font-medium">info alert!</span> Change a few things up and try submitting again.
                </ngf-alert>
                <ngf-alert color="failure" [showIcon]="false">
                  <span class="font-medium">failure alert!</span> Change a few things up and try submitting again.
                </ngf-alert>
                <ngf-alert color="warning" [showIcon]="false">
                  <span class="font-medium">warning alert!</span> Change a few things up and try submitting again.
                </ngf-alert>
                <ngf-alert color="success" [showIcon]="false">
                  <span class="font-medium">success alert!</span> Change a few things up and try submitting again.
                </ngf-alert>
                <ngf-alert color="primary" [showIcon]="false">
                  <span class="font-medium">primary alert!</span> Change a few things up and try submitting again.
                </ngf-alert>
              </div>
            </app-demo-wrapper>
            <app-code-syntax-wrapper [code]="defaultCode" language="html"></app-code-syntax-wrapper>
          </section>

          <!-- Alert with Icon -->
          <section id="icon">
            <h2 class="text-2xl font-bold text-white mb-4">Alert with icon</h2>
            <p class="text-gray-400 mb-4">Alerts can include icons to provide visual context.</p>
            <app-demo-wrapper
              componentName="Alert with Icon"
              githubLink="https://github.com/themesberg/flowbite-angular/blob/main/projects/ng-flowbite/src/lib/components/alert/alert.component.ts"
            >
              <div class="space-y-4">
                <ngf-alert color="default">
                  <span class="font-medium">default alert!</span> Change a few things up and try submitting again.
                </ngf-alert>
                <ngf-alert color="info">
                  <span class="font-medium">info alert!</span> Change a few things up and try submitting again.
                </ngf-alert>
                <ngf-alert color="failure">
                  <span class="font-medium">failure alert!</span> Change a few things up and try submitting again.
                </ngf-alert>
                <ngf-alert color="warning">
                  <span class="font-medium">warning alert!</span> Change a few things up and try submitting again.
                </ngf-alert>
                <ngf-alert color="success">
                  <span class="font-medium">success alert!</span> Change a few things up and try submitting again.
                </ngf-alert>
                <ngf-alert color="primary">
                  <span class="font-medium">primary alert!</span> Change a few things up and try submitting again.
                </ngf-alert>
              </div>
            </app-demo-wrapper>
            <app-code-syntax-wrapper [code]="iconCode" language="html"></app-code-syntax-wrapper>
          </section>

          <!-- Bordered Alert -->
          <section id="border">
            <h2 class="text-2xl font-bold text-white mb-4">Bordered alert</h2>
            <p class="text-gray-400 mb-4">Add a border to the alert component using the border prop.</p>
            <app-demo-wrapper
              componentName="Bordered Alert"
              githubLink="https://github.com/themesberg/flowbite-angular/blob/main/projects/ng-flowbite/src/lib/components/alert/alert.component.ts"
            >
              <div class="space-y-4">
                <ngf-alert color="default" [border]="true" [showIcon]="false">
                  <span class="font-medium">default alert!</span> Change a few things up and try submitting again.
                </ngf-alert>
                <ngf-alert color="info" [border]="true" [showIcon]="false">
                  <span class="font-medium">info alert!</span> Change a few things up and try submitting again.
                </ngf-alert>
                <ngf-alert color="failure" [border]="true" [showIcon]="false">
                  <span class="font-medium">failure alert!</span> Change a few things up and try submitting again.
                </ngf-alert>
                <ngf-alert color="warning" [border]="true" [showIcon]="false">
                  <span class="font-medium">warning alert!</span> Change a few things up and try submitting again.
                </ngf-alert>
                <ngf-alert color="success" [border]="true" [showIcon]="false">
                  <span class="font-medium">success alert!</span> Change a few things up and try submitting again.
                </ngf-alert>
                <ngf-alert color="primary" [border]="true" [showIcon]="false">
                  <span class="font-medium">primary alert!</span> Change a few things up and try submitting again.
                </ngf-alert>
              </div>
            </app-demo-wrapper>
            <app-code-syntax-wrapper [code]="borderCode" language="html"></app-code-syntax-wrapper>
          </section>

          <!-- Dismissible Alerts -->
          <section id="dismissible">
            <h2 class="text-2xl font-bold text-white mb-4">Dismissible alerts</h2>
            <p class="text-gray-400 mb-4">Use the dismissible prop to add a close button to the alert component.</p>
            <app-demo-wrapper
              componentName="Dismissible Alert"
              githubLink="https://github.com/themesberg/flowbite-angular/blob/main/projects/ng-flowbite/src/lib/components/alert/alert.component.ts"
            >
              <div class="space-y-4">
                <ngf-alert color="default" [dismissible]="true" (onDismiss)="onDismiss()">
                  <span class="font-medium">default alert!</span> Change a few things up and try submitting again.
                </ngf-alert>
                <ngf-alert color="info" [dismissible]="true" (onDismiss)="onDismiss()">
                  <span class="font-medium">info alert!</span> Change a few things up and try submitting again.
                </ngf-alert>
                <ngf-alert color="failure" [dismissible]="true" (onDismiss)="onDismiss()">
                  <span class="font-medium">failure alert!</span> Change a few things up and try submitting again.
                </ngf-alert>
                <ngf-alert color="warning" [dismissible]="true" (onDismiss)="onDismiss()">
                  <span class="font-medium">warning alert!</span> Change a few things up and try submitting again.
                </ngf-alert>
                <ngf-alert color="success" [dismissible]="true" (onDismiss)="onDismiss()">
                  <span class="font-medium">success alert!</span> Change a few things up and try submitting again.
                </ngf-alert>
                <ngf-alert color="primary" [dismissible]="true" (onDismiss)="onDismiss()">
                  <span class="font-medium">primary alert!</span> Change a few things up and try submitting again.
                </ngf-alert>
              </div>
            </app-demo-wrapper>
            <app-code-syntax-wrapper [code]="dismissibleCode" language="html"></app-code-syntax-wrapper>
          </section>

          <!-- Border Accent -->
          <section id="border-accent">
            <h2 class="text-2xl font-bold text-white mb-4">Border accent</h2>
            <p class="text-gray-400 mb-4">Add an accent border (top border) to the alert using the accent prop along with border.</p>
            <app-demo-wrapper
              componentName="Border Accent"
              githubLink="https://github.com/themesberg/flowbite-angular/blob/main/projects/ng-flowbite/src/lib/components/alert/alert.component.ts"
            >
              <div class="space-y-4">
                <ngf-alert color="default" [border]="true" [accent]="true" [showIcon]="false">
                  <span class="font-medium">default alert!</span> Change a few things up and try submitting again.
                </ngf-alert>
                <ngf-alert color="info" [border]="true" [accent]="true" [showIcon]="false">
                  <span class="font-medium">info alert!</span> Change a few things up and try submitting again.
                </ngf-alert>
                <ngf-alert color="failure" [border]="true" [accent]="true" [showIcon]="false">
                  <span class="font-medium">failure alert!</span> Change a few things up and try submitting again.
                </ngf-alert>
                <ngf-alert color="warning" [border]="true" [accent]="true" [showIcon]="false">
                  <span class="font-medium">warning alert!</span> Change a few things up and try submitting again.
                </ngf-alert>
                <ngf-alert color="success" [border]="true" [accent]="true" [showIcon]="false">
                  <span class="font-medium">success alert!</span> Change a few things up and try submitting again.
                </ngf-alert>
                <ngf-alert color="primary" [border]="true" [accent]="true" [showIcon]="false">
                  <span class="font-medium">primary alert!</span> Change a few things up and try submitting again.
                </ngf-alert>
              </div>
            </app-demo-wrapper>
            <app-code-syntax-wrapper [code]="borderAccentCode" language="html"></app-code-syntax-wrapper>
          </section>
        </div>
      </div>

      <!-- Examples Tab -->
      <div *ngIf="activeTab === 'examples'" class="space-y-12">
        <!-- Default Alert -->
        <section id="default">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Default alert</h2>
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
          <p class="text-gray-400 mb-4">Use the following alert components to show messages to your users.</p>
          <app-demo-wrapper
            componentName="Default Alert"
            githubLink="https://github.com/themesberg/flowbite-angular/blob/main/projects/ng-flowbite/src/lib/components/alert/alert.component.ts"
          >
            <div *ngIf="!showDefaultCode" class="space-y-4">
              <ngf-alert color="default" [showIcon]="false">
                <span class="font-medium">default alert!</span> Change a few things up and try submitting again.
              </ngf-alert>
              <ngf-alert color="info" [showIcon]="false">
                <span class="font-medium">info alert!</span> Change a few things up and try submitting again.
              </ngf-alert>
              <ngf-alert color="failure" [showIcon]="false">
                <span class="font-medium">failure alert!</span> Change a few things up and try submitting again.
              </ngf-alert>
              <ngf-alert color="warning" [showIcon]="false">
                <span class="font-medium">warning alert!</span> Change a few things up and try submitting again.
              </ngf-alert>
              <ngf-alert color="success" [showIcon]="false">
                <span class="font-medium">success alert!</span> Change a few things up and try submitting again.
              </ngf-alert>
              <ngf-alert color="primary" [showIcon]="false">
                <span class="font-medium">primary alert!</span> Change a few things up and try submitting again.
              </ngf-alert>
            </div>
          </app-demo-wrapper>
          <div *ngIf="showDefaultCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">alert-default.html</span>
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

        <!-- Alert with Icon -->
        <section id="icon">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Alert with icon</h2>
            <button
              (click)="showIconCode = !showIconCode"
              [class.bg-blue-600]="showIconCode"
              [class.bg-gray-700]="!showIconCode"
              class="px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              Code
            </button>
          </div>
          <p class="text-gray-400 mb-4">Alerts can include icons to provide visual context.</p>
          <app-demo-wrapper
            componentName="Alert with Icon"
            githubLink="https://github.com/themesberg/flowbite-angular/blob/main/projects/ng-flowbite/src/lib/components/alert/alert.component.ts"
          >
            <div *ngIf="!showIconCode" class="space-y-4">
              <ngf-alert color="default">
                <span class="font-medium">default alert!</span> Change a few things up and try submitting again.
              </ngf-alert>
              <ngf-alert color="info">
                <span class="font-medium">info alert!</span> Change a few things up and try submitting again.
              </ngf-alert>
              <ngf-alert color="failure">
                <span class="font-medium">failure alert!</span> Change a few things up and try submitting again.
              </ngf-alert>
              <ngf-alert color="warning">
                <span class="font-medium">warning alert!</span> Change a few things up and try submitting again.
              </ngf-alert>
              <ngf-alert color="success">
                <span class="font-medium">success alert!</span> Change a few things up and try submitting again.
              </ngf-alert>
              <ngf-alert color="primary">
                <span class="font-medium">primary alert!</span> Change a few things up and try submitting again.
              </ngf-alert>
            </div>
          </app-demo-wrapper>
          <div *ngIf="showIconCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">alert-icon.html</span>
              <button
                (click)="copyToClipboard(iconCode)"
                class="text-gray-400 hover:text-white transition-colors"
                title="Copy code"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </button>
            </div>
            <div class="p-4 overflow-x-auto">
              <pre class="text-sm text-gray-300 font-mono"><code [innerHTML]="formatCode(iconCode)"></code></pre>
            </div>
          </div>
        </section>

        <!-- Bordered Alert -->
        <section id="border">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Bordered alert</h2>
            <button
              (click)="showBorderCode = !showBorderCode"
              [class.bg-blue-600]="showBorderCode"
              [class.bg-gray-700]="!showBorderCode"
              class="px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              Code
            </button>
          </div>
          <p class="text-gray-400 mb-4">Add a border to the alert component using the border prop.</p>
          <app-demo-wrapper
            componentName="Bordered Alert"
            githubLink="https://github.com/themesberg/flowbite-angular/blob/main/projects/ng-flowbite/src/lib/components/alert/alert.component.ts"
          >
            <div *ngIf="!showBorderCode" class="space-y-4">
              <ngf-alert color="default" [border]="true" [showIcon]="false">
                <span class="font-medium">default alert!</span> Change a few things up and try submitting again.
              </ngf-alert>
              <ngf-alert color="info" [border]="true" [showIcon]="false">
                <span class="font-medium">info alert!</span> Change a few things up and try submitting again.
              </ngf-alert>
              <ngf-alert color="failure" [border]="true" [showIcon]="false">
                <span class="font-medium">failure alert!</span> Change a few things up and try submitting again.
              </ngf-alert>
              <ngf-alert color="warning" [border]="true" [showIcon]="false">
                <span class="font-medium">warning alert!</span> Change a few things up and try submitting again.
              </ngf-alert>
              <ngf-alert color="success" [border]="true" [showIcon]="false">
                <span class="font-medium">success alert!</span> Change a few things up and try submitting again.
              </ngf-alert>
              <ngf-alert color="primary" [border]="true" [showIcon]="false">
                <span class="font-medium">primary alert!</span> Change a few things up and try submitting again.
              </ngf-alert>
            </div>
          </app-demo-wrapper>
          <div *ngIf="showBorderCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">alert-border.html</span>
              <button
                (click)="copyToClipboard(borderCode)"
                class="text-gray-400 hover:text-white transition-colors"
                title="Copy code"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </button>
            </div>
            <div class="p-4 overflow-x-auto">
              <pre class="text-sm text-gray-300 font-mono"><code [innerHTML]="formatCode(borderCode)"></code></pre>
            </div>
          </div>
        </section>

        <!-- Dismissible Alerts -->
        <section id="dismissible">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Dismissible alerts</h2>
            <button
              (click)="showDismissibleCode = !showDismissibleCode"
              [class.bg-blue-600]="showDismissibleCode"
              [class.bg-gray-700]="!showDismissibleCode"
              class="px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              Code
            </button>
          </div>
          <p class="text-gray-400 mb-4">Use the dismissible prop to add a close button to the alert component.</p>
          <app-demo-wrapper
            componentName="Dismissible Alert"
            githubLink="https://github.com/themesberg/flowbite-angular/blob/main/projects/ng-flowbite/src/lib/components/alert/alert.component.ts"
          >
            <div *ngIf="!showDismissibleCode" class="space-y-4">
              <ngf-alert color="default" [dismissible]="true" (onDismiss)="onDismiss()">
                <span class="font-medium">default alert!</span> Change a few things up and try submitting again.
              </ngf-alert>
              <ngf-alert color="info" [dismissible]="true" (onDismiss)="onDismiss()">
                <span class="font-medium">info alert!</span> Change a few things up and try submitting again.
              </ngf-alert>
              <ngf-alert color="failure" [dismissible]="true" (onDismiss)="onDismiss()">
                <span class="font-medium">failure alert!</span> Change a few things up and try submitting again.
              </ngf-alert>
              <ngf-alert color="warning" [dismissible]="true" (onDismiss)="onDismiss()">
                <span class="font-medium">warning alert!</span> Change a few things up and try submitting again.
              </ngf-alert>
              <ngf-alert color="success" [dismissible]="true" (onDismiss)="onDismiss()">
                <span class="font-medium">success alert!</span> Change a few things up and try submitting again.
              </ngf-alert>
              <ngf-alert color="primary" [dismissible]="true" (onDismiss)="onDismiss()">
                <span class="font-medium">primary alert!</span> Change a few things up and try submitting again.
              </ngf-alert>
            </div>
          </app-demo-wrapper>
          <div *ngIf="showDismissibleCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">alert-dismissible.html</span>
              <button
                (click)="copyToClipboard(dismissibleCode)"
                class="text-gray-400 hover:text-white transition-colors"
                title="Copy code"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </button>
            </div>
            <div class="p-4 overflow-x-auto">
              <pre class="text-sm text-gray-300 font-mono"><code [innerHTML]="formatCode(dismissibleCode)"></code></pre>
            </div>
          </div>
        </section>

        <!-- Border Accent -->
        <section id="border-accent">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Border accent</h2>
            <button
              (click)="showBorderAccentCode = !showBorderAccentCode"
              [class.bg-blue-600]="showBorderAccentCode"
              [class.bg-gray-700]="!showBorderAccentCode"
              class="px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              Code
            </button>
          </div>
          <p class="text-gray-400 mb-4">Add an accent border (top border) to the alert using the accent prop along with border.</p>
          <app-demo-wrapper
            componentName="Border Accent"
            githubLink="https://github.com/themesberg/flowbite-angular/blob/main/projects/ng-flowbite/src/lib/components/alert/alert.component.ts"
          >
            <div *ngIf="!showBorderAccentCode" class="space-y-4">
              <ngf-alert color="default" [border]="true" [accent]="true" [showIcon]="false">
                <span class="font-medium">default alert!</span> Change a few things up and try submitting again.
              </ngf-alert>
              <ngf-alert color="info" [border]="true" [accent]="true" [showIcon]="false">
                <span class="font-medium">info alert!</span> Change a few things up and try submitting again.
              </ngf-alert>
              <ngf-alert color="failure" [border]="true" [accent]="true" [showIcon]="false">
                <span class="font-medium">failure alert!</span> Change a few things up and try submitting again.
              </ngf-alert>
              <ngf-alert color="warning" [border]="true" [accent]="true" [showIcon]="false">
                <span class="font-medium">warning alert!</span> Change a few things up and try submitting again.
              </ngf-alert>
              <ngf-alert color="success" [border]="true" [accent]="true" [showIcon]="false">
                <span class="font-medium">success alert!</span> Change a few things up and try submitting again.
              </ngf-alert>
              <ngf-alert color="primary" [border]="true" [accent]="true" [showIcon]="false">
                <span class="font-medium">primary alert!</span> Change a few things up and try submitting again.
              </ngf-alert>
            </div>
          </app-demo-wrapper>
          <div *ngIf="showBorderAccentCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">alert-border-accent.html</span>
              <button
                (click)="copyToClipboard(borderAccentCode)"
                class="text-gray-400 hover:text-white transition-colors"
                title="Copy code"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </button>
            </div>
            <div class="p-4 overflow-x-auto">
              <pre class="text-sm text-gray-300 font-mono"><code [innerHTML]="formatCode(borderAccentCode)"></code></pre>
            </div>
          </div>
        </section>
      </div>

      <!-- API Tab -->
      <div *ngIf="activeTab === 'api'" class="space-y-8">
        <section>
          <h2 class="text-2xl font-bold text-white mb-4">NgfAlertComponent</h2>
          <p class="text-gray-400 mb-6">A component for displaying alert messages to users.</p>
          
          <h3 class="text-xl font-semibold text-white mb-3">Selector</h3>
          <div class="bg-gray-800 rounded-lg p-4 mb-6">
            <code class="text-blue-400">ngf-alert</code>
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
                  <td class="px-6 py-4 text-sm text-gray-300">'default' | 'info' | 'failure' | 'success' | 'warning' | 'primary'</td>
                  <td class="px-6 py-4 text-sm text-gray-300">'default'</td>
                  <td class="px-6 py-4 text-sm text-gray-300">The color variant of the alert</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">dismissible</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-300">false</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Whether the alert can be dismissed with a close button</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">showIcon</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-300">true</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Whether to show the icon</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">border</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-300">false</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Whether the alert has a border</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">accent</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-300">false</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Whether the alert has an accent border (top border)</td>
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">onDismiss</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">EventEmitter&lt;void&gt;</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Emitted when the alert is dismissed</td>
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
export class AlertsDemoComponent {
  activeTab: 'overview' | 'examples' | 'api' = 'overview';
  showDefaultCode = false;
  showIconCode = false;
  showBorderCode = false;
  showDismissibleCode = false;
  showBorderAccentCode = false;

  onDismiss(): void {
    console.log('Alert dismissed');
  }

  defaultCode = `<ngf-alert color="default" [showIcon]="false">
  <span class="font-medium">default alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="info" [showIcon]="false">
  <span class="font-medium">info alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="failure" [showIcon]="false">
  <span class="font-medium">failure alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="warning" [showIcon]="false">
  <span class="font-medium">warning alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="success" [showIcon]="false">
  <span class="font-medium">success alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="primary" [showIcon]="false">
  <span class="font-medium">primary alert!</span> Change a few things up and try submitting again.
</ngf-alert>`;

  iconCode = `<ngf-alert color="default">
  <span class="font-medium">default alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="info">
  <span class="font-medium">info alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="failure">
  <span class="font-medium">failure alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="warning">
  <span class="font-medium">warning alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="success">
  <span class="font-medium">success alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="primary">
  <span class="font-medium">primary alert!</span> Change a few things up and try submitting again.
</ngf-alert>`;

  borderCode = `<ngf-alert color="default" [border]="true" [showIcon]="false">
  <span class="font-medium">default alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="info" [border]="true" [showIcon]="false">
  <span class="font-medium">info alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="failure" [border]="true" [showIcon]="false">
  <span class="font-medium">failure alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="warning" [border]="true" [showIcon]="false">
  <span class="font-medium">warning alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="success" [border]="true" [showIcon]="false">
  <span class="font-medium">success alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="primary" [border]="true" [showIcon]="false">
  <span class="font-medium">primary alert!</span> Change a few things up and try submitting again.
</ngf-alert>`;

  dismissibleCode = `<ngf-alert color="default" [dismissible]="true" (onDismiss)="onDismiss()">
  <span class="font-medium">default alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="info" [dismissible]="true" (onDismiss)="onDismiss()">
  <span class="font-medium">info alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="failure" [dismissible]="true" (onDismiss)="onDismiss()">
  <span class="font-medium">failure alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="warning" [dismissible]="true" (onDismiss)="onDismiss()">
  <span class="font-medium">warning alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="success" [dismissible]="true" (onDismiss)="onDismiss()">
  <span class="font-medium">success alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="primary" [dismissible]="true" (onDismiss)="onDismiss()">
  <span class="font-medium">primary alert!</span> Change a few things up and try submitting again.
</ngf-alert>`;

  borderAccentCode = `<ngf-alert color="default" [border]="true" [accent]="true" [showIcon]="false">
  <span class="font-medium">default alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="info" [border]="true" [accent]="true" [showIcon]="false">
  <span class="font-medium">info alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="failure" [border]="true" [accent]="true" [showIcon]="false">
  <span class="font-medium">failure alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="warning" [border]="true" [accent]="true" [showIcon]="false">
  <span class="font-medium">warning alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="success" [border]="true" [accent]="true" [showIcon]="false">
  <span class="font-medium">success alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="primary" [border]="true" [accent]="true" [showIcon]="false">
  <span class="font-medium">primary alert!</span> Change a few things up and try submitting again.
</ngf-alert>`;

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
