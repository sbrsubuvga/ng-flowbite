import { Component } from '@angular/core';

@Component({
  selector: 'app-badge-demo',
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
      <h1 class="text-4xl font-bold text-white mb-2">Badge</h1>
      <p class="text-xl text-gray-400 mb-8">Use the badge component to show labels, counts, or status indicators.</p>

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
            The badge component is used to display labels, counts, or status indicators. It supports multiple color variants, sizes, and styles.
          </p>
          
          <h2 class="text-2xl font-bold text-white mt-8 mb-4">Features</h2>
          <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Multiple color variants: brand, alternative, gray, danger, success, warning</li>
            <li>Size options: xs, sm, lg</li>
            <li>Pill shape option</li>
            <li>Border and ring border options</li>
            <li>Icon support via content projection</li>
            <li>Link badges with hover states</li>
            <li>Dismissible badges (chips)</li>
            <li>Notification badges</li>
          </ul>
        </div>

        <div class="space-y-12">
          <!-- Default Badge -->
          <section id="default">
            <h2 class="text-2xl font-bold text-white mb-4">Default badges</h2>
            <p class="text-gray-400 mb-4">Use the default badge component to show labels or counts.</p>
            <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <div class="flex flex-wrap gap-2">
                <ngf-badge color="brand">Brand</ngf-badge>
                <ngf-badge color="alternative">Alternative</ngf-badge>
                <ngf-badge color="gray">Gray</ngf-badge>
                <ngf-badge color="danger">Danger</ngf-badge>
                <ngf-badge color="success">Success</ngf-badge>
                <ngf-badge color="warning">Warning</ngf-badge>
              </div>
            </div>
            <app-code-example [code]="defaultCode"></app-code-example>
          </section>

          <!-- Bordered Badge -->
          <section id="border">
            <h2 class="text-2xl font-bold text-white mb-4">Bordered badges</h2>
            <p class="text-gray-400 mb-4">Badges with borders.</p>
            <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <div class="flex flex-wrap gap-2">
                <ngf-badge color="brand" [border]="true">Brand</ngf-badge>
                <ngf-badge color="alternative" [border]="true">Alternative</ngf-badge>
                <ngf-badge color="gray" [border]="true">Gray</ngf-badge>
                <ngf-badge color="danger" [border]="true">Danger</ngf-badge>
                <ngf-badge color="success" [border]="true">Success</ngf-badge>
                <ngf-badge color="warning" [border]="true">Warning</ngf-badge>
              </div>
            </div>
            <app-code-example [code]="borderedCode"></app-code-example>
          </section>

          <!-- Large Badge -->
          <section id="large">
            <h2 class="text-2xl font-bold text-white mb-4">Large badges</h2>
            <p class="text-gray-400 mb-4">Larger badges with more padding.</p>
            <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <div class="flex flex-wrap gap-2">
                <ngf-badge color="brand" size="lg">Brand</ngf-badge>
                <ngf-badge color="alternative" size="lg">Alternative</ngf-badge>
                <ngf-badge color="gray" size="lg">Gray</ngf-badge>
                <ngf-badge color="danger" size="lg">Danger</ngf-badge>
                <ngf-badge color="success" size="lg">Success</ngf-badge>
                <ngf-badge color="warning" size="lg">Warning</ngf-badge>
              </div>
            </div>
            <app-code-example [code]="largeCode"></app-code-example>
          </section>

          <!-- Large Bordered Badge -->
          <section id="large-bordered">
            <h2 class="text-2xl font-bold text-white mb-4">Large bordered badges</h2>
            <p class="text-gray-400 mb-4">Large badges with ring borders.</p>
            <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <div class="flex flex-wrap gap-2">
                <ngf-badge color="brand" size="lg" [useRing]="true">Brand</ngf-badge>
                <ngf-badge color="alternative" size="lg" [useRing]="true">Alternative</ngf-badge>
                <ngf-badge color="gray" size="lg" [useRing]="true">Gray</ngf-badge>
                <ngf-badge color="danger" size="lg" [useRing]="true">Danger</ngf-badge>
                <ngf-badge color="success" size="lg" [useRing]="true">Success</ngf-badge>
                <ngf-badge color="warning" size="lg" [useRing]="true">Warning</ngf-badge>
              </div>
            </div>
            <app-code-example [code]="largeBorderedCode"></app-code-example>
          </section>

          <!-- Pill Badge -->
          <section id="pill">
            <h2 class="text-2xl font-bold text-white mb-4">Pill badges</h2>
            <p class="text-gray-400 mb-4">Pill-shaped badges with rounded-full.</p>
            <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <div class="flex flex-wrap gap-2">
                <ngf-badge color="brand" [pill]="true">Brand</ngf-badge>
                <ngf-badge color="alternative" [pill]="true">Alternative</ngf-badge>
                <ngf-badge color="gray" [pill]="true">Gray</ngf-badge>
                <ngf-badge color="danger" [pill]="true">Danger</ngf-badge>
                <ngf-badge color="success" [pill]="true">Success</ngf-badge>
                <ngf-badge color="warning" [pill]="true">Warning</ngf-badge>
              </div>
            </div>
            <app-code-example [code]="pillCode"></app-code-example>
          </section>

          <!-- Pill Bordered Badge -->
          <section id="pill-bordered">
            <h2 class="text-2xl font-bold text-white mb-4">Pill bordered badges</h2>
            <p class="text-gray-400 mb-4">Pill badges with borders.</p>
            <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <div class="flex flex-wrap gap-2">
                <ngf-badge color="brand" [pill]="true" [border]="true">Brand</ngf-badge>
                <ngf-badge color="alternative" [pill]="true" [border]="true">Alternative</ngf-badge>
                <ngf-badge color="gray" [pill]="true" [border]="true">Gray</ngf-badge>
                <ngf-badge color="danger" [pill]="true" [border]="true">Danger</ngf-badge>
                <ngf-badge color="success" [pill]="true" [border]="true">Success</ngf-badge>
                <ngf-badge color="warning" [pill]="true" [border]="true">Warning</ngf-badge>
              </div>
            </div>
            <app-code-example [code]="pillBorderedCode"></app-code-example>
          </section>
        </div>
      </div>

      <!-- Examples Tab -->
      <div *ngIf="activeTab === 'examples'" class="space-y-12">
        <!-- Default Badge -->
        <section id="default">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Default badges</h2>
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
          <p class="text-gray-400 mb-4">Use the default badge component to show labels or counts.</p>
          <div *ngIf="!showDefaultCode" class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <div class="flex flex-wrap gap-2">
              <ngf-badge color="brand">Brand</ngf-badge>
              <ngf-badge color="alternative">Alternative</ngf-badge>
              <ngf-badge color="gray">Gray</ngf-badge>
              <ngf-badge color="danger">Danger</ngf-badge>
              <ngf-badge color="success">Success</ngf-badge>
              <ngf-badge color="warning">Warning</ngf-badge>
            </div>
          </div>
          <div *ngIf="showDefaultCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">badge-default.html</span>
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

        <!-- Bordered Badge -->
        <section id="bordered">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Bordered badges</h2>
            <button
              (click)="showBorderedCode = !showBorderedCode"
              [class.bg-blue-600]="showBorderedCode"
              [class.bg-gray-700]="!showBorderedCode"
              class="px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              Code
            </button>
          </div>
          <p class="text-gray-400 mb-4">Badges with borders.</p>
          <div *ngIf="!showBorderedCode" class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <div class="flex flex-wrap gap-2">
              <ngf-badge color="brand" [border]="true">Brand</ngf-badge>
              <ngf-badge color="alternative" [border]="true">Alternative</ngf-badge>
              <ngf-badge color="gray" [border]="true">Gray</ngf-badge>
              <ngf-badge color="danger" [border]="true">Danger</ngf-badge>
              <ngf-badge color="success" [border]="true">Success</ngf-badge>
              <ngf-badge color="warning" [border]="true">Warning</ngf-badge>
            </div>
          </div>
          <div *ngIf="showBorderedCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">badge-bordered.html</span>
              <button
                (click)="copyToClipboard(borderedCode)"
                class="text-gray-400 hover:text-white transition-colors"
                title="Copy code"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </button>
            </div>
            <div class="p-4 overflow-x-auto">
              <pre class="text-sm text-gray-300 font-mono"><code [innerHTML]="formatCode(borderedCode)"></code></pre>
            </div>
          </div>
        </section>

        <!-- Large Badge -->
        <section id="large">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Large badges</h2>
            <button
              (click)="showLargeCode = !showLargeCode"
              [class.bg-blue-600]="showLargeCode"
              [class.bg-gray-700]="!showLargeCode"
              class="px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              Code
            </button>
          </div>
          <p class="text-gray-400 mb-4">Larger badges with more padding.</p>
          <div *ngIf="!showLargeCode" class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <div class="flex flex-wrap gap-2">
              <ngf-badge color="brand" size="lg">Brand</ngf-badge>
              <ngf-badge color="alternative" size="lg">Alternative</ngf-badge>
              <ngf-badge color="gray" size="lg">Gray</ngf-badge>
              <ngf-badge color="danger" size="lg">Danger</ngf-badge>
              <ngf-badge color="success" size="lg">Success</ngf-badge>
              <ngf-badge color="warning" size="lg">Warning</ngf-badge>
            </div>
          </div>
          <div *ngIf="showLargeCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">badge-large.html</span>
              <button
                (click)="copyToClipboard(largeCode)"
                class="text-gray-400 hover:text-white transition-colors"
                title="Copy code"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </button>
            </div>
            <div class="p-4 overflow-x-auto">
              <pre class="text-sm text-gray-300 font-mono"><code [innerHTML]="formatCode(largeCode)"></code></pre>
            </div>
          </div>
        </section>

        <!-- Large Bordered Badge -->
        <section id="large-bordered">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Large bordered badges</h2>
            <button
              (click)="showLargeBorderedCode = !showLargeBorderedCode"
              [class.bg-blue-600]="showLargeBorderedCode"
              [class.bg-gray-700]="!showLargeBorderedCode"
              class="px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              Code
            </button>
          </div>
          <p class="text-gray-400 mb-4">Large badges with ring borders.</p>
          <div *ngIf="!showLargeBorderedCode" class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <div class="flex flex-wrap gap-2">
              <ngf-badge color="brand" size="lg" [useRing]="true">Brand</ngf-badge>
              <ngf-badge color="alternative" size="lg" [useRing]="true">Alternative</ngf-badge>
              <ngf-badge color="gray" size="lg" [useRing]="true">Gray</ngf-badge>
              <ngf-badge color="danger" size="lg" [useRing]="true">Danger</ngf-badge>
              <ngf-badge color="success" size="lg" [useRing]="true">Success</ngf-badge>
              <ngf-badge color="warning" size="lg" [useRing]="true">Warning</ngf-badge>
            </div>
          </div>
          <div *ngIf="showLargeBorderedCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">badge-large-bordered.html</span>
              <button
                (click)="copyToClipboard(largeBorderedCode)"
                class="text-gray-400 hover:text-white transition-colors"
                title="Copy code"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </button>
            </div>
            <div class="p-4 overflow-x-auto">
              <pre class="text-sm text-gray-300 font-mono"><code [innerHTML]="formatCode(largeBorderedCode)"></code></pre>
            </div>
          </div>
        </section>

        <!-- Pill Badge -->
        <section id="pill">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Pill badges</h2>
            <button
              (click)="showPillCode = !showPillCode"
              [class.bg-blue-600]="showPillCode"
              [class.bg-gray-700]="!showPillCode"
              class="px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              Code
            </button>
          </div>
          <p class="text-gray-400 mb-4">Pill-shaped badges with rounded-full.</p>
          <div *ngIf="!showPillCode" class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <div class="flex flex-wrap gap-2">
              <ngf-badge color="brand" [pill]="true">Brand</ngf-badge>
              <ngf-badge color="alternative" [pill]="true">Alternative</ngf-badge>
              <ngf-badge color="gray" [pill]="true">Gray</ngf-badge>
              <ngf-badge color="danger" [pill]="true">Danger</ngf-badge>
              <ngf-badge color="success" [pill]="true">Success</ngf-badge>
              <ngf-badge color="warning" [pill]="true">Warning</ngf-badge>
            </div>
          </div>
          <div *ngIf="showPillCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">badge-pill.html</span>
              <button
                (click)="copyToClipboard(pillCode)"
                class="text-gray-400 hover:text-white transition-colors"
                title="Copy code"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </button>
            </div>
            <div class="p-4 overflow-x-auto">
              <pre class="text-sm text-gray-300 font-mono"><code [innerHTML]="formatCode(pillCode)"></code></pre>
            </div>
          </div>
        </section>

        <!-- Pill Bordered Badge -->
        <section id="pill-bordered">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Pill bordered badges</h2>
            <button
              (click)="showPillBorderedCode = !showPillBorderedCode"
              [class.bg-blue-600]="showPillBorderedCode"
              [class.bg-gray-700]="!showPillBorderedCode"
              class="px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              Code
            </button>
          </div>
          <p class="text-gray-400 mb-4">Pill badges with borders.</p>
          <div *ngIf="!showPillBorderedCode" class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <div class="flex flex-wrap gap-2">
              <ngf-badge color="brand" [pill]="true" [border]="true">Brand</ngf-badge>
              <ngf-badge color="alternative" [pill]="true" [border]="true">Alternative</ngf-badge>
              <ngf-badge color="gray" [pill]="true" [border]="true">Gray</ngf-badge>
              <ngf-badge color="danger" [pill]="true" [border]="true">Danger</ngf-badge>
              <ngf-badge color="success" [pill]="true" [border]="true">Success</ngf-badge>
              <ngf-badge color="warning" [pill]="true" [border]="true">Warning</ngf-badge>
            </div>
          </div>
          <div *ngIf="showPillBorderedCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">badge-pill-bordered.html</span>
              <button
                (click)="copyToClipboard(pillBorderedCode)"
                class="text-gray-400 hover:text-white transition-colors"
                title="Copy code"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </button>
            </div>
            <div class="p-4 overflow-x-auto">
              <pre class="text-sm text-gray-300 font-mono"><code [innerHTML]="formatCode(pillBorderedCode)"></code></pre>
            </div>
          </div>
        </section>

        <!-- Badges as Links -->
        <section id="links">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Badges as links</h2>
            <button
              (click)="showLinksCode = !showLinksCode"
              [class.bg-blue-600]="showLinksCode"
              [class.bg-gray-700]="!showLinksCode"
              class="px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              Code
            </button>
          </div>
          <p class="text-gray-400 mb-4">Badges styled as links with hover states.</p>
          <div *ngIf="!showLinksCode" class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <div class="flex flex-wrap gap-2">
              <a href="#" class="bg-brand-softer hover:bg-brand-soft border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded inline-flex items-center">Brand</a>
              <a href="#" class="bg-neutral-primary-soft hover:bg-neutral-secondary-medium border border-default text-heading text-xs font-medium px-1.5 py-0.5 rounded inline-flex items-center">Alternative</a>
              <a href="#" class="bg-neutral-secondary-medium hover:bg-neutral-tertiary-medium border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded inline-flex items-center">Gray</a>
              <a href="#" class="bg-danger-soft hover:bg-danger-medium border border-danger-subtle text-fg-danger-strong text-xs font-medium px-1.5 py-0.5 rounded inline-flex items-center">Danger</a>
              <a href="#" class="bg-success-soft hover:bg-success-medium border border-success-subtle text-fg-success-strong text-xs font-medium px-1.5 py-0.5 rounded inline-flex items-center">Success</a>
              <a href="#" class="bg-warning-soft hover:bg-warning-medium border border-warning-subtle text-warning text-xs font-medium px-1.5 py-0.5 rounded inline-flex items-center">Warning</a>
            </div>
          </div>
          <div *ngIf="showLinksCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">badge-links.html</span>
              <button
                (click)="copyToClipboard(linksCode)"
                class="text-gray-400 hover:text-white transition-colors"
                title="Copy code"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </button>
            </div>
            <div class="p-4 overflow-x-auto">
              <pre class="text-sm text-gray-300 font-mono"><code [innerHTML]="formatCode(linksCode)"></code></pre>
            </div>
          </div>
        </section>
      </div>

      <!-- API Tab -->
      <div *ngIf="activeTab === 'api'" class="space-y-8">
        <section>
          <h2 class="text-2xl font-bold text-white mb-4">NgfBadgeComponent</h2>
          <p class="text-gray-400 mb-6">A component for displaying labels, counts, or status indicators.</p>
          
          <h3 class="text-xl font-semibold text-white mb-3">Selector</h3>
          <div class="bg-gray-800 rounded-lg p-4 mb-6">
            <code class="text-blue-400">ngf-badge</code>
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
                  <td class="px-6 py-4 text-sm text-gray-300">'brand' | 'alternative' | 'gray' | 'danger' | 'success' | 'warning'</td>
                  <td class="px-6 py-4 text-sm text-gray-300">'brand'</td>
                  <td class="px-6 py-4 text-sm text-gray-300">The color variant of the badge</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">size</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">'xs' | 'sm' | 'lg'</td>
                  <td class="px-6 py-4 text-sm text-gray-300">'sm'</td>
                  <td class="px-6 py-4 text-sm text-gray-300">The size of the badge</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">pill</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-300">false</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Whether to use pill shape (rounded-full)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">border</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-300">false</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Whether the badge has a border</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">useRing</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-300">false</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Whether to use ring border (for large bordered badges)</td>
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
export class BadgeDemoComponent {
  activeTab: 'overview' | 'examples' | 'api' = 'overview';
  showDefaultCode = false;
  showBorderedCode = false;
  showLargeCode = false;
  showLargeBorderedCode = false;
  showPillCode = false;
  showPillBorderedCode = false;
  showLinksCode = false;

  defaultCode = `<ngf-badge color="brand">Brand</ngf-badge>
<ngf-badge color="alternative">Alternative</ngf-badge>
<ngf-badge color="gray">Gray</ngf-badge>
<ngf-badge color="danger">Danger</ngf-badge>
<ngf-badge color="success">Success</ngf-badge>
<ngf-badge color="warning">Warning</ngf-badge>`;

  borderedCode = `<ngf-badge color="brand" [border]="true">Brand</ngf-badge>
<ngf-badge color="alternative" [border]="true">Alternative</ngf-badge>
<ngf-badge color="gray" [border]="true">Gray</ngf-badge>
<ngf-badge color="danger" [border]="true">Danger</ngf-badge>
<ngf-badge color="success" [border]="true">Success</ngf-badge>
<ngf-badge color="warning" [border]="true">Warning</ngf-badge>`;

  largeCode = `<ngf-badge color="brand" size="lg">Brand</ngf-badge>
<ngf-badge color="alternative" size="lg">Alternative</ngf-badge>
<ngf-badge color="gray" size="lg">Gray</ngf-badge>
<ngf-badge color="danger" size="lg">Danger</ngf-badge>
<ngf-badge color="success" size="lg">Success</ngf-badge>
<ngf-badge color="warning" size="lg">Warning</ngf-badge>`;

  largeBorderedCode = `<ngf-badge color="brand" size="lg" [useRing]="true">Brand</ngf-badge>
<ngf-badge color="alternative" size="lg" [useRing]="true">Alternative</ngf-badge>
<ngf-badge color="gray" size="lg" [useRing]="true">Gray</ngf-badge>
<ngf-badge color="danger" size="lg" [useRing]="true">Danger</ngf-badge>
<ngf-badge color="success" size="lg" [useRing]="true">Success</ngf-badge>
<ngf-badge color="warning" size="lg" [useRing]="true">Warning</ngf-badge>`;

  pillCode = `<ngf-badge color="brand" [pill]="true">Brand</ngf-badge>
<ngf-badge color="alternative" [pill]="true">Alternative</ngf-badge>
<ngf-badge color="gray" [pill]="true">Gray</ngf-badge>
<ngf-badge color="danger" [pill]="true">Danger</ngf-badge>
<ngf-badge color="success" [pill]="true">Success</ngf-badge>
<ngf-badge color="warning" [pill]="true">Warning</ngf-badge>`;

  pillBorderedCode = `<ngf-badge color="brand" [pill]="true" [border]="true">Brand</ngf-badge>
<ngf-badge color="alternative" [pill]="true" [border]="true">Alternative</ngf-badge>
<ngf-badge color="gray" [pill]="true" [border]="true">Gray</ngf-badge>
<ngf-badge color="danger" [pill]="true" [border]="true">Danger</ngf-badge>
<ngf-badge color="success" [pill]="true" [border]="true">Success</ngf-badge>
<ngf-badge color="warning" [pill]="true" [border]="true">Warning</ngf-badge>`;

  linksCode = `<a href="#" class="bg-brand-softer hover:bg-brand-soft border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded inline-flex items-center">Brand</a>
<a href="#" class="bg-neutral-primary-soft hover:bg-neutral-secondary-medium border border-default text-heading text-xs font-medium px-1.5 py-0.5 rounded inline-flex items-center">Alternative</a>
<a href="#" class="bg-neutral-secondary-medium hover:bg-neutral-tertiary-medium border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded inline-flex items-center">Gray</a>
<a href="#" class="bg-danger-soft hover:bg-danger-medium border border-danger-subtle text-fg-danger-strong text-xs font-medium px-1.5 py-0.5 rounded inline-flex items-center">Danger</a>
<a href="#" class="bg-success-soft hover:bg-success-medium border border-success-subtle text-fg-success-strong text-xs font-medium px-1.5 py-0.5 rounded inline-flex items-center">Success</a>
<a href="#" class="bg-warning-soft hover:bg-warning-medium border border-warning-subtle text-warning text-xs font-medium px-1.5 py-0.5 rounded inline-flex items-center">Warning</a>`;

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
