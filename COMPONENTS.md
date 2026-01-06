# ng-flowbite Components

Complete list of all Flowbite components available in ng-flowbite.

## ✅ Implemented Components

### Core Components
- ✅ **Modal** - Service-based modal dialogs with NgfModalService
- ✅ **Drawer** - Side panel component with NgfDrawerService
- ✅ **Dropdown** - Dropdown menu component
- ✅ **Tooltip** - Tooltip directive
- ✅ **Popover** - Popover directive

### Form & Input Components
- ✅ **Button** - Button component with multiple colors and sizes
- ✅ **Button Group** - Group of buttons
- ✅ **Accordion** - Collapsible content sections

### Display Components
- ✅ **Card** - Card component with header, content, footer, and image
- ✅ **Badge** - Badge component
- ✅ **Alert** - Alert component with dismissible support
- ✅ **Avatar** - Avatar component with status indicators
- ✅ **Skeleton** - Loading skeleton component

### Navigation Components
- ✅ **Breadcrumb** - Breadcrumb navigation
- ✅ **Navbar** - Navigation bar component
- ✅ **Tabs** - Tab component
- ✅ **Pagination** - Pagination component

### Data Display
- ✅ **Table** - Table component with head, body, rows, headers, and cells
- ✅ **List Group** - List group component
- ✅ **Rating** - Star rating component
- ✅ **Progress** - Progress bar component

### Feedback Components
- ✅ **Toast** - Toast notification service
- ✅ **Spinner** - Loading spinner component

### Forms
- ✅ **Forms** - Complete form components (13 sub-components)
- ✅ **Typography** - Typography utilities (8 sub-components)

## 📋 Missing Components (19)

The following Flowbite components are not yet implemented in ng-flowbite:

### High Priority
- ⏳ **Carousel** - Image carousel component
- ⏳ **Datepicker** - Date picker component
- ⏳ **Sidebar** - Sidebar navigation component
- ⏳ **Footer** - Footer component
- ⏳ **Stepper** - Step indicator component

### Medium Priority
- ⏳ **Banner** - Banner component
- ⏳ **Bottom Navigation** - Mobile bottom navigation
- ⏳ **Timeline** - Timeline component
- ⏳ **Gallery** - Image gallery component
- ⏳ **Clipboard** - Copy to clipboard component

### Lower Priority
- ⏳ **Chat Bubble** - Chat message bubbles
- ⏳ **Device Mockups** - Device mockup displays
- ⏳ **Jumbotron** - Hero section component
- ⏳ **KBD** - Keyboard key display component
- ⏳ **Mega Menu** - Mega menu component
- ⏳ **Speed Dial** - Floating action button with speed dial
- ⏳ **Indicators** - Various indicator components
- ⏳ **QR Code** - QR code generator/display
- ⏳ **Video** - Video player component

## Usage Examples

### Modal
```typescript
constructor(private modalService: NgfModalService) {}

openModal() {
  const modalRef = this.modalService.open(MyModalContent);
  modalRef.componentInstance.name = 'World';
}
```

### Toast
```typescript
constructor(private toastService: NgfToastService) {}

showSuccess() {
  this.toastService.success('Operation successful!');
}
```

### Button
```html
<ngf-button color="blue" size="md">Click me</ngf-button>
<ngf-button color="green" outline>Outline Button</ngf-button>
```

### Card
```html
<ngf-card>
  <ngf-card-header>
    <ngf-card-title>Card Title</ngf-card-title>
  </ngf-card-header>
  <ngf-card-content>
    Card content here
  </ngf-card-content>
</ngf-card>
```

### Table
```html
<ngf-table [striped]="true" [hoverable]="true">
  <ngf-table-head>
    <ngf-table-row>
      <ngf-table-header>Name</ngf-table-header>
      <ngf-table-header>Email</ngf-table-header>
    </ngf-table-row>
  </ngf-table-head>
  <ngf-table-body>
    <ngf-table-row>
      <ngf-table-cell>John Doe</ngf-table-cell>
      <ngf-table-cell>john@example.com</ngf-table-cell>
    </ngf-table-row>
  </ngf-table-body>
</ngf-table>
```

### Tabs
```html
<ngf-tabs>
  <ngf-tab tabId="tab1" contentId="content1" [active]="true">Tab 1</ngf-tab>
  <ngf-tab tabId="tab2" contentId="content2">Tab 2</ngf-tab>
  
  <ngf-tab-content contentId="content1" tabId="tab1" [isActive]="true">
    Content 1
  </ngf-tab-content>
  <ngf-tab-content contentId="content2" tabId="tab2">
    Content 2
  </ngf-tab-content>
</ngf-tabs>
```

## Contributing

To add new components, follow the existing pattern:
1. Create component files in `projects/ng-flowbite/src/lib/[component-name]/`
2. Create a module file
3. Export from the module
4. Add to `NgFlowbiteModule`
5. Export from `public-api.ts`
6. Add tests
7. Update documentation

