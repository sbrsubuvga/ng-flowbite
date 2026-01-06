import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  template: `
    <aside class="fixed top-16 left-0 z-30 w-64 h-[calc(100vh-4rem)] overflow-y-auto bg-gray-900 border-r border-gray-800">
      <div class="p-4">
        <div class="mb-6">
          <h2 class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">COMPONENTS</h2>
          <nav class="space-y-1">
            <a
              *ngFor="let item of components"
              [routerLink]="item.path"
              routerLinkActive="bg-blue-600 text-white"
              [routerLinkActiveOptions]="{exact: item.exact}"
              class="flex items-center px-3 py-2 text-sm text-gray-300 rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
              [class.bg-blue-600]="router.url.includes(item.path)"
              [class.text-white]="router.url.includes(item.path)"
            >
              {{ item.label }}
            </a>
          </nav>
        </div>
      </div>
    </aside>
  `,
  styles: []
})
export class SidebarComponent {
  components = [
    { path: '/getting-started', label: 'Getting Started', exact: true },
    { path: '/components/accordion', label: 'Accordion', exact: false },
    { path: '/components/alerts', label: 'Alerts', exact: false },
    { path: '/components/avatar', label: 'Avatar', exact: false },
    { path: '/components/badge', label: 'Badge', exact: false },
    { path: '/components/banner', label: 'Banner', exact: false },
    { path: '/components/bottom-navigation', label: 'Bottom Navigation', exact: false },
    { path: '/components/breadcrumb', label: 'Breadcrumb', exact: false },
    { path: '/components/buttons', label: 'Buttons', exact: false },
    { path: '/components/button-group', label: 'Button Group', exact: false },
    { path: '/components/card', label: 'Card', exact: false },
    { path: '/components/carousel', label: 'Carousel', exact: false },
    { path: '/components/chat-bubble', label: 'Chat Bubble', exact: false },
    { path: '/components/clipboard', label: 'Clipboard', exact: false },
    { path: '/components/datepicker', label: 'Datepicker', exact: false },
    { path: '/components/device-mockups', label: 'Device Mockups', exact: false },
    { path: '/components/drawer', label: 'Drawer', exact: false },
    { path: '/components/dropdowns', label: 'Dropdowns', exact: false },
    { path: '/components/footer', label: 'Footer', exact: false },
    { path: '/components/forms', label: 'Forms', exact: false },
    { path: '/components/gallery', label: 'Gallery', exact: false },
    { path: '/components/indicators', label: 'Indicators', exact: false },
    { path: '/components/jumbotron', label: 'Jumbotron', exact: false },
    { path: '/components/kbd', label: 'KBD', exact: false },
    { path: '/components/list-group', label: 'List Group', exact: false },
    { path: '/components/mega-menu', label: 'Mega Menu', exact: false },
    { path: '/components/modal', label: 'Modal', exact: false },
    { path: '/components/navbar', label: 'Navbar', exact: false },
    { path: '/components/pagination', label: 'Pagination', exact: false },
    { path: '/components/progress', label: 'Progress', exact: false },
    { path: '/components/qr-code', label: 'QR Code', exact: false },
    { path: '/components/rating', label: 'Rating', exact: false },
    { path: '/components/sidebar', label: 'Sidebar', exact: false },
    { path: '/components/skeleton', label: 'Skeleton', exact: false },
    { path: '/components/speed-dial', label: 'Speed Dial', exact: false },
    { path: '/components/spinner', label: 'Spinner', exact: false },
    { path: '/components/stepper', label: 'Stepper', exact: false },
    { path: '/components/table', label: 'Table', exact: false },
    { path: '/components/tabs', label: 'Tabs', exact: false },
    { path: '/components/timeline', label: 'Timeline', exact: false },
    { path: '/components/toast', label: 'Toast', exact: false },
    { path: '/components/typography', label: 'Typography', exact: false },
    { path: '/components/video', label: 'Video', exact: false }
  ];

  constructor(public router: Router) {}
}

