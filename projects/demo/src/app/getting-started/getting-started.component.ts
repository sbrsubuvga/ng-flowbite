import { Component } from '@angular/core';

@Component({
  selector: 'app-getting-started',
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
      <h1 class="text-4xl font-bold text-white mb-2">Tailwind CSS Components - ng-flowbite</h1>
      <p class="text-xl text-gray-400 mb-8">
        Use the ng-flowbite component library to build modern Angular applications with Flowbite (Tailwind CSS) components with APIs designed for the Angular ecosystem.
      </p>

      <!-- Introduction -->
      <div class="prose prose-invert max-w-none mb-8">
        <p class="text-gray-300 leading-relaxed">
          ng-flowbite is an Angular component library that provides all Flowbite UI components as Angular components.
          It's built from the ground up using Flowbite (Tailwind CSS) with APIs designed for the Angular ecosystem.
          This library includes over 56 types of UI components including buttons, alerts, breadcrumbs, pagination,
          navbars, modals, dropdowns, and many more interactive elements.
        </p>
      </div>

      <div class="space-y-12">

        <!-- Installation -->
        <section id="installation">
          <h2 class="text-2xl font-bold text-white mb-4">Installation</h2>
          <p class="text-gray-400 mb-4">
            Install ng-flowbite using npm:
          </p>
          <app-code-example [code]="installCode"></app-code-example>
        </section>

        <!-- Import Module -->
        <section id="import">
          <h2 class="text-2xl font-bold text-white mb-4">Import Module</h2>
          <p class="text-gray-400 mb-4">
            Import the NgFlowbiteModule in your app module:
          </p>
          <app-code-example [code]="importCode"></app-code-example>
        </section>

        <!-- Basic Usage -->
        <section id="usage">
          <h2 class="text-2xl font-bold text-white mb-4">Basic Usage</h2>
          <p class="text-gray-400 mb-4">
            Here's a simple example using a button component:
          </p>
          <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <ngf-button color="blue">Click me</ngf-button>
          </div>
          <app-code-example [code]="usageCode"></app-code-example>
        </section>

        <!-- Features -->
        <section id="features">
          <h2 class="text-2xl font-bold text-white mb-4">Features</h2>
          <ul class="list-disc list-inside space-y-2 text-gray-300 ml-4">
            <li>56+ UI components built with Tailwind CSS</li>
            <li>Full Angular Forms integration with ControlValueAccessor</li>
            <li>Service-based modals and drawers (similar to ng-bootstrap)</li>
            <li>Dark mode support</li>
            <li>TypeScript support</li>
            <li>Accessible components with ARIA attributes</li>
            <li>Fully customizable with Tailwind CSS classes</li>
          </ul>
        </section>
      </div>
    </div>
  `,
  styles: []
})
export class GettingStartedComponent {
  installCode = `npm install @ng-flowbite/ng-flowbite`;

  importCode = `import { NgModule } from '@angular/core';
import { NgFlowbiteModule } from '@ng-flowbite/ng-flowbite';

@NgModule({
  imports: [
    NgFlowbiteModule
  ]
})
export class AppModule { }`;

  usageCode = `<ngf-button color="blue">Click me</ngf-button>`;
}

