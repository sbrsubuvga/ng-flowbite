import { Component } from '@angular/core';

@Component({
  selector: 'app-avatar-demo',
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
      <h1 class="text-4xl font-bold text-white mb-2">Avatar</h1>
      <p class="text-xl text-gray-400 mb-8">Use the avatar component to show a user profile picture or placeholder.</p>

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
            The avatar component is used to display user profile pictures or placeholders. It supports multiple sizes, rounded or square shapes, and status indicators.
          </p>
          
          <h2 class="text-2xl font-bold text-white mt-8 mb-4">Features</h2>
          <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Multiple sizes: xs, sm, md, lg, xl</li>
            <li>Image or placeholder text support</li>
            <li>Status indicators: online, offline, away, busy</li>
            <li>Rounded or square shapes</li>
            <li>Border option</li>
            <li>Dark mode support</li>
          </ul>
        </div>

        <div class="space-y-12">
          <!-- Default Avatar -->
          <section id="default">
            <h2 class="text-2xl font-bold text-white mb-4">Default avatar</h2>
            <p class="text-gray-400 mb-4">Use the default avatar component to show a user profile picture.</p>
            <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <div class="flex gap-4 items-center">
                <ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-5.jpg"></ngf-avatar>
                <ngf-avatar placeholder="JD" size="lg"></ngf-avatar>
                <ngf-avatar placeholder="AB" status="online"></ngf-avatar>
              </div>
            </div>
            <app-code-example [code]="defaultCode"></app-code-example>
          </section>

          <!-- Avatar Sizes -->
          <section id="sizes">
            <h2 class="text-2xl font-bold text-white mb-4">Avatar sizes</h2>
            <p class="text-gray-400 mb-4">The avatar component supports five different sizes: xs, sm, md, lg, and xl.</p>
            <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <div class="flex gap-4 items-center">
                <ngf-avatar size="xs" placeholder="XS"></ngf-avatar>
                <ngf-avatar size="sm" placeholder="SM"></ngf-avatar>
                <ngf-avatar size="md" placeholder="MD"></ngf-avatar>
                <ngf-avatar size="lg" placeholder="LG"></ngf-avatar>
                <ngf-avatar size="xl" placeholder="XL"></ngf-avatar>
              </div>
            </div>
            <app-code-example [code]="sizesCode"></app-code-example>
          </section>

          <!-- Avatar with Images -->
          <section id="images">
            <h2 class="text-2xl font-bold text-white mb-4">Avatar with images</h2>
            <p class="text-gray-400 mb-4">Use the imgSrc prop to display an image in the avatar.</p>
            <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <div class="flex gap-4 items-center">
                <ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-1.jpg" size="xs"></ngf-avatar>
                <ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-2.jpg" size="sm"></ngf-avatar>
                <ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-3.jpg" size="md"></ngf-avatar>
                <ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-4.jpg" size="lg"></ngf-avatar>
                <ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-5.jpg" size="xl"></ngf-avatar>
              </div>
            </div>
            <app-code-example [code]="imagesCode"></app-code-example>
          </section>

          <!-- Avatar with Placeholder -->
          <section id="placeholder">
            <h2 class="text-2xl font-bold text-white mb-4">Avatar with placeholder</h2>
            <p class="text-gray-400 mb-4">When no image is provided, use the placeholder prop to show initials or text.</p>
            <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <div class="flex gap-4 items-center">
                <ngf-avatar placeholder="JD"></ngf-avatar>
                <ngf-avatar placeholder="AB" size="lg"></ngf-avatar>
                <ngf-avatar placeholder="CD" size="xl"></ngf-avatar>
              </div>
            </div>
            <app-code-example [code]="placeholderCode"></app-code-example>
          </section>

          <!-- Avatar with Status -->
          <section id="status">
            <h2 class="text-2xl font-bold text-white mb-4">Avatar with status</h2>
            <p class="text-gray-400 mb-4">Add a status indicator to show the user's online status.</p>
            <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <div class="flex gap-4 items-center">
                <ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-1.jpg" status="online"></ngf-avatar>
                <ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-2.jpg" status="offline"></ngf-avatar>
                <ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-3.jpg" status="away"></ngf-avatar>
                <ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-4.jpg" status="busy"></ngf-avatar>
              </div>
            </div>
            <app-code-example [code]="statusCode"></app-code-example>
          </section>

          <!-- Bordered Avatar -->
          <section id="bordered">
            <h2 class="text-2xl font-bold text-white mb-4">Bordered avatar</h2>
            <p class="text-gray-400 mb-4">Add a border to the avatar using the bordered prop.</p>
            <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <div class="flex gap-4 items-center">
                <ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-1.jpg" [bordered]="true"></ngf-avatar>
                <ngf-avatar placeholder="JD" [bordered]="true" size="lg"></ngf-avatar>
                <ngf-avatar placeholder="AB" [bordered]="true" status="online"></ngf-avatar>
              </div>
            </div>
            <app-code-example [code]="borderedCode"></app-code-example>
          </section>

          <!-- Square Avatar -->
          <section id="square">
            <h2 class="text-2xl font-bold text-white mb-4">Square avatar</h2>
            <p class="text-gray-400 mb-4">Use square avatars by setting rounded to false.</p>
            <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <div class="flex gap-4 items-center">
                <ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-1.jpg" [rounded]="false"></ngf-avatar>
                <ngf-avatar placeholder="JD" [rounded]="false" size="lg"></ngf-avatar>
                <ngf-avatar placeholder="AB" [rounded]="false" [bordered]="true"></ngf-avatar>
              </div>
            </div>
            <app-code-example [code]="squareCode"></app-code-example>
          </section>
        </div>
      </div>

      <!-- Examples Tab -->
      <div *ngIf="activeTab === 'examples'" class="space-y-12">
        <!-- Default Avatar -->
        <section id="default">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Default avatar</h2>
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
          <p class="text-gray-400 mb-4">Use the default avatar component to show a user profile picture.</p>
          <div *ngIf="!showDefaultCode" class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <div class="flex gap-4 items-center">
              <ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-5.jpg"></ngf-avatar>
              <ngf-avatar placeholder="JD" size="lg"></ngf-avatar>
              <ngf-avatar placeholder="AB" status="online"></ngf-avatar>
            </div>
          </div>
          <div *ngIf="showDefaultCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">avatar-default.html</span>
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

        <!-- Avatar Sizes -->
        <section id="sizes">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Avatar sizes</h2>
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
          <p class="text-gray-400 mb-4">The avatar component supports five different sizes: xs, sm, md, lg, and xl.</p>
          <div *ngIf="!showSizesCode" class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <div class="flex gap-4 items-center">
              <ngf-avatar size="xs" placeholder="XS"></ngf-avatar>
              <ngf-avatar size="sm" placeholder="SM"></ngf-avatar>
              <ngf-avatar size="md" placeholder="MD"></ngf-avatar>
              <ngf-avatar size="lg" placeholder="LG"></ngf-avatar>
              <ngf-avatar size="xl" placeholder="XL"></ngf-avatar>
            </div>
          </div>
          <div *ngIf="showSizesCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">avatar-sizes.html</span>
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

        <!-- Avatar with Images -->
        <section id="images">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Avatar with images</h2>
            <button
              (click)="showImagesCode = !showImagesCode"
              [class.bg-blue-600]="showImagesCode"
              [class.bg-gray-700]="!showImagesCode"
              class="px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              Code
            </button>
          </div>
          <p class="text-gray-400 mb-4">Use the imgSrc prop to display an image in the avatar.</p>
          <div *ngIf="!showImagesCode" class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <div class="flex gap-4 items-center">
              <ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-1.jpg" size="xs"></ngf-avatar>
              <ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-2.jpg" size="sm"></ngf-avatar>
              <ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-3.jpg" size="md"></ngf-avatar>
              <ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-4.jpg" size="lg"></ngf-avatar>
              <ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-5.jpg" size="xl"></ngf-avatar>
            </div>
          </div>
          <div *ngIf="showImagesCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">avatar-images.html</span>
              <button
                (click)="copyToClipboard(imagesCode)"
                class="text-gray-400 hover:text-white transition-colors"
                title="Copy code"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </button>
            </div>
            <div class="p-4 overflow-x-auto">
              <pre class="text-sm text-gray-300 font-mono"><code [innerHTML]="formatCode(imagesCode)"></code></pre>
            </div>
          </div>
        </section>

        <!-- Avatar with Placeholder -->
        <section id="placeholder">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Avatar with placeholder</h2>
            <button
              (click)="showPlaceholderCode = !showPlaceholderCode"
              [class.bg-blue-600]="showPlaceholderCode"
              [class.bg-gray-700]="!showPlaceholderCode"
              class="px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              Code
            </button>
          </div>
          <p class="text-gray-400 mb-4">When no image is provided, use the placeholder prop to show initials or text.</p>
          <div *ngIf="!showPlaceholderCode" class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <div class="flex gap-4 items-center">
              <ngf-avatar placeholder="JD"></ngf-avatar>
              <ngf-avatar placeholder="AB" size="lg"></ngf-avatar>
              <ngf-avatar placeholder="CD" size="xl"></ngf-avatar>
            </div>
          </div>
          <div *ngIf="showPlaceholderCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">avatar-placeholder.html</span>
              <button
                (click)="copyToClipboard(placeholderCode)"
                class="text-gray-400 hover:text-white transition-colors"
                title="Copy code"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </button>
            </div>
            <div class="p-4 overflow-x-auto">
              <pre class="text-sm text-gray-300 font-mono"><code [innerHTML]="formatCode(placeholderCode)"></code></pre>
            </div>
          </div>
        </section>

        <!-- Avatar with Status -->
        <section id="status">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Avatar with status</h2>
            <button
              (click)="showStatusCode = !showStatusCode"
              [class.bg-blue-600]="showStatusCode"
              [class.bg-gray-700]="!showStatusCode"
              class="px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              Code
            </button>
          </div>
          <p class="text-gray-400 mb-4">Add a status indicator to show the user's online status.</p>
          <div *ngIf="!showStatusCode" class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <div class="flex gap-4 items-center">
              <ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-1.jpg" status="online"></ngf-avatar>
              <ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-2.jpg" status="offline"></ngf-avatar>
              <ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-3.jpg" status="away"></ngf-avatar>
              <ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-4.jpg" status="busy"></ngf-avatar>
            </div>
          </div>
          <div *ngIf="showStatusCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">avatar-status.html</span>
              <button
                (click)="copyToClipboard(statusCode)"
                class="text-gray-400 hover:text-white transition-colors"
                title="Copy code"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </button>
            </div>
            <div class="p-4 overflow-x-auto">
              <pre class="text-sm text-gray-300 font-mono"><code [innerHTML]="formatCode(statusCode)"></code></pre>
            </div>
          </div>
        </section>

        <!-- Bordered Avatar -->
        <section id="bordered">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Bordered avatar</h2>
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
          <p class="text-gray-400 mb-4">Add a border to the avatar using the bordered prop.</p>
          <div *ngIf="!showBorderedCode" class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <div class="flex gap-4 items-center">
              <ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-1.jpg" [bordered]="true"></ngf-avatar>
              <ngf-avatar placeholder="JD" [bordered]="true" size="lg"></ngf-avatar>
              <ngf-avatar placeholder="AB" [bordered]="true" status="online"></ngf-avatar>
            </div>
          </div>
          <div *ngIf="showBorderedCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">avatar-bordered.html</span>
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

        <!-- Square Avatar -->
        <section id="square">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Square avatar</h2>
            <button
              (click)="showSquareCode = !showSquareCode"
              [class.bg-blue-600]="showSquareCode"
              [class.bg-gray-700]="!showSquareCode"
              class="px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              Code
            </button>
          </div>
          <p class="text-gray-400 mb-4">Use square avatars by setting rounded to false.</p>
          <div *ngIf="!showSquareCode" class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <div class="flex gap-4 items-center">
              <ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-1.jpg" [rounded]="false"></ngf-avatar>
              <ngf-avatar placeholder="JD" [rounded]="false" size="lg"></ngf-avatar>
              <ngf-avatar placeholder="AB" [rounded]="false" [bordered]="true"></ngf-avatar>
            </div>
          </div>
          <div *ngIf="showSquareCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">avatar-square.html</span>
              <button
                (click)="copyToClipboard(squareCode)"
                class="text-gray-400 hover:text-white transition-colors"
                title="Copy code"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </button>
            </div>
            <div class="p-4 overflow-x-auto">
              <pre class="text-sm text-gray-300 font-mono"><code [innerHTML]="formatCode(squareCode)"></code></pre>
            </div>
          </div>
        </section>
      </div>

      <!-- API Tab -->
      <div *ngIf="activeTab === 'api'" class="space-y-8">
        <section>
          <h2 class="text-2xl font-bold text-white mb-4">NgfAvatarComponent</h2>
          <p class="text-gray-400 mb-6">A component for displaying user profile pictures or placeholders.</p>
          
          <h3 class="text-xl font-semibold text-white mb-3">Selector</h3>
          <div class="bg-gray-800 rounded-lg p-4 mb-6">
            <code class="text-blue-400">ngf-avatar</code>
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
                  <td class="px-6 py-4 text-sm text-gray-300">The size of the avatar</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">rounded</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-300">true</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Whether to use rounded shape</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">bordered</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">boolean</td>
                  <td class="px-6 py-4 text-sm text-gray-300">false</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Whether to show a border</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">imgSrc</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">string</td>
                  <td class="px-6 py-4 text-sm text-gray-300">-</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Image source URL</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">alt</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">string</td>
                  <td class="px-6 py-4 text-sm text-gray-300">-</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Alt text for the image</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">placeholder</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">string</td>
                  <td class="px-6 py-4 text-sm text-gray-300">-</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Placeholder text when no image is provided</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">status</code></td>
                  <td class="px-6 py-4 text-sm text-gray-300">'online' | 'offline' | 'away' | 'busy'</td>
                  <td class="px-6 py-4 text-sm text-gray-300">-</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Status indicator to display</td>
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
export class AvatarDemoComponent {
  activeTab: 'overview' | 'examples' | 'api' = 'overview';
  showDefaultCode = false;
  showSizesCode = false;
  showImagesCode = false;
  showPlaceholderCode = false;
  showStatusCode = false;
  showBorderedCode = false;
  showSquareCode = false;

  defaultCode = `<ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-5.jpg"></ngf-avatar>
<ngf-avatar placeholder="JD" size="lg"></ngf-avatar>
<ngf-avatar placeholder="AB" status="online"></ngf-avatar>`;

  sizesCode = `<ngf-avatar size="xs" placeholder="XS"></ngf-avatar>
<ngf-avatar size="sm" placeholder="SM"></ngf-avatar>
<ngf-avatar size="md" placeholder="MD"></ngf-avatar>
<ngf-avatar size="lg" placeholder="LG"></ngf-avatar>
<ngf-avatar size="xl" placeholder="XL"></ngf-avatar>`;

  imagesCode = `<ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-1.jpg" size="xs"></ngf-avatar>
<ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-2.jpg" size="sm"></ngf-avatar>
<ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-3.jpg" size="md"></ngf-avatar>
<ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-4.jpg" size="lg"></ngf-avatar>
<ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-5.jpg" size="xl"></ngf-avatar>`;

  placeholderCode = `<ngf-avatar placeholder="JD"></ngf-avatar>
<ngf-avatar placeholder="AB" size="lg"></ngf-avatar>
<ngf-avatar placeholder="CD" size="xl"></ngf-avatar>`;

  statusCode = `<ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-1.jpg" status="online"></ngf-avatar>
<ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-2.jpg" status="offline"></ngf-avatar>
<ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-3.jpg" status="away"></ngf-avatar>
<ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-4.jpg" status="busy"></ngf-avatar>`;

  borderedCode = `<ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-1.jpg" [bordered]="true"></ngf-avatar>
<ngf-avatar placeholder="JD" [bordered]="true" size="lg"></ngf-avatar>
<ngf-avatar placeholder="AB" [bordered]="true" status="online"></ngf-avatar>`;

  squareCode = `<ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-1.jpg" [rounded]="false"></ngf-avatar>
<ngf-avatar placeholder="JD" [rounded]="false" size="lg"></ngf-avatar>
<ngf-avatar placeholder="AB" [rounded]="false" [bordered]="true"></ngf-avatar>`;

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
