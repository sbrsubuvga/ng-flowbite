# Accordion Component

The accordion component is a collection of vertically collapsing header and body elements that can be used to show and hide information. It's perfect for FAQ sections, collapsible content areas, and organizing information in a compact, expandable format.

## Table of Contents

- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Component API](#component-api)
- [Types](#types)
- [Examples](#examples)
- [Dark Mode](#dark-mode)
- [Accessibility](#accessibility)
- [Styling](#styling)

## Installation

### Standalone Component

The accordion component is standalone and can be imported directly:

```typescript
import { NgfAccordionComponent, NgfAccordionItemComponent } from '@ng-flowbite/ng-flowbite';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [NgfAccordionComponent, NgfAccordionItemComponent],
  template: `...`
})
export class ExampleComponent {}
```

### Module-based

Alternatively, you can import the module:

```typescript
import { NgfAccordionModule } from '@ng-flowbite/ng-flowbite';

@NgModule({
  imports: [NgfAccordionModule],
  // ...
})
export class AppModule {}
```

## Basic Usage

The accordion uses content projection with `[ngfAccordionHeader]` for the header content and `[ngfAccordionBody]` for the collapsible body content.

```html
<ngf-accordion>
  <ngf-accordion-item [isOpen]="true">
    <div ngfAccordionHeader>What is Flowbite?</div>
    <div ngfAccordionBody>
      <p>Flowbite is an open-source library of interactive components built on top of Tailwind CSS.</p>
    </div>
  </ngf-accordion-item>
  <ngf-accordion-item [isOpen]="false">
    <div ngfAccordionHeader>Is there a Figma file available?</div>
    <div ngfAccordionBody>
      <p>Flowbite comes with both Figma design files and code based on Tailwind CSS.</p>
    </div>
  </ngf-accordion-item>
</ngf-accordion>
```

## Component API

### NgfAccordionComponent

The container component for accordion items.

#### Selector

```html
<ngf-accordion></ngf-accordion>
```

#### Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `closeOthers` | `boolean` | `false` | Whether closing one item should close others (deprecated, use `type` instead) |
| `type` | `'default' \| 'flush' \| 'always-open' \| 'separated'` | `'default'` | The accordion type. See [Types](#types) for details |
| `accordionId` | `string` | auto-generated | Unique identifier for the accordion container |

#### Methods

| Method | Parameters | Returns | Description |
|--------|------------|---------|-------------|
| `onItemOpened()` | `openedItem: NgfAccordionItemComponent` | `void` | Internal method called when an item is opened (handles `closeOthers` logic) |

### NgfAccordionItemComponent

An individual accordion item that can be expanded or collapsed.

#### Selector

```html
<ngf-accordion-item></ngf-accordion-item>
```

#### Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `itemId` | `string` | auto-generated | Unique identifier for the accordion item body element |
| `headerId` | `string` | auto-generated | Unique identifier for the accordion item header element |
| `isOpen` | `boolean` | `false` | Whether the accordion item is currently open |

#### Computed Properties (Read-only)

These properties are automatically computed by the parent accordion component:

| Property | Type | Description |
|----------|------|-------------|
| `isFirst` | `boolean` | Whether this is the first item in the accordion (for styling) |
| `isLast` | `boolean` | Whether this is the last item in the accordion (for styling) |
| `isSeparated` | `boolean` | Whether the accordion uses separated type (for styling) |
| `isAlwaysOpen` | `boolean` | Whether the accordion uses always-open type (prevents toggling) |

#### Outputs

| Event | Type | Description |
|-------|------|-------------|
| `opened` | `EventEmitter<void>` | Emitted when the accordion item is opened |
| `closed` | `EventEmitter<void>` | Emitted when the accordion item is closed |

#### Content Projection

The accordion item uses content projection with the following selectors:

- `[ngfAccordionHeader]` - Content for the accordion header/button
- `[ngfAccordionBody]` - Content for the accordion body (collapsible content)

## Types

The accordion component supports four different types:

### Default

The default type collapses other items when expanding a single one (collapse mode). This is the default behavior.

```html
<ngf-accordion>
  <!-- items -->
</ngf-accordion>
```

or explicitly:

```html
<ngf-accordion [type]="'default'">
  <!-- items -->
</ngf-accordion>
```

### Always Open

The `always-open` type allows multiple elements to be open at the same time. All items are automatically opened and cannot be toggled.

```html
<ngf-accordion [type]="'always-open'">
  <ngf-accordion-item>
    <div ngfAccordionHeader>What is Flowbite?</div>
    <div ngfAccordionBody>
      <p>Flowbite is an open-source library of interactive components.</p>
    </div>
  </ngf-accordion-item>
  <ngf-accordion-item>
    <div ngfAccordionHeader>Is there a Figma file available?</div>
    <div ngfAccordionBody>
      <p>Flowbite comes with both Figma design files and code.</p>
    </div>
  </ngf-accordion-item>
</ngf-accordion>
```

**Note:** When using `always-open` type, you don't need to set `[isOpen]` on items as they are automatically opened.

### Separated

The `separated` type shows each accordion item as a separate card with spacing between them.

```html
<ngf-accordion [type]="'separated'">
  <ngf-accordion-item [isOpen]="true">
    <div ngfAccordionHeader>What is Flowbite?</div>
    <div ngfAccordionBody>
      <p>Flowbite is an open-source library of interactive components.</p>
    </div>
  </ngf-accordion-item>
  <ngf-accordion-item [isOpen]="false">
    <div ngfAccordionHeader>Is there a Figma file available?</div>
    <div ngfAccordionBody>
      <p>Flowbite comes with both Figma design files and code.</p>
    </div>
  </ngf-accordion-item>
</ngf-accordion>
```

### Flush

The `flush` type removes borders and rounded corners for a cleaner look.

```html
<ngf-accordion [type]="'flush'">
  <ngf-accordion-item [isOpen]="false">
    <div ngfAccordionHeader>What is Flowbite?</div>
    <div ngfAccordionBody>
      <p>Flowbite is an open-source library of interactive components.</p>
    </div>
  </ngf-accordion-item>
  <ngf-accordion-item [isOpen]="false">
    <div ngfAccordionHeader>Is there a Figma file available?</div>
    <div ngfAccordionBody>
      <p>Flowbite comes with both Figma design files and code.</p>
    </div>
  </ngf-accordion-item>
</ngf-accordion>
```

## Examples

### Basic Accordion

```html
<ngf-accordion>
  <ngf-accordion-item [isOpen]="true">
    <div ngfAccordionHeader>What is Flowbite?</div>
    <div ngfAccordionBody>
      <p class="mb-2">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
      <p>Check out this guide to learn how to get started and start developing websites even faster with components on top of Tailwind CSS.</p>
    </div>
  </ngf-accordion-item>
  <ngf-accordion-item [isOpen]="false">
    <div ngfAccordionHeader>Is there a Figma file available?</div>
    <div ngfAccordionBody>
      <p>Flowbite comes with both Figma design files and code based on Tailwind CSS.</p>
    </div>
  </ngf-accordion-item>
  <ngf-accordion-item [isOpen]="false">
    <div ngfAccordionHeader>What are the differences between Flowbite and Tailwind UI?</div>
    <div ngfAccordionBody>
      <p>The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product.</p>
    </div>
  </ngf-accordion-item>
</ngf-accordion>
```

### With Event Handlers

```html
<ngf-accordion>
  <ngf-accordion-item 
    [isOpen]="item1Open"
    (opened)="onItem1Opened()"
    (closed)="onItem1Closed()">
    <div ngfAccordionHeader>Item 1</div>
    <div ngfAccordionBody>
      <p>Content for item 1</p>
    </div>
  </ngf-accordion-item>
</ngf-accordion>
```

```typescript
export class MyComponent {
  item1Open = false;

  onItem1Opened(): void {
    console.log('Item 1 opened');
    this.item1Open = true;
  }

  onItem1Closed(): void {
    console.log('Item 1 closed');
    this.item1Open = false;
  }
}
```

### Programmatic Control

```html
<ngf-accordion>
  <ngf-accordion-item 
    #item1
    [isOpen]="isItem1Open">
    <div ngfAccordionHeader>Item 1</div>
    <div ngfAccordionBody>
      <p>Content for item 1</p>
    </div>
  </ngf-accordion-item>
</ngf-accordion>

<button (click)="item1.toggle()">Toggle Item 1</button>
```

```typescript
export class MyComponent {
  @ViewChild('item1') item1!: NgfAccordionItemComponent;
  isItem1Open = false;

  toggleItem(): void {
    this.item1.toggle();
    this.isItem1Open = this.item1.isOpen;
  }
}
```

### Custom IDs

```html
<ngf-accordion accordionId="my-custom-accordion">
  <ngf-accordion-item 
    itemId="item-1"
    headerId="header-1"
    [isOpen]="true">
    <div ngfAccordionHeader>Item 1</div>
    <div ngfAccordionBody>
      <p>Content for item 1</p>
    </div>
  </ngf-accordion-item>
</ngf-accordion>
```

## Dark Mode

The accordion component fully supports dark mode using Tailwind CSS's `dark:` prefix classes. Dark mode is automatically applied when the `dark` class is present on the document element (typically controlled by a theme toggle).

### Light Mode Styles

- Container: `bg-white` with `border-gray-200`
- Button: `bg-gray-100` with `text-gray-900`
- Content: `bg-white` with `text-gray-700`
- Borders: `border-gray-200`

### Dark Mode Styles

- Container: `dark:bg-gray-800` with `dark:border-gray-700`
- Button: `dark:bg-gray-800` with `dark:text-white`
- Content: `dark:bg-gray-900` with `dark:text-gray-300`
- Borders: `dark:border-gray-700`

The component automatically switches between light and dark modes based on the `dark` class on the document element.

## Accessibility

The accordion component includes comprehensive accessibility features:

- **ARIA Attributes**: 
  - `aria-expanded` on buttons to indicate open/closed state
  - `aria-controls` linking buttons to their content panels
  - `aria-labelledby` linking content panels to their headers
  
- **Keyboard Navigation**:
  - Tab navigation between accordion items
  - Enter/Space to toggle items
  - Focus indicators with visible focus rings

- **Semantic HTML**:
  - Uses `<h2>` for headers
  - Uses `<button>` elements for interactive controls
  - Proper heading hierarchy

- **Screen Reader Support**:
  - Unique IDs for all interactive elements
  - Descriptive labels and relationships
  - State announcements

## Styling

### Default Styling

The accordion uses Tailwind CSS classes for styling. The component includes:

- Rounded corners (`rounded-lg`, `rounded-t-lg`, `rounded-b-lg`)
- Borders and shadows
- Hover effects on buttons
- Focus rings for accessibility
- Smooth transitions

### Custom Styling

You can customize the accordion appearance by:

1. **Overriding Tailwind Classes**: Use `ngClass` or custom CSS to override default styles
2. **Content Styling**: Style the projected content directly
3. **CSS Variables**: Use CSS custom properties for theming

### Styling Examples

#### Custom Button Colors

```html
<ngf-accordion>
  <ngf-accordion-item [isOpen]="true">
    <div ngfAccordionHeader class="text-blue-600 font-bold">
      Custom Header
    </div>
    <div ngfAccordionBody class="bg-blue-50 p-6">
      <p>Custom styled content</p>
    </div>
  </ngf-accordion-item>
</ngf-accordion>
```

#### Custom Spacing

```html
<ngf-accordion class="space-y-4">
  <ngf-accordion-item [isOpen]="true">
    <div ngfAccordionHeader>Item 1</div>
    <div ngfAccordionBody class="p-8">
      <p>Content with custom padding</p>
    </div>
  </ngf-accordion-item>
</ngf-accordion>
```

## Behavior

### Automatic State Management

- `isFirst` and `isLast` are automatically computed based on item position
- Items are automatically linked to their parent accordion
- The accordion automatically handles item state updates when items are added or removed

### Close Others Behavior

When `closeOthers` is `true` (or using `type="default"`), opening one item will automatically close all other open items. This behavior is disabled for `always-open` type.

### Always Open Behavior

When `type="always-open"`:
- All items are automatically opened on initialization
- Items cannot be toggled (buttons are disabled)
- The `isOpen` input is ignored and all items remain open

## Browser Support

The accordion component supports all modern browsers that support:
- ES6+ JavaScript
- CSS Grid and Flexbox
- CSS Custom Properties (for theming)

## Dependencies

- Angular (standalone components require Angular 14+)
- Tailwind CSS (for styling)
- CommonModule (for Angular directives)

## Notes

- The component uses content projection, so you must use `[ngfAccordionHeader]` and `[ngfAccordionBody]` selectors
- IDs are auto-generated if not provided, ensuring uniqueness
- The component is fully standalone and doesn't require any additional modules
- Dark mode support is built-in and works automatically with Tailwind's dark mode configuration

