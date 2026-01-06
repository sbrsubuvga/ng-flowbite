# Badge Component

The badge component is used to display labels, counts, or status indicators. It supports multiple color variants, sizes, borders, and pill shapes. It's perfect for showing tags, categories, notifications, and other small pieces of information.

## Table of Contents

- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Component API](#component-api)
- [Color Variants](#color-variants)
- [Sizes](#sizes)
- [Examples](#examples)
- [Dark Mode](#dark-mode)
- [Accessibility](#accessibility)
- [Styling](#styling)

## Installation

### Standalone Component

The badge component is standalone and can be imported directly:

```typescript
import { NgfBadgeComponent } from '@ng-flowbite/ng-flowbite';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [NgfBadgeComponent],
  template: `...`
})
export class ExampleComponent {}
```

### Module-based

Alternatively, you can import the module:

```typescript
import { NgfBadgeModule } from '@ng-flowbite/ng-flowbite';

@NgModule({
  imports: [NgfBadgeModule],
  // ...
})
export class AppModule {}
```

## Basic Usage

The badge component uses content projection for the badge content.

```html
<ngf-badge color="brand">New</ngf-badge>
```

## Component API

### NgfBadgeComponent

The badge component for displaying labels, counts, or status indicators.

#### Selector

```html
<ngf-badge></ngf-badge>
```

#### Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `color` | `'brand' \| 'alternative' \| 'gray' \| 'danger' \| 'success' \| 'warning'` | `'brand'` | The color variant of the badge. See [Color Variants](#color-variants) for details |
| `size` | `'xs' \| 'sm' \| 'lg'` | `'sm'` | The size of the badge. See [Sizes](#sizes) for details |
| `pill` | `boolean` | `false` | Whether to use a pill shape (rounded-full). When `false`, uses rounded corners |
| `border` | `boolean` | `false` | Whether to show a border around the badge |
| `useRing` | `boolean` | `false` | Whether to use ring border (for large bordered badges) |

## Color Variants

The badge component supports six color variants:

### Brand

Primary brand color scheme.

```html
<ngf-badge color="brand">Brand</ngf-badge>
```

### Alternative

Alternative neutral color scheme.

```html
<ngf-badge color="alternative">Alternative</ngf-badge>
```

### Gray

Gray/neutral color scheme for general labels.

```html
<ngf-badge color="gray">Gray</ngf-badge>
```

### Danger

Red color scheme for error or danger labels.

```html
<ngf-badge color="danger">Danger</ngf-badge>
```

### Success

Green color scheme for success labels.

```html
<ngf-badge color="success">Success</ngf-badge>
```

### Warning

Yellow color scheme for warning labels.

```html
<ngf-badge color="warning">Warning</ngf-badge>
```

## Sizes

The badge component supports three different sizes:

### Extra Small (xs)

- Padding: `px-1.5 py-0.5` (6px horizontal, 2px vertical)
- Text size: `text-xs`

```html
<ngf-badge size="xs">Extra small</ngf-badge>
```

### Small (sm) - Default

- Padding: `px-1.5 py-0.5` (6px horizontal, 2px vertical)
- Text size: `text-xs`

```html
<ngf-badge size="sm">Small</ngf-badge>
<!-- or simply -->
<ngf-badge>Small</ngf-badge>
```

### Large (lg)

- Padding: `px-2 py-1` (8px horizontal, 4px vertical)
- Text size: `text-sm`

```html
<ngf-badge size="lg">Large</ngf-badge>
```

## Examples

### Default Badge

Basic badge with different colors:

```html
<ngf-badge color="brand">Brand</ngf-badge>
<ngf-badge color="alternative">Alternative</ngf-badge>
<ngf-badge color="gray">Gray</ngf-badge>
<ngf-badge color="danger">Danger</ngf-badge>
<ngf-badge color="success">Success</ngf-badge>
<ngf-badge color="warning">Warning</ngf-badge>
```

### Bordered Badge

Add a border to the badge using the `border` prop:

```html
<ngf-badge color="brand" [border]="true">Brand</ngf-badge>
<ngf-badge color="alternative" [border]="true">Alternative</ngf-badge>
<ngf-badge color="gray" [border]="true">Gray</ngf-badge>
<ngf-badge color="danger" [border]="true">Danger</ngf-badge>
<ngf-badge color="success" [border]="true">Success</ngf-badge>
<ngf-badge color="warning" [border]="true">Warning</ngf-badge>
```

The border uses color-specific border classes that match the badge color.

### Large Badge

Larger badges with more padding:

```html
<ngf-badge color="brand" size="lg">Brand</ngf-badge>
<ngf-badge color="alternative" size="lg">Alternative</ngf-badge>
<ngf-badge color="gray" size="lg">Gray</ngf-badge>
<ngf-badge color="danger" size="lg">Danger</ngf-badge>
<ngf-badge color="success" size="lg">Success</ngf-badge>
<ngf-badge color="warning" size="lg">Warning</ngf-badge>
```

### Large Bordered Badge

Large badges with ring borders:

```html
<ngf-badge color="brand" size="lg" [useRing]="true">Brand</ngf-badge>
<ngf-badge color="alternative" size="lg" [useRing]="true">Alternative</ngf-badge>
<ngf-badge color="gray" size="lg" [useRing]="true">Gray</ngf-badge>
<ngf-badge color="danger" size="lg" [useRing]="true">Danger</ngf-badge>
<ngf-badge color="success" size="lg" [useRing]="true">Success</ngf-badge>
<ngf-badge color="warning" size="lg" [useRing]="true">Warning</ngf-badge>
```

### Badge with Icon

Add icons to badges using content projection:

```html
<ngf-badge color="brand">
  <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
  </svg>
  Brand
</ngf-badge>
```

**Note:** Icons are added via content projection. You can use SVG icons, icon fonts, or any other icon solution. Remember to add appropriate spacing (e.g., `mr-1` or `ml-1`) between the icon and text.

### Pill Badge

Use pill-shaped badges by setting `pill` to `true`:

```html
<ngf-badge color="brand" [pill]="true">Brand</ngf-badge>
<ngf-badge color="alternative" [pill]="true">Alternative</ngf-badge>
<ngf-badge color="gray" [pill]="true">Gray</ngf-badge>
<ngf-badge color="danger" [pill]="true">Danger</ngf-badge>
<ngf-badge color="success" [pill]="true">Success</ngf-badge>
<ngf-badge color="warning" [pill]="true">Warning</ngf-badge>
```

Pill badges use `rounded-full` instead of `rounded`, creating a fully rounded shape.

### Pill Bordered Badge

Pill badges with borders:

```html
<ngf-badge color="brand" [pill]="true" [border]="true">Brand</ngf-badge>
<ngf-badge color="alternative" [pill]="true" [border]="true">Alternative</ngf-badge>
<ngf-badge color="gray" [pill]="true" [border]="true">Gray</ngf-badge>
<ngf-badge color="danger" [pill]="true" [border]="true">Danger</ngf-badge>
<ngf-badge color="success" [pill]="true" [border]="true">Success</ngf-badge>
<ngf-badge color="warning" [pill]="true" [border]="true">Warning</ngf-badge>
```

### Badges as Links

Badges can be styled as links with hover states:

```html
<a href="#" class="bg-brand-softer hover:bg-brand-soft border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded inline-flex items-center">Brand</a>
<a href="#" class="bg-neutral-primary-soft hover:bg-neutral-secondary-medium border border-default text-heading text-xs font-medium px-1.5 py-0.5 rounded inline-flex items-center">Alternative</a>
```

### Combined Features

You can combine multiple features:

```html
<!-- Large pill badge with border and icon -->
<ngf-badge 
  color="success" 
  size="lg"
  [pill]="true"
  [border]="true">
  <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
  </svg>
  Verified
</ngf-badge>

<!-- Small bordered badge -->
<ngf-badge 
  color="brand"
  size="sm"
  [border]="true">
  New
</ngf-badge>
```

## Dark Mode

The badge component fully supports dark mode through Tailwind CSS's `dark:` prefix. All color variants automatically adapt to dark mode when using the appropriate CSS classes.

The component automatically applies dark mode styles when the parent element has the `dark` class or when using Tailwind's dark mode configuration.

### Example

```html
<!-- The badge will automatically adapt to dark mode -->
<div class="dark">
  <ngf-badge color="brand" [border]="true">New</ngf-badge>
</div>
```

## Accessibility

The badge component is a semantic `<span>` element that can be used in various contexts:

### Best Practices

1. **Use appropriate colors**: Use `danger` for errors, `success` for confirmations, `warning` for warnings, and `brand` for general information
2. **Provide meaningful content**: Always include descriptive text in your badges
3. **Consider contrast**: Ensure badge text is readable against the background color
4. **Use with ARIA labels**: When badges convey important information, consider adding `aria-label` or `aria-live` attributes

### Screen Reader Support

- Badge content is properly announced by screen readers
- Use descriptive text that makes sense when read aloud
- Consider using `aria-label` for badges that contain only icons

## Styling

The badge component uses Tailwind CSS utility classes for styling. All styles are applied through the component's internal class generation methods.

### Customization

While the component provides built-in styling, you can customize the appearance by:

1. **Overriding Tailwind classes**: Use your own Tailwind configuration to customize colors
2. **CSS overrides**: Add custom CSS to override specific styles
3. **Content styling**: Style the content inside the badge using your own classes

### Color Classes

The component applies the following color classes based on the `color` input:

#### Brand
- Background: `bg-brand-softer`
- Border: `border-brand-subtle`
- Text: `text-fg-brand-strong`
- Ring: `ring-brand-subtle`

#### Alternative
- Background: `bg-neutral-primary-soft`
- Border: `border-default`
- Text: `text-heading`
- Ring: `ring-default`

#### Gray
- Background: `bg-neutral-secondary-medium`
- Border: `border-default-medium`
- Text: `text-heading`
- Ring: `ring-default-medium`

#### Danger
- Background: `bg-danger-soft`
- Border: `border-danger-subtle`
- Text: `text-fg-danger-strong`
- Ring: `ring-danger-subtle`

#### Success
- Background: `bg-success-soft`
- Border: `border-success-subtle`
- Text: `text-fg-success-strong`
- Ring: `ring-success-subtle`

#### Warning
- Background: `bg-warning-soft`
- Border: `border-warning-subtle`
- Text: `text-warning`
- Ring: `ring-warning-subtle`

### Base Classes

All badges include these base classes:
- `inline-flex`: Inline flexbox layout
- `items-center`: Vertical centering
- `font-medium`: Medium font weight

### Size Classes

- **xs**: `px-1.5 py-0.5 text-xs` - 6px horizontal padding, 2px vertical padding, extra small text
- **sm**: `px-1.5 py-0.5 text-xs` - 6px horizontal padding, 2px vertical padding, extra small text
- **lg**: `px-2 py-1 text-sm` - 8px horizontal padding, 4px vertical padding, small text

### Border Classes

When `border` is `true`:
- `border` - Adds a border
- Color-specific border classes based on the badge color

When `useRing` is `true`:
- `ring-1` - Adds a ring border
- `ring-inset` - Makes the ring inset
- Color-specific ring classes based on the badge color

### Shape Classes

- **Rounded (default)**: `rounded` - Slightly rounded corners
- **Pill**: `rounded-full` - Fully rounded (pill shape)

## Summary

The badge component is a versatile and accessible way to display labels, counts, or status indicators. It supports:

- ✅ Six color variants (brand, alternative, gray, danger, success, warning)
- ✅ Three size options (xs, sm, lg)
- ✅ Optional border and ring border
- ✅ Pill shape option
- ✅ Icon support via content projection
- ✅ Link badges with hover states
- ✅ Flexible content projection

Use badges to display tags, categories, notifications, counts, and other small pieces of information throughout your application.
