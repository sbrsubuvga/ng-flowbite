# Alert Component

The alert component is used to display important messages to users. It supports multiple color variants, can be dismissible with a close button, and includes options for icons, borders, and accent borders. It's perfect for showing notifications, warnings, success messages, and other important information.

## Table of Contents

- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Component API](#component-api)
- [Color Variants](#color-variants)
- [Examples](#examples)
- [Dark Mode](#dark-mode)
- [Accessibility](#accessibility)
- [Styling](#styling)

## Installation

### Standalone Component

The alert component is standalone and can be imported directly:

```typescript
import { NgfAlertComponent } from '@ng-flowbite/ng-flowbite';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [NgfAlertComponent],
  template: `...`
})
export class ExampleComponent {}
```

### Module-based

Alternatively, you can import the module:

```typescript
import { NgfAlertModule } from '@ng-flowbite/ng-flowbite';

@NgModule({
  imports: [NgfAlertModule],
  // ...
})
export class AppModule {}
```

## Basic Usage

The alert component uses content projection for the alert message content.

```html
<ngf-alert color="info">
  <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
</ngf-alert>
```

## Component API

### NgfAlertComponent

The alert component for displaying messages to users.

#### Selector

```html
<ngf-alert></ngf-alert>
```

#### Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `color` | `'default' \| 'info' \| 'failure' \| 'success' \| 'warning' \| 'primary'` | `'default'` | The color variant of the alert. See [Color Variants](#color-variants) for details |
| `dismissible` | `boolean` | `false` | Whether the alert can be dismissed with a close button |
| `showIcon` | `boolean` | `true` | Whether to show the icon in the alert |
| `border` | `boolean` | `false` | Whether the alert has a border |
| `accent` | `boolean` | `false` | Whether the alert has an accent border (top border). Requires `border` to be `true` |

#### Outputs

| Event | Type | Description |
|-------|------|-------------|
| `onDismiss` | `EventEmitter<void>` | Emitted when the alert is dismissed (only when `dismissible` is `true`) |

#### Methods

| Method | Parameters | Returns | Description |
|--------|------------|---------|-------------|
| `dismiss()` | - | `void` | Dismisses the alert by setting `dismissed` to `true` and emitting the `onDismiss` event |

#### Internal Properties

| Property | Type | Description |
|----------|------|-------------|
| `dismissed` | `boolean` | Internal property that tracks whether the alert has been dismissed. When `true`, the alert is hidden |

## Color Variants

The alert component supports six color variants:

### Default

Gray color scheme for general information.

```html
<ngf-alert color="default">
  <span class="font-medium">default alert!</span> Change a few things up and try submitting again.
</ngf-alert>
```

### Info

Blue color scheme for informational messages.

```html
<ngf-alert color="info">
  <span class="font-medium">info alert!</span> Change a few things up and try submitting again.
</ngf-alert>
```

### Success

Green color scheme for success messages.

```html
<ngf-alert color="success">
  <span class="font-medium">success alert!</span> You have successfully read this important alert message.
</ngf-alert>
```

### Failure

Red color scheme for error or failure messages.

```html
<ngf-alert color="failure">
  <span class="font-medium">failure alert!</span> Change a few things up and try submitting again.
</ngf-alert>
```

### Warning

Yellow color scheme for warning messages.

```html
<ngf-alert color="warning">
  <span class="font-medium">warning alert!</span> Change a few things up and try submitting again.
</ngf-alert>
```

### Primary

Primary color scheme (uses your theme's primary color).

```html
<ngf-alert color="primary">
  <span class="font-medium">primary alert!</span> Change a few things up and try submitting again.
</ngf-alert>
```

## Examples

### Default Alert

Basic alert without icons:

```html
<ngf-alert color="default" [showIcon]="false">
  <span class="font-medium">default alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="info" [showIcon]="false">
  <span class="font-medium">info alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="failure" [showIcon]="false">
  <span class="font-medium">failure alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="warning" [showIcon]="false">
  <span class="font-medium">warning alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="success" [showIcon]="false">
  <span class="font-medium">success alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="primary" [showIcon]="false">
  <span class="font-medium">primary alert!</span> Change a few things up and try submitting again.
</ngf-alert>
```

### Alert with Icon

Alerts with icons (default behavior):

```html
<ngf-alert color="default">
  <span class="font-medium">default alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="info">
  <span class="font-medium">info alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="failure">
  <span class="font-medium">failure alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="warning">
  <span class="font-medium">warning alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="success">
  <span class="font-medium">success alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="primary">
  <span class="font-medium">primary alert!</span> Change a few things up and try submitting again.
</ngf-alert>
```

### Bordered Alert

Alerts with borders:

```html
<ngf-alert color="default" [border]="true" [showIcon]="false">
  <span class="font-medium">default alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="info" [border]="true" [showIcon]="false">
  <span class="font-medium">info alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="failure" [border]="true" [showIcon]="false">
  <span class="font-medium">failure alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="warning" [border]="true" [showIcon]="false">
  <span class="font-medium">warning alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="success" [border]="true" [showIcon]="false">
  <span class="font-medium">success alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="primary" [border]="true" [showIcon]="false">
  <span class="font-medium">primary alert!</span> Change a few things up and try submitting again.
</ngf-alert>
```

### Dismissible Alert

Alerts that can be dismissed with a close button:

```html
<ngf-alert color="default" [dismissible]="true" (onDismiss)="onDismiss()">
  <span class="font-medium">default alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="info" [dismissible]="true" (onDismiss)="onDismiss()">
  <span class="font-medium">info alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="failure" [dismissible]="true" (onDismiss)="onDismiss()">
  <span class="font-medium">failure alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="warning" [dismissible]="true" (onDismiss)="onDismiss()">
  <span class="font-medium">warning alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="success" [dismissible]="true" (onDismiss)="onDismiss()">
  <span class="font-medium">success alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="primary" [dismissible]="true" (onDismiss)="onDismiss()">
  <span class="font-medium">primary alert!</span> Change a few things up and try submitting again.
</ngf-alert>
```

```typescript
export class MyComponent {
  onDismiss(): void {
    console.log('Alert dismissed');
    // Handle dismissal logic here
  }
}
```

**Note:** When an alert is dismissed, it automatically hides itself. The `onDismiss` event is emitted for any additional handling you might need.

### Border Accent Alert

Alerts with accent borders (top border):

```html
<ngf-alert color="default" [border]="true" [accent]="true" [showIcon]="false">
  <span class="font-medium">default alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="info" [border]="true" [accent]="true" [showIcon]="false">
  <span class="font-medium">info alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="failure" [border]="true" [accent]="true" [showIcon]="false">
  <span class="font-medium">failure alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="warning" [border]="true" [accent]="true" [showIcon]="false">
  <span class="font-medium">warning alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="success" [border]="true" [accent]="true" [showIcon]="false">
  <span class="font-medium">success alert!</span> Change a few things up and try submitting again.
</ngf-alert>
<ngf-alert color="primary" [border]="true" [accent]="true" [showIcon]="false">
  <span class="font-medium">primary alert!</span> Change a few things up and try submitting again.
</ngf-alert>
```

**Note:** The `accent` prop requires `border` to be `true` to work properly. It adds a thicker top border (`border-t-4`) to the alert.

### Combined Features

You can combine multiple features:

```html
<!-- Dismissible alert with border and accent -->
<ngf-alert 
  color="info" 
  [dismissible]="true" 
  [border]="true" 
  [accent]="true"
  (onDismiss)="onDismiss()">
  <span class="font-medium">Important notice!</span> This alert has all features enabled.
</ngf-alert>

<!-- Success alert with border but no icon -->
<ngf-alert 
  color="success" 
  [border]="true" 
  [showIcon]="false">
  <span class="font-medium">Success!</span> Your changes have been saved.
</ngf-alert>
```

## Dark Mode

The alert component fully supports dark mode through Tailwind CSS's `dark:` prefix. All color variants automatically adapt to dark mode:

- **Background colors**: Light backgrounds in light mode, dark backgrounds in dark mode
- **Border colors**: Lighter borders in light mode, darker borders in dark mode
- **Text colors**: Dark text in light mode, light text in dark mode
- **Icon colors**: Appropriate contrast colors for both modes
- **Close button hover states**: Dark mode appropriate hover colors

The component automatically applies dark mode styles when the parent element has the `dark` class or when using Tailwind's dark mode configuration.

### Example

```html
<!-- The alert will automatically adapt to dark mode -->
<div class="dark">
  <ngf-alert color="info">
    <span class="font-medium">Dark mode alert!</span> This alert adapts to dark mode.
  </ngf-alert>
</div>
```

## Accessibility

The alert component includes several accessibility features:

### ARIA Attributes

- **`role="alert"`**: Identifies the element as an alert, which is important for screen readers
- **`aria-live`**: 
  - Set to `"assertive"` when `dismissible` is `true` (for important alerts that can be dismissed)
  - Set to `"polite"` when `dismissible` is `false` (for less urgent alerts)
- **`aria-label="Close"`**: On the dismiss button for screen readers
- **`aria-hidden="true"`**: On decorative icons to hide them from screen readers

### Keyboard Navigation

- The dismiss button is fully keyboard accessible
- Users can tab to the close button and activate it with Enter or Space

### Screen Reader Support

- Alert content is properly announced by screen readers
- The dismiss button has proper labeling
- Icons are marked as decorative and hidden from screen readers

### Best Practices

1. **Use appropriate color variants**: Use `failure` for errors, `success` for confirmations, `warning` for warnings, and `info` for general information
2. **Provide meaningful content**: Always include descriptive text in your alerts
3. **Consider dismissibility**: Use `dismissible` for alerts that users should be able to dismiss
4. **Use icons appropriately**: Icons help with visual communication but can be hidden if not needed

## Styling

The alert component uses Tailwind CSS utility classes for styling. All styles are applied through the component's internal class generation methods.

### Customization

While the component provides built-in styling, you can customize the appearance by:

1. **Overriding Tailwind classes**: Use your own Tailwind configuration to customize colors
2. **CSS overrides**: Add custom CSS to override specific styles
3. **Content styling**: Style the content inside the alert using your own classes

### Color Classes

The component applies the following color classes based on the `color` input:

#### Default
- Background: `bg-gray-50` / `dark:bg-gray-950`
- Border: `border-gray-200` / `dark:border-gray-700`
- Text: `text-gray-800` / `dark:text-gray-300`
- Icon: `text-gray-400`

#### Info
- Background: `bg-blue-50` / `dark:bg-blue-950`
- Border: `border-blue-200` / `dark:border-blue-700`
- Text: `text-blue-800` / `dark:text-blue-300`
- Icon: `text-blue-400`

#### Failure
- Background: `bg-red-50` / `dark:bg-red-950`
- Border: `border-red-200` / `dark:border-red-700`
- Text: `text-red-800` / `dark:text-red-300`
- Icon: `text-red-400`

#### Success
- Background: `bg-green-50` / `dark:bg-green-950`
- Border: `border-green-200` / `dark:border-green-700`
- Text: `text-green-800` / `dark:text-green-300`
- Icon: `text-green-400`

#### Warning
- Background: `bg-yellow-50` / `dark:bg-yellow-950`
- Border: `border-yellow-200` / `dark:border-yellow-700`
- Text: `text-yellow-800` / `dark:text-yellow-300`
- Icon: `text-yellow-400`

#### Primary
- Background: `bg-primary-50` / `dark:bg-primary-950`
- Border: `border-primary-200` / `dark:border-primary-700`
- Text: `text-primary-800` / `dark:text-primary-300`
- Icon: `text-primary-400`

### Base Classes

All alerts include these base classes:
- `mb-4`: Bottom margin
- `rounded-lg`: Rounded corners
- `p-4`: Padding
- `border` or `border-0`: Border based on `border` input
- `border-t-4`: Accent border when `accent` is `true`

### Close Button Styling

The close button includes:
- `focus:ring-2`: Focus ring for accessibility
- `focus:outline-none`: Removes default outline
- Color-specific hover states based on the alert color
- Proper sizing and spacing for touch targets

## Summary

The alert component is a versatile and accessible way to display important messages to users. It supports:

- ✅ Six color variants (default, info, success, failure, warning, primary)
- ✅ Optional icons
- ✅ Dismissible functionality with automatic hiding
- ✅ Border and accent border options
- ✅ Full dark mode support
- ✅ Complete accessibility features
- ✅ Flexible content projection

Use alerts to communicate important information, warnings, errors, and success messages throughout your application.

