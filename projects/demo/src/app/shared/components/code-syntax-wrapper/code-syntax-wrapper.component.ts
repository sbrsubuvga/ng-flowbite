import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { SyntaxHighlightService } from '../../services/syntax-highlight.service';

@Component({
  selector: 'app-code-syntax-wrapper',
  standalone: false,
  template: `
    <div class="code-syntax-wrapper rounded-b-base bg-gray-900 border border-gray-700 rounded-lg overflow-hidden my-6">
        <div class="relative border-b border-gray-700 bg-gray-800">
            <div class="grid w-full grid-cols-2">
              <ul class="flex text-sm font-medium text-center text-gray-400">
                <li>
                  <button type="button" class="inline-block w-full p-2 px-3 text-white bg-gray-800 border-r border-gray-700 hover:bg-gray-700">
                    {{ language | uppercase }}
                  </button>
                </li>
              </ul>
              <div class="flex justify-end">
                <button 
                  type="button" 
                  (click)="copyToClipboard()"
                  class="flex items-center px-3 py-2 text-xs font-medium text-gray-400 bg-gray-800 hover:bg-gray-700 hover:text-white border-l border-gray-700 transition-colors"
                >
                  <span *ngIf="!isCopied" class="flex items-center">
                    <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M9 8v3a1 1 0 0 1-1 1H5m11 4h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v1m4 3v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7.13a1 1 0 0 1 .24-.65L7.7 8.35A1 1 0 0 1 8.46 8H13a1 1 0 0 1 1 1Z"/>
                    </svg>
                    Copy
                  </span>
                  <span *ngIf="isCopied" class="flex items-center text-green-400">
                    <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                    </svg>
                    Copied!
                  </span>
                </button>
              </div>
            </div>
        </div>

        <div class="relative group">
            <div 
              class="overflow-hidden transition-[max-height] duration-300 ease-in-out bg-gray-900" 
              [class.max-h-72]="!isExpanded" 
              [class.max-h-[1000px]]="isExpanded"
            >
              <div class="p-4">
                <pre class="text-sm font-mono text-gray-300 overflow-x-auto whitespace-pre"><code [innerHTML]="highlightedCode || code"></code></pre>
              </div>
            </div>
            
            <!-- Gradient overlay when collapsed -->
            <div 
              *ngIf="!isExpanded" 
              class="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"
            ></div>

            <button 
              type="button" 
              (click)="toggleExpand()"
              class="w-full py-2 text-sm font-medium text-gray-400 bg-gray-800 border-t border-gray-700 hover:bg-gray-700 hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              <span>{{ isExpanded ? 'Collapse code' : 'Expand code' }}</span>
              <svg 
                class="w-4 h-4 transition-transform duration-200" 
                [class.rotate-180]="isExpanded"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
        </div>
    </div>
  `,
  styles: []
})
export class CodeSyntaxWrapperComponent implements OnChanges {
  @Input() code = '';
  @Input() language = 'html';

  isExpanded = false;
  isCopied = false;
  highlightedCode: SafeHtml = '';

  constructor(private highlightService: SyntaxHighlightService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['code'] || changes['language']) {
      this.highlightedCode = this.highlightService.highlight(this.code, this.language);
    }
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.code).then(() => {
      this.isCopied = true;
      setTimeout(() => {
        this.isCopied = false;
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy code:', err);
    });
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
