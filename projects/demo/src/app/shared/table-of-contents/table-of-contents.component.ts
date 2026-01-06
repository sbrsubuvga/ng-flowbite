import { Component, Input } from '@angular/core';

export interface TocItem {
  id: string;
  label: string;
  level: number;
}

@Component({
  selector: 'app-table-of-contents',
  standalone: false,
  template: `
    <div class="sticky top-20">
      <div class="bg-gray-800 border border-gray-700 rounded-lg p-4">
        <h3 class="text-sm font-semibold text-gray-300 uppercase mb-4">ON THIS PAGE</h3>
        <nav class="space-y-2">
          <a
            *ngFor="let item of items"
            [href]="'#' + item.id"
            [class]="getItemClasses(item.level)"
            class="block text-sm text-gray-400 hover:text-white transition-colors"
          >
            {{ item.label }}
          </a>
        </nav>
      </div>
    </div>
  `,
  styles: []
})
export class TableOfContentsComponent {
  @Input() items: TocItem[] = [];

  getItemClasses(level: number): string {
    const base = 'block text-sm transition-colors';
    const indent = level > 1 ? 'ml-4' : '';
    return `${base} ${indent}`;
  }
}

