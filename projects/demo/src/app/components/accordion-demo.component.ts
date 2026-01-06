import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion-demo',
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
      <h1 class="text-4xl font-bold text-white mb-2">Accordion</h1>
      <p class="text-xl text-gray-400 mb-8">
        Use the accordion component to show hidden information based on the collapse and expand state of the child elements.
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
            The accordion component is a collection of vertically collapsing header and body elements that can be used to show and hide information based on the Tailwind CSS utility classes and JavaScript from Flowbite. A popular use case would be the "Frequently Asked Questions" section of a website or page when you can show questions and answers for each child element.
          </p>
          
          <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-4">
            <li><code class="text-blue-400">type="default"</code> - show only one active child element (collapse mode)</li>
            <li><code class="text-blue-400">type="always-open"</code> - keep multiple elements open</li>
            <li><code class="text-blue-400">type="flush"</code> - remove borders and rounded corners for a cleaner look</li>
          </ul>
          <p class="text-gray-300 leading-relaxed mt-4">
            The accordion uses content projection with <code class="text-blue-400">[ngfAccordionHeader]</code> for the header content and <code class="text-blue-400">[ngfAccordionBody]</code> for the collapsible body content.
          </p>
        </div>

        <div class="space-y-12">
          <!-- Default Accordion -->
          <section id="default">
            <h2 class="text-2xl font-bold text-white mb-4">Default accordion</h2>
            <p class="text-gray-400 mb-4">Use the default type to collapse every other child element when expanding a single one.</p>
            <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <ngf-accordion>
                <ngf-accordion-item [isOpen]="true">
                  <div ngfAccordionHeader>What is Flowbite?</div>
                  <div ngfAccordionBody>
                    <p class="mb-2 text-gray-700 dark:text-gray-300">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                    <p class="text-gray-700 dark:text-gray-300">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-400 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                  </div>
                </ngf-accordion-item>
                <ngf-accordion-item [isOpen]="false">
                  <div ngfAccordionHeader>Is there a Figma file available?</div>
                  <div ngfAccordionBody>
                    <p class="mb-2 text-gray-700 dark:text-gray-300">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                    <p class="text-gray-700 dark:text-gray-300">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-400 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                  </div>
                </ngf-accordion-item>
                <ngf-accordion-item [isOpen]="false">
                  <div ngfAccordionHeader>What are the differences between Flowbite and Tailwind UI?</div>
                  <div ngfAccordionBody>
                    <p class="mb-2 text-gray-700 dark:text-gray-300">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                    <p class="mb-2 text-gray-700 dark:text-gray-300">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                    <p class="mb-2 text-gray-700 dark:text-gray-300">Learn more about these technologies:</p>
                    <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                      <li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-400 hover:underline">Flowbite Pro</a></li>
                      <li><a href="https://tailwindui.com/" class="text-blue-600 dark:text-blue-400 hover:underline">Tailwind UI</a></li>
                    </ul>
                  </div>
                </ngf-accordion-item>
              </ngf-accordion>
            </div>
            <app-code-example [code]="defaultCode"></app-code-example>
          </section>

          <!-- Separated Cards -->
          <section id="separated">
            <h2 class="text-2xl font-bold text-white mb-4">Separated cards</h2>
            <p class="text-gray-400 mb-4">Use the separated type to show each accordion item as a separate card with spacing between them.</p>
            <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <ngf-accordion [type]="'separated'">
                <ngf-accordion-item [isOpen]="true">
                  <div ngfAccordionHeader>What is Flowbite?</div>
                  <div ngfAccordionBody>
                    <p class="mb-2 text-gray-700 dark:text-gray-300">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                    <p class="text-gray-700 dark:text-gray-300">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-400 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                  </div>
                </ngf-accordion-item>
                <ngf-accordion-item [isOpen]="false">
                  <div ngfAccordionHeader>Is there a Figma file available?</div>
                  <div ngfAccordionBody>
                    <p class="mb-2 text-gray-700 dark:text-gray-300">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                    <p class="text-gray-700 dark:text-gray-300">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-400 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                  </div>
                </ngf-accordion-item>
                <ngf-accordion-item [isOpen]="false">
                  <div ngfAccordionHeader>What are the differences between Flowbite and Tailwind UI?</div>
                  <div ngfAccordionBody>
                    <p class="mb-2 text-gray-700 dark:text-gray-300">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                    <p class="mb-2 text-gray-700 dark:text-gray-300">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                    <p class="mb-2 text-gray-700 dark:text-gray-300">Learn more about these technologies:</p>
                    <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                      <li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-400 hover:underline">Flowbite Pro</a></li>
                      <li><a href="https://tailwindui.com/" class="text-blue-600 dark:text-blue-400 hover:underline">Tailwind UI</a></li>
                    </ul>
                  </div>
                </ngf-accordion-item>
              </ngf-accordion>
            </div>
            <app-code-example [code]="separatedCode"></app-code-example>
          </section>

          <!-- Always Open -->
          <section id="always-open">
            <h2 class="text-2xl font-bold text-white mb-4">Always open</h2>
            <p class="text-gray-400 mb-4">Use the always-open type to keep multiple elements open at the same time.</p>
            <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <ngf-accordion [type]="'always-open'">
                <ngf-accordion-item>
                  <div ngfAccordionHeader>What is Flowbite?</div>
                  <div ngfAccordionBody>
                    <p class="text-gray-700 dark:text-gray-300">Flowbite is an open-source library of interactive components built on top of Tailwind CSS.</p>
                  </div>
                </ngf-accordion-item>
                <ngf-accordion-item>
                  <div ngfAccordionHeader>Is there a Figma file available?</div>
                  <div ngfAccordionBody>
                    <p class="text-gray-700 dark:text-gray-300">Flowbite comes with both Figma design files and code based on Tailwind CSS.</p>
                  </div>
                </ngf-accordion-item>
                <ngf-accordion-item>
                  <div ngfAccordionHeader>What are the differences between Flowbite and Tailwind UI?</div>
                  <div ngfAccordionBody>
                    <p class="text-gray-700 dark:text-gray-300">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product.</p>
                  </div>
                </ngf-accordion-item>
              </ngf-accordion>
            </div>
            <app-code-example [code]="alwaysOpenCode"></app-code-example>
          </section>

          <!-- Flush Accordion -->
          <section id="flush">
            <h2 class="text-2xl font-bold text-white mb-4">Flush accordion</h2>
            <p class="text-gray-400 mb-4">Use the flush variant to remove borders and rounded corners for a cleaner look.</p>
            <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <ngf-accordion [type]="'flush'">
                <ngf-accordion-item [isOpen]="false">
                  <div ngfAccordionHeader>What is Flowbite?</div>
                  <div ngfAccordionBody>
                    <p class="text-gray-700 dark:text-gray-300">Flowbite is an open-source library of interactive components built on top of Tailwind CSS.</p>
                  </div>
                </ngf-accordion-item>
                <ngf-accordion-item [isOpen]="false">
                  <div ngfAccordionHeader>Is there a Figma file available?</div>
                  <div ngfAccordionBody>
                    <p class="text-gray-700 dark:text-gray-300">Flowbite comes with both Figma design files and code based on Tailwind CSS.</p>
                  </div>
                </ngf-accordion-item>
                <ngf-accordion-item [isOpen]="false">
                  <div ngfAccordionHeader>What are the differences between Flowbite and Tailwind UI?</div>
                  <div ngfAccordionBody>
                    <p class="text-gray-700 dark:text-gray-300">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product.</p>
                  </div>
                </ngf-accordion-item>
              </ngf-accordion>
            </div>
            <app-code-example [code]="flushCode"></app-code-example>
          </section>
        </div>
      </div>

      <!-- Examples Tab -->
      <div *ngIf="activeTab === 'examples'" class="space-y-12">
        <!-- Default Accordion -->
        <section id="default">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Default accordion</h2>
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
          <p class="text-gray-400 mb-4">Use the default type to collapse every other child element when expanding a single one.</p>
          <div *ngIf="!showDefaultCode" class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <ngf-accordion>
              <ngf-accordion-item [isOpen]="true">
                <div ngfAccordionHeader>What is Flowbite?</div>
                <div ngfAccordionBody>
                  <p class="mb-2 text-gray-700 dark:text-gray-300">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                  <p class="text-gray-700 dark:text-gray-300">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-400 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                </div>
              </ngf-accordion-item>
              <ngf-accordion-item [isOpen]="false">
                <div ngfAccordionHeader>Is there a Figma file available?</div>
                <div ngfAccordionBody>
                  <p class="mb-2 text-gray-700 dark:text-gray-300">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                  <p class="text-gray-700 dark:text-gray-300">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-400 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                </div>
              </ngf-accordion-item>
              <ngf-accordion-item [isOpen]="false">
                <div ngfAccordionHeader>What are the differences between Flowbite and Tailwind UI?</div>
                <div ngfAccordionBody>
                  <p class="mb-2 text-gray-700 dark:text-gray-300">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                  <p class="mb-2 text-gray-700 dark:text-gray-300">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                  <p class="mb-2 text-gray-700 dark:text-gray-300">Learn more about these technologies:</p>
                  <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                    <li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-400 hover:underline">Flowbite Pro</a></li>
                    <li><a href="https://tailwindui.com/" class="text-blue-600 dark:text-blue-400 hover:underline">Tailwind UI</a></li>
                  </ul>
                </div>
              </ngf-accordion-item>
            </ngf-accordion>
          </div>
          <div *ngIf="showDefaultCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">accordion-default.html</span>
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

        <!-- Always Open -->
        <section id="always-open">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Always open</h2>
            <button
              (click)="showAlwaysOpenCode = !showAlwaysOpenCode"
              [class.bg-blue-600]="showAlwaysOpenCode"
              [class.bg-gray-700]="!showAlwaysOpenCode"
              class="px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              Code
            </button>
          </div>
          <p class="text-gray-400 mb-4">Use the always-open type to keep multiple elements open at the same time.</p>
          <div *ngIf="!showAlwaysOpenCode" class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <ngf-accordion [type]="'always-open'">
              <ngf-accordion-item>
                <div ngfAccordionHeader>What is Flowbite?</div>
                <div ngfAccordionBody>
                  <p class="text-gray-700 dark:text-gray-300">Flowbite is an open-source library of interactive components built on top of Tailwind CSS.</p>
                </div>
              </ngf-accordion-item>
              <ngf-accordion-item>
                <div ngfAccordionHeader>Is there a Figma file available?</div>
                <div ngfAccordionBody>
                  <p class="text-gray-700 dark:text-gray-300">Flowbite comes with both Figma design files and code based on Tailwind CSS.</p>
                </div>
              </ngf-accordion-item>
              <ngf-accordion-item>
                <div ngfAccordionHeader>What are the differences between Flowbite and Tailwind UI?</div>
                <div ngfAccordionBody>
                  <p class="text-gray-700 dark:text-gray-300">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product.</p>
                </div>
              </ngf-accordion-item>
            </ngf-accordion>
          </div>
          <div *ngIf="showAlwaysOpenCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">accordion-always-open.html</span>
              <button
                (click)="copyToClipboard(alwaysOpenCode)"
                class="text-gray-400 hover:text-white transition-colors"
                title="Copy code"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </button>
            </div>
            <div class="p-4 overflow-x-auto">
              <pre class="text-sm text-gray-300 font-mono"><code [innerHTML]="formatCode(alwaysOpenCode)"></code></pre>
            </div>
          </div>
        </section>

        <!-- Separated Cards -->
        <section id="separated">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Separated cards</h2>
            <button
              (click)="showSeparatedCode = !showSeparatedCode"
              [class.bg-blue-600]="showSeparatedCode"
              [class.bg-gray-700]="!showSeparatedCode"
              class="px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              Code
            </button>
          </div>
          <p class="text-gray-400 mb-4">Use the separated type to show each accordion item as a separate card with spacing between them.</p>
          <div *ngIf="!showSeparatedCode" class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <ngf-accordion [type]="'separated'">
              <ngf-accordion-item [isOpen]="true">
                <div ngfAccordionHeader>What is Flowbite?</div>
                <div ngfAccordionBody>
                  <p class="mb-2 text-gray-700 dark:text-gray-300">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                  <p class="text-gray-700 dark:text-gray-300">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-400 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                </div>
              </ngf-accordion-item>
              <ngf-accordion-item [isOpen]="false">
                <div ngfAccordionHeader>Is there a Figma file available?</div>
                <div ngfAccordionBody>
                  <p class="mb-2 text-gray-700 dark:text-gray-300">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                  <p class="text-gray-700 dark:text-gray-300">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-400 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                </div>
              </ngf-accordion-item>
              <ngf-accordion-item [isOpen]="false">
                <div ngfAccordionHeader>What are the differences between Flowbite and Tailwind UI?</div>
                <div ngfAccordionBody>
                  <p class="mb-2 text-gray-700 dark:text-gray-300">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                  <p class="mb-2 text-gray-700 dark:text-gray-300">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                  <p class="mb-2 text-gray-700 dark:text-gray-300">Learn more about these technologies:</p>
                  <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                    <li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-400 hover:underline">Flowbite Pro</a></li>
                    <li><a href="https://tailwindui.com/" class="text-blue-600 dark:text-blue-400 hover:underline">Tailwind UI</a></li>
                  </ul>
                </div>
              </ngf-accordion-item>
            </ngf-accordion>
          </div>
          <div *ngIf="showSeparatedCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">accordion-separated.html</span>
              <button
                (click)="copyToClipboard(separatedCode)"
                class="text-gray-400 hover:text-white transition-colors"
                title="Copy code"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </button>
            </div>
            <div class="p-4 overflow-x-auto">
              <pre class="text-sm text-gray-300 font-mono"><code [innerHTML]="formatCode(separatedCode)"></code></pre>
            </div>
          </div>
        </section>

        <!-- Flush Accordion -->
        <section id="flush">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-white">Flush accordion</h2>
            <button
              (click)="showFlushCode = !showFlushCode"
              [class.bg-blue-600]="showFlushCode"
              [class.bg-gray-700]="!showFlushCode"
              class="px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              Code
            </button>
          </div>
          <p class="text-gray-400 mb-4">Use the flush variant to remove borders and rounded corners for a cleaner look.</p>
          <div *ngIf="!showFlushCode" class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <ngf-accordion [type]="'flush'">
              <ngf-accordion-item [isOpen]="false">
                <div ngfAccordionHeader>What is Flowbite?</div>
                <div ngfAccordionBody>
                  <p class="text-gray-700 dark:text-gray-300">Flowbite is an open-source library of interactive components built on top of Tailwind CSS.</p>
                </div>
              </ngf-accordion-item>
              <ngf-accordion-item [isOpen]="false">
                <div ngfAccordionHeader>Is there a Figma file available?</div>
                <div ngfAccordionBody>
                  <p class="text-gray-700 dark:text-gray-300">Flowbite comes with both Figma design files and code based on Tailwind CSS.</p>
                </div>
              </ngf-accordion-item>
              <ngf-accordion-item [isOpen]="false">
                <div ngfAccordionHeader>What are the differences between Flowbite and Tailwind UI?</div>
                <div ngfAccordionBody>
                  <p class="text-gray-700 dark:text-gray-300">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product.</p>
                </div>
              </ngf-accordion-item>
            </ngf-accordion>
          </div>
          <div *ngIf="showFlushCode" class="mb-4 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <span class="text-sm font-medium text-gray-300">accordion-flush.html</span>
              <button
                (click)="copyToClipboard(flushCode)"
                class="text-gray-400 hover:text-white transition-colors"
                title="Copy code"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </button>
            </div>
            <div class="p-4 overflow-x-auto">
              <pre class="text-sm text-gray-300 font-mono"><code [innerHTML]="formatCode(flushCode)"></code></pre>
            </div>
          </div>
        </section>
      </div>

      <!-- API Tab -->
      <div *ngIf="activeTab === 'api'" class="space-y-8">
        <!-- NgfAccordionComponent -->
        <section>
          <h2 class="text-2xl font-bold text-white mb-4">NgfAccordionComponent</h2>
          <p class="text-gray-400 mb-6">The container component for accordion items.</p>
          
          <h3 class="text-xl font-semibold text-white mb-3">Selector</h3>
          <div class="bg-gray-800 rounded-lg p-4 mb-6">
            <code class="text-blue-400">ngf-accordion</code>
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">closeOthers</code></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">boolean</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">false</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Whether closing one item should close others (deprecated, use type instead)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">type</code></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">'default' | 'flush' | 'always-open' | 'separated'</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">'default'</td>
                  <td class="px-6 py-4 text-sm text-gray-300">The accordion type. 'default' collapses other items in a connected container, 'always-open' allows multiple open, 'flush' removes borders, 'separated' shows each item as a separate card</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- NgfAccordionItemComponent -->
        <section>
          <h2 class="text-2xl font-bold text-white mb-4">NgfAccordionItemComponent</h2>
          <p class="text-gray-400 mb-6">An individual accordion item that can be expanded or collapsed.</p>
          
          <h3 class="text-xl font-semibold text-white mb-3">Selector</h3>
          <div class="bg-gray-800 rounded-lg p-4 mb-6">
            <code class="text-blue-400">ngf-accordion-item</code>
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">itemId</code></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">string</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">auto-generated</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Unique identifier for the accordion item body</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">headerId</code></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">string</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">auto-generated</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Unique identifier for the accordion item header</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">isFirst</code></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">boolean (computed)</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">auto</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Automatically computed based on position in the accordion (read-only, for styling)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">isLast</code></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">boolean (computed)</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">auto</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Automatically computed based on position in the accordion (read-only, for styling)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">isOpen</code></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">boolean</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">false</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Whether the accordion item is currently open</td>
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">opened</code></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">EventEmitter&lt;void&gt;</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Emitted when the accordion item is opened</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><code class="text-blue-400">closed</code></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">EventEmitter&lt;void&gt;</td>
                  <td class="px-6 py-4 text-sm text-gray-300">Emitted when the accordion item is closed</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3">Content Projection</h3>
          <div class="bg-gray-800 rounded-lg p-4 mb-6">
            <p class="text-gray-300 mb-2">The accordion item uses content projection with the following selectors:</p>
            <ul class="list-disc list-inside text-gray-300 space-y-1 ml-4">
              <li><code class="text-blue-400">[ngfAccordionHeader]</code> - Content for the accordion header/button</li>
              <li><code class="text-blue-400">[ngfAccordionBody]</code> - Content for the accordion body (collapsible content)</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  `,
  styles: []
})
export class AccordionDemoComponent {
  activeTab: 'overview' | 'examples' | 'api' = 'overview';
  showDefaultCode = false;
  showSeparatedCode = false;
  showAlwaysOpenCode = false;
  showFlushCode = false;
  defaultCode = `<ngf-accordion>
  <ngf-accordion-item [isOpen]="true">
    <div ngfAccordionHeader>What is Flowbite?</div>
    <div ngfAccordionBody>
      <p class="mb-2">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
      <p>Check out this guide to learn how to get started and start developing websites even faster with components on top of Tailwind CSS.</p>
    </div>
  </ngf-accordion-item>
  <ngf-accordion-item [isOpen]="false">
    <div ngfAccordionHeader>Is there a Figma file available?</div>
    <div ngfAccordionBody>
      <p>Flowbite comes with both Figma design files and code based on Tailwind CSS.</p>
    </div>
  </ngf-accordion-item>
  <ngf-accordion-item [isOpen]="false">
    <div ngfAccordionHeader>What are the differences between Flowbite and Tailwind UI?</div>
    <div ngfAccordionBody>
      <p>The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product.</p>
    </div>
  </ngf-accordion-item>
