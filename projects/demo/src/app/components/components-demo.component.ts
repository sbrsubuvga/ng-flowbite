import { Component } from '@angular/core';
import { 
  NgfModalService, 
  NgfDrawerService, 
  NgfToastService, 
  NgfDrawerConfig, 
  NgfActiveModal, 
  NgfActiveDrawer
} from '@ng-flowbite/ng-flowbite';

@Component({
  selector: 'app-components-demo',
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
        Use the ng-flowbite component library to build modern Angular applications with Flowbite (Tailwind CSS) components.
      </p>

      <div class="space-y-12">

      <!-- Buttons -->
      <section id="buttons">
        <h2 class="text-2xl font-bold text-white mb-4">Buttons</h2>
        <p class="text-gray-400 mb-4">Button component with multiple variants</p>
        <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
          <div class="flex flex-wrap gap-4">
            <ngf-button color="blue">Blue Button</ngf-button>
            <ngf-button color="green">Green Button</ngf-button>
            <ngf-button color="red">Red Button</ngf-button>
            <ngf-button color="yellow">Yellow Button</ngf-button>
            <ngf-button color="blue" [outline]="true">Outline Button</ngf-button>
          </div>
        </div>
        <app-code-syntax-wrapper [code]="buttonCode" language="html"></app-code-syntax-wrapper>
      </section>

      <!-- Alerts -->
      <section id="alerts">
        <h2 class="text-2xl font-bold text-white mb-4">Alerts</h2>
        <p class="text-gray-400 mb-4">Alert messages with dismissible support</p>
        <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
          <div class="space-y-4">
            <ngf-alert color="info" [dismissible]="true" (onDismiss)="onAlertDismiss()">
              A simple info alert message.
            </ngf-alert>
            <ngf-alert color="success" [dismissible]="true">
              A simple success alert message.
            </ngf-alert>
          </div>
        </div>
        <app-code-syntax-wrapper [code]="alertCode" language="html"></app-code-syntax-wrapper>
      </section>

      <!-- Badge -->
      <section id="badge">
        <h2 class="text-2xl font-bold text-white mb-4">Badge</h2>
        <p class="text-gray-400 mb-4">Badge component with colors</p>
        <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
          <div class="flex flex-wrap gap-4">
            <ngf-badge color="brand">Brand</ngf-badge>
            <ngf-badge color="alternative">Alternative</ngf-badge>
            <ngf-badge color="gray">Gray</ngf-badge>
            <ngf-badge color="danger">Danger</ngf-badge>
            <ngf-badge color="success">Success</ngf-badge>
            <ngf-badge color="warning">Warning</ngf-badge>
          </div>
        </div>
        <app-code-syntax-wrapper [code]="badgeCode" language="html"></app-code-syntax-wrapper>
      </section>

      <!-- Card -->
      <section id="card">
        <h2 class="text-2xl font-bold text-white mb-4">Card</h2>
        <p class="text-gray-400 mb-4">Card component</p>
        <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ngf-card>
              <ngf-card-header>
                <ngf-card-title>Card Title</ngf-card-title>
              </ngf-card-header>
              <ngf-card-content>
                <p class="text-gray-300">Card content goes here.</p>
              </ngf-card-content>
              <ngf-card-footer>
                <ngf-button color="blue">Read more</ngf-button>
              </ngf-card-footer>
            </ngf-card>
          </div>
        </div>
        <app-code-syntax-wrapper [code]="cardCode" language="html"></app-code-syntax-wrapper>
      </section>

      <!-- Modal -->
      <section id="modal">
        <h2 class="text-2xl font-bold text-white mb-4">Modal</h2>
        <p class="text-gray-400 mb-4">Modal dialogs with NgfModalService</p>
        <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
          <ngf-button color="blue" (onClick)="openModal()">Open Modal</ngf-button>
        </div>
        <app-code-syntax-wrapper [code]="modalCode" language="html"></app-code-syntax-wrapper>
      </section>

      <!-- Drawer -->
      <section id="drawer">
        <h2 class="text-2xl font-bold text-white mb-4">Drawer</h2>
        <p class="text-gray-400 mb-4">Side panel component with NgfDrawerService</p>
        <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
          <ngf-button color="blue" (onClick)="openDrawer()">Open Drawer</ngf-button>
        </div>
        <app-code-syntax-wrapper [code]="drawerCode" language="html"></app-code-syntax-wrapper>
      </section>

      <!-- Toast -->
      <section id="toast">
        <h2 class="text-2xl font-bold text-white mb-4">Toast</h2>
        <p class="text-gray-400 mb-4">Toast notification service</p>
        <div class="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
          <div class="flex flex-wrap gap-4">
            <ngf-button color="blue" (onClick)="showSuccessToast()">Success</ngf-button>
            <ngf-button color="red" (onClick)="showErrorToast()">Error</ngf-button>
            <ngf-button color="yellow" (onClick)="showWarningToast()">Warning</ngf-button>
            <ngf-button color="blue" (onClick)="showInfoToast()">Info</ngf-button>
          </div>
        </div>
        <app-code-syntax-wrapper [code]="toastCode" language="html"></app-code-syntax-wrapper>
      </section>
      </div>
    </div>
  `,
  styles: []
})
export class ComponentsDemoComponent {
  constructor(
    private modalService: NgfModalService,
    private drawerService: NgfDrawerService,
    private toastService: NgfToastService
  ) {}

  openModal(): void {
    const modalRef = this.modalService.open(ModalContentComponent);
    if (modalRef.componentInstance) {
      modalRef.componentInstance.title = 'Modal Title';
      modalRef.componentInstance.content = 'This is modal content';
    }
  }

  openDrawer(): void {
    const config = new NgfDrawerConfig();
    config.position = 'end';
    const drawerRef = this.drawerService.open(DrawerContentComponent, config);
    if (drawerRef.componentInstance) {
      drawerRef.componentInstance.title = 'Drawer Title';
    }
  }

  showSuccessToast(): void {
    this.toastService.success('Success! Your action was completed.');
  }

  showErrorToast(): void {
    this.toastService.error('Error! Something went wrong.');
  }

  showWarningToast(): void {
    this.toastService.warning('Warning! Please check your input.');
  }

  showInfoToast(): void {
    this.toastService.info('Info: This is an informational message.');
  }

  onAlertDismiss(): void {
    console.log('Alert dismissed');
  }

  buttonCode = `<ngf-button color="blue">Blue Button</ngf-button>`;
  alertCode = `<ngf-alert color="info" [dismissible]="true">
  A simple info alert message.
</ngf-alert>`;
  badgeCode = `<ngf-badge color="brand">Brand</ngf-badge>
<ngf-badge color="alternative">Alternative</ngf-badge>
<ngf-badge color="gray">Gray</ngf-badge>
<ngf-badge color="danger">Danger</ngf-badge>
<ngf-badge color="success">Success</ngf-badge>
<ngf-badge color="warning">Warning</ngf-badge>`;
  cardCode = `<ngf-card>
  <ngf-card-header>
    <ngf-card-title>Card Title</ngf-card-title>
  </ngf-card-header>
  <ngf-card-content>Card content</ngf-card-content>
</ngf-card>`;
  modalCode = `constructor(private modalService: NgfModalService) {}

openModal() {
  const modalRef = this.modalService.open(MyComponent);
}`;
  drawerCode = `constructor(private drawerService: NgfDrawerService) {}

openDrawer() {
  const config = new NgfDrawerConfig();
  const drawerRef = this.drawerService.open(MyComponent, config);
}`;
  toastCode = `constructor(private toastService: NgfToastService) {}

showToast() {
  this.toastService.success('Success message');
}`;
}

// Modal Content Component
@Component({
  selector: 'app-modal-content',
  standalone: false,
  template: `
    <div class="p-6">
      <h3 class="text-xl font-semibold mb-4">{{ title }}</h3>
      <p class="mb-4">{{ content }}</p>
      <ngf-button color="blue" (onClick)="close()">Close</ngf-button>
    </div>
  `
})
export class ModalContentComponent {
  title = '';
  content = '';

  constructor(public activeModal: NgfActiveModal) {}

  close(): void {
    this.activeModal.close('Closed');
  }
}

// Drawer Content Component
@Component({
  selector: 'app-drawer-content',
  standalone: false,
  template: `
    <div class="p-6">
      <h3 class="text-xl font-semibold mb-4">{{ title }}</h3>
      <p class="mb-4">This is drawer content</p>
      <ngf-button color="blue" (onClick)="close()">Close</ngf-button>
    </div>
  `
})
export class DrawerContentComponent {
  title = '';

  constructor(public activeDrawer: NgfActiveDrawer) {}

  close(): void {
    this.activeDrawer.close('Closed');
  }
}

