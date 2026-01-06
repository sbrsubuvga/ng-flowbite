import { Component } from '@angular/core';

@Component({
  selector: 'app-mega-menu-demo',
  standalone: false,
  template: `
    <div>
      <div class="mb-4">
        <span class="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-900/50 border border-blue-700 rounded-lg text-sm text-blue-300">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
          </svg>
          Requires Flowbite JS >
        </span>
      </div>
      <h1 class="text-4xl font-bold text-white mb-2">Tailwind CSS Mega Menu - Flowbite</h1>
      <p class="text-xl text-gray-400 mb-8">Use the mega menu component to show a large dropdown menu with multiple columns.</p>
      <div class="space-y-12">
        <section id="default">
          <h2 class="text-2xl font-bold text-white mb-4">Default mega menu</h2>
          <p class="text-gray-400 mb-4">Use the default mega menu component to show large dropdown menus.</p>
          <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <ngf-mega-menu label="Company">
              <ngf-mega-menu-column>
                <ngf-mega-menu-item href="/about">About</ngf-mega-menu-item>
                <ngf-mega-menu-item href="/careers">Careers</ngf-mega-menu-item>
                <ngf-mega-menu-item href="/contact">Contact</ngf-mega-menu-item>
              </ngf-mega-menu-column>
            </ngf-mega-menu>
          </div>
          <app-code-example [code]="defaultCode"></app-code-example>
        </section>
      </div>
    </div>
  `,
  styles: []
})
export class MegaMenuDemoComponent {
  defaultCode = `<ngf-mega-menu label="Company">
  <ngf-mega-menu-column>
    <ngf-mega-menu-item href="/about">About</ngf-mega-menu-item>
    <ngf-mega-menu-item href="/careers">Careers</ngf-mega-menu-item>
  </ngf-mega-menu-column>
</ngf-mega-menu>`;
}

