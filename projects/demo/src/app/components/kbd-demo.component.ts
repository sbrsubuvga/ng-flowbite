import { Component } from '@angular/core';

@Component({
  selector: 'app-kbd-demo',
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
      <h1 class="text-4xl font-bold text-white mb-2">Tailwind CSS KBD - Flowbite</h1>
      <p class="text-xl text-gray-400 mb-8">Use the KBD component to show keyboard keys or shortcuts.</p>
      <div class="space-y-12">
        <section id="default">
          <h2 class="text-2xl font-bold text-white mb-4">Default KBD</h2>
          <p class="text-gray-400 mb-4">Use the default KBD component to show keyboard keys.</p>
          <app-demo-wrapper
            componentName="Default KBD"
            githubLink="https://github.com/themesberg/flowbite-angular/blob/main/projects/ng-flowbite/src/lib/components/kbd/kbd.component.ts"
          >
            <div class="flex flex-wrap gap-2 items-center">
              <p class="text-gray-300">Press <ngf-kbd>Ctrl</ngf-kbd> + <ngf-kbd>K</ngf-kbd> to open search</p>
              <ngf-kbd-group>
                <ngf-kbd>Ctrl</ngf-kbd>
                <span class="text-gray-400">+</span>
                <ngf-kbd>K</ngf-kbd>
              </ngf-kbd-group>
            </div>
          </app-demo-wrapper>
          <app-code-syntax-wrapper [code]="defaultCode" language="html"></app-code-syntax-wrapper>
        </section>
      </div>
    </div>
  `,
  styles: []
})
export class KbdDemoComponent {
  defaultCode = `<ngf-kbd>Ctrl</ngf-kbd> + <ngf-kbd>K</ngf-kbd>

<ngf-kbd-group>
  <ngf-kbd>Ctrl</ngf-kbd>
  <span>+</span>
  <ngf-kbd>K</ngf-kbd>
</ngf-kbd-group>`;
}

