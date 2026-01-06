import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-example',
  standalone: false,
  template: `
    <div class="mt-4">
      <div class="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
        <div class="bg-gray-900 px-4 py-2 border-b border-gray-700 flex items-center justify-between">
          <span class="text-xs text-gray-400">Code example</span>
          <button class="text-gray-400 hover:text-white">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
            </svg>
          </button>
        </div>
        <div class="p-4 overflow-x-auto">
          <pre class="text-gray-300 text-sm font-mono"><code>{{ code }}</code></pre>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class CodeExampleComponent {
  @Input() code = '';
}