</ngf-accordion>`;

  alwaysOpenCode = `<ngf-accordion [type]="'always-open'">
  <ngf-accordion-item>
    <div ngfAccordionHeader>What is Flowbite?</div>
    <div ngfAccordionBody>
      <p>Flowbite is an open-source library of interactive components built on top of Tailwind CSS.</p>
    </div>
  </ngf-accordion-item>
  <ngf-accordion-item>
    <div ngfAccordionHeader>Is there a Figma file available?</div>
    <div ngfAccordionBody>
      <p>Flowbite comes with both Figma design files and code based on Tailwind CSS.</p>
    </div>
  </ngf-accordion-item>
  <ngf-accordion-item>
    <div ngfAccordionHeader>What are the differences between Flowbite and Tailwind UI?</div>
    <div ngfAccordionBody>
      <p>The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product.</p>
    </div>
  </ngf-accordion-item>
</ngf-accordion>`;

  separatedCode = `<ngf-accordion [type]="'separated'">
  <ngf-accordion-item [isOpen]="true">
    <div ngfAccordionHeader>What is Flowbite?</div>
    <div ngfAccordionBody>
      <p class="mb-2">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
      <p>Check out this guide to learn how to get started and start developing websites even faster with components on top of Tailwind CSS.</p>
    </div>
  </ngf-accordion-item>
  <ngf-accordion-item [isOpen]="false">
    <div ngfAccordionHeader>Is there a Figma file available?</div>
    <div ngfAccordionBody>
      <p class="mb-2">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
      <p>Check out the Figma design system based on the utility classes from Tailwind CSS and components from Flowbite.</p>
    </div>
  </ngf-accordion-item>
  <ngf-accordion-item [isOpen]="false">
    <div ngfAccordionHeader>What are the differences between Flowbite and Tailwind UI?</div>
    <div ngfAccordionBody>
      <p class="mb-2">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product.</p>
      <p class="mb-2">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
    </div>
  </ngf-accordion-item>
</ngf-accordion>`;

  flushCode = `<ngf-accordion [type]="'flush'">
  <ngf-accordion-item [isOpen]="false">
    <div ngfAccordionHeader>What is Flowbite?</div>
    <div ngfAccordionBody>
      <p>Flowbite is an open-source library of interactive components built on top of Tailwind CSS.</p>
    </div>
  </ngf-accordion-item>
  <ngf-accordion-item [isOpen]="false">
    <div ngfAccordionHeader>Is there a Figma file available?</div>
    <div ngfAccordionBody>
      <p>Flowbite comes with both Figma design files and code based on Tailwind CSS.</p>
    </div>
  </ngf-accordion-item>
  <ngf-accordion-item [isOpen]="false">
    <div ngfAccordionHeader>What are the differences between Flowbite and Tailwind UI?</div>
    <div ngfAccordionBody>
      <p>The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product.</p>
    </div>
  </ngf-accordion-item>
</ngf-accordion>`;

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
      // You could add a toast notification here
      console.log('Code copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy code:', err);
    });
  }
}

