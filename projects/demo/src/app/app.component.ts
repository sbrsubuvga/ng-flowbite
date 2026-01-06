import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  template: `
    <div class="min-h-screen bg-gray-900">
      <app-header></app-header>
      <div class="flex">
        <app-sidebar></app-sidebar>
        <main class="flex-1 lg:ml-64">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div class="lg:col-span-2">
                <router-outlet></router-outlet>
              </div>
              <div class="hidden lg:block">
                <app-table-of-contents [items]="tocItems"></app-table-of-contents>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent {
  tocItems = [
    { id: 'default', label: 'Default accordion', level: 1 },
    { id: 'separated', label: 'Separated cards', level: 1 },
    { id: 'always-open', label: 'Always open', level: 1 },
    { id: 'colors', label: 'Color options', level: 1 },
    { id: 'flush', label: 'Flush accordion', level: 1 },
    { id: 'arrow', label: 'Arrow style', level: 1 },
    { id: 'nesting', label: 'Nesting accordions', level: 1 },
    { id: 'javascript', label: 'JavaScript behaviour', level: 1 }
  ];
}

