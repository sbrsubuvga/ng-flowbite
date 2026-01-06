# Avatar Component

The avatar component is used to display user profile pictures or placeholders. It supports multiple sizes, rounded or square shapes, status indicators, and borders. It's perfect for user profiles, contact lists, and any interface that needs to display user information.

## Table of Contents

- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Component API](#component-api)
- [Sizes](#sizes)
- [Examples](#examples)
- [Dark Mode](#dark-mode)
- [Accessibility](#accessibility)
- [Styling](#styling)

## Installation

### Standalone Component

The avatar component is standalone and can be imported directly:

```typescript
import { NgfAvatarComponent } from '@ng-flowbite/ng-flowbite';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [NgfAvatarComponent],
  template: `...`
})
export class ExampleComponent {}
```

### Module-based

Alternatively, you can import the module:

```typescript
import { NgfAvatarModule } from '@ng-flowbite/ng-flowbite';

@NgModule({
  imports: [NgfAvatarModule],
  // ...
})
export class AppModule {}
```

## Basic Usage

The avatar component can display either an image or placeholder text.

```html
<!-- With image -->
<ngf-avatar imgSrc="https://example.com/avatar.jpg" alt="User Avatar"></ngf-avatar>

<!-- With placeholder -->
<ngf-avatar placeholder="JD"></ngf-avatar>
```

## Component API

### NgfAvatarComponent

The avatar component for displaying user profile pictures or placeholders.

#### Selector

```html
<ngf-avatar></ngf-avatar>
```

#### Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | The size of the avatar. See [Sizes](#sizes) for details |
| `rounded` | `boolean` | `true` | Whether to use a rounded (circular) shape. When `false`, uses square corners |
| `bordered` | `boolean` | `false` | Whether to show a border around the avatar |
| `imgSrc` | `string` | - | Image source URL for the avatar |
| `alt` | `string` | - | Alt text for the image (accessibility) |
| `placeholder` | `string` | - | Placeholder text to display when no image is provided (typically initials) |
| `status` | `'online' \| 'offline' \| 'away' \| 'busy'` | - | Status indicator to display on the avatar |

## Sizes

The avatar component supports five different sizes:

### Extra Small (xs)

- Width/Height: `w-6 h-6` (24px)
- Placeholder text: `text-xs`
- Status indicator: `w-2 h-2`

```html
<ngf-avatar size="xs" placeholder="XS"></ngf-avatar>
```

### Small (sm)

- Width/Height: `w-8 h-8` (32px)
- Placeholder text: `text-sm`
- Status indicator: `w-2.5 h-2.5`

```html
<ngf-avatar size="sm" placeholder="SM"></ngf-avatar>
```

### Medium (md) - Default

- Width/Height: `w-10 h-10` (40px)
- Placeholder text: `text-base`
- Status indicator: `w-3 h-3`

```html
<ngf-avatar size="md" placeholder="MD"></ngf-avatar>
<!-- or simply -->
<ngf-avatar placeholder="MD"></ngf-avatar>
```

### Large (lg)

- Width/Height: `w-20 h-20` (80px)
- Placeholder text: `text-2xl`
- Status indicator: `w-3.5 h-3.5`

```html
<ngf-avatar size="lg" placeholder="LG"></ngf-avatar>
```

### Extra Large (xl)

- Width/Height: `w-36 h-36` (144px)
- Placeholder text: `text-4xl`
- Status indicator: `w-4 h-4`

```html
<ngf-avatar size="xl" placeholder="XL"></ngf-avatar>
```

## Examples

### Default Avatar

Basic avatar with image:

```html
<ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-5.jpg"></ngf-avatar>
```

### Avatar Sizes

Display avatars in different sizes:

```html
<ngf-avatar size="xs" placeholder="XS"></ngf-avatar>
<ngf-avatar size="sm" placeholder="SM"></ngf-avatar>
<ngf-avatar size="md" placeholder="MD"></ngf-avatar>
<ngf-avatar size="lg" placeholder="LG"></ngf-avatar>
<ngf-avatar size="xl" placeholder="XL"></ngf-avatar>
```

### Avatar with Images

Use the `imgSrc` prop to display an image:

```html
<ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-1.jpg" size="xs"></ngf-avatar>
<ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-2.jpg" size="sm"></ngf-avatar>
<ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-3.jpg" size="md"></ngf-avatar>
<ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-4.jpg" size="lg"></ngf-avatar>
<ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-5.jpg" size="xl"></ngf-avatar>
```

### Avatar with Placeholder

When no image is provided, use the `placeholder` prop to show initials or text:

```html
<ngf-avatar placeholder="JD"></ngf-avatar>
<ngf-avatar placeholder="AB" size="lg"></ngf-avatar>
<ngf-avatar placeholder="CD" size="xl"></ngf-avatar>
```

**Note:** The placeholder text is typically 1-2 characters (initials), but you can use any text. The font size automatically adjusts based on the avatar size.

### Avatar with Status

Add a status indicator to show the user's online status:

```html
<!-- Online status (green) -->
<ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-1.jpg" status="online"></ngf-avatar>

<!-- Offline status (gray) -->
<ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-2.jpg" status="offline"></ngf-avatar>

<!-- Away status (yellow) -->
<ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-3.jpg" status="away"></ngf-avatar>

<!-- Busy status (red) -->
<ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-4.jpg" status="busy"></ngf-avatar>
```

#### Status Types

- **`online`**: Green indicator (`bg-green-400`) - User is online and available
- **`offline`**: Gray indicator (`bg-gray-400`) - User is offline
- **`away`**: Yellow indicator (`bg-yellow-400`) - User is away
- **`busy`**: Red indicator (`bg-red-400`) - User is busy

The status indicator appears as a small circle in the bottom-left corner of the avatar, with a white border (dark mode: gray border) for visibility.

### Bordered Avatar

Add a border to the avatar using the `bordered` prop:

```html
<ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-1.jpg" [bordered]="true"></ngf-avatar>
<ngf-avatar placeholder="JD" [bordered]="true" size="lg"></ngf-avatar>
<ngf-avatar placeholder="AB" [bordered]="true" status="online"></ngf-avatar>
```

The border uses a ring (`ring-2`) with gray colors that adapt to dark mode:
- Light mode: `ring-gray-300`
- Dark mode: `dark:ring-gray-500`

### Square Avatar

Use square avatars by setting `rounded` to `false`:

```html
<ngf-avatar imgSrc="https://flowbite.com/docs/images/people/profile-picture-1.jpg" [rounded]="false"></ngf-avatar>
<ngf-avatar placeholder="JD" [rounded]="false" size="lg"></ngf-avatar>
<ngf-avatar placeholder="AB" [rounded]="false" [bordered]="true"></ngf-avatar>
```

Square avatars use `rounded` class instead of `rounded-full`, giving them slightly rounded corners.

### Combined Features

You can combine multiple features:

```html
<!-- Large bordered avatar with status -->
<ngf-avatar 
  imgSrc="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
  size="lg"
  [bordered]="true"
  status="online">
</ngf-avatar>

<!-- Square avatar with placeholder and border -->
<ngf-avatar 
  placeholder="JD"
  [rounded]="false"
  [bordered]="true"
  size="xl">
</ngf-avatar>
```

## Dark Mode

The avatar component fully supports dark mode through Tailwind CSS's `dark:` prefix:

- **Placeholder background**: `bg-gray-100` / `dark:bg-gray-600`
- **Placeholder text**: `text-gray-500` / `dark:text-gray-300`
- **Border**: `ring-gray-300` / `dark:ring-gray-500`
- **Status border**: `border-white` / `dark:border-gray-800`

The component automatically applies dark mode styles when the parent element has the `dark` class or when using Tailwind's dark mode configuration.

### Example

```html
<!-- The avatar will automatically adapt to dark mode -->
<div class="dark">
  <ngf-avatar placeholder="JD" [bordered]="true" status="online"></ngf-avatar>
</div>
```

## Accessibility

The avatar component includes several accessibility features:

### Image Alt Text

Always provide meaningful `alt` text when using images:

```html
<ngf-avatar 
  imgSrc="https://example.com/avatar.jpg" 
  alt="John Doe's profile picture">
</ngf-avatar>
```

### Status Indicator

The status indicator includes a `title` attribute for tooltip information:

```html
<ngf-avatar status="online"></ngf-avatar>
<!-- The status indicator has title="online" for screen readers -->
```

### Best Practices

1. **Always provide alt text**: When using images, always include descriptive `alt` text
2. **Use meaningful placeholders**: Use initials or meaningful abbreviations for placeholder text
3. **Consider status visibility**: Status indicators are small; ensure they're visible against the avatar background
4. **Size appropriately**: Choose avatar sizes that are appropriate for your layout and content hierarchy

## Styling

The avatar component uses Tailwind CSS utility classes for styling. All styles are applied through the component's internal class generation methods.

### Customization

While the component provides built-in styling, you can customize the appearance by:

1. **Overriding Tailwind classes**: Use your own Tailwind configuration to customize colors
2. **CSS overrides**: Add custom CSS to override specific styles
3. **Content styling**: Style the placeholder text using your own classes (though this is limited)

### Size Classes

The component applies the following size classes:

#### Image Sizes
- **xs**: `w-6 h-6` (24px × 24px)
- **sm**: `w-8 h-8` (32px × 32px)
- **md**: `w-10 h-10` (40px × 40px)
- **lg**: `w-20 h-20` (80px × 80px)
- **xl**: `w-36 h-36` (144px × 144px)

#### Placeholder Text Sizes
- **xs**: `text-xs`
- **sm**: `text-sm`
- **md**: `text-base`
- **lg**: `text-2xl`
- **xl**: `text-4xl`

#### Status Indicator Sizes
- **xs**: `w-2 h-2` (8px × 8px)
- **sm**: `w-2.5 h-2.5` (10px × 10px)
- **md**: `w-3 h-3` (12px × 12px)
- **lg**: `w-3.5 h-3.5` (14px × 14px)
- **xl**: `w-4 h-4` (16px × 16px)

### Shape Classes

- **Rounded (default)**: `rounded-full` - Creates a perfect circle
- **Square**: `rounded` - Creates a square with slightly rounded corners

### Border Classes

When `bordered` is `true`:
- `ring-2` - 2px ring width
- `ring-gray-300` - Light mode border color
- `dark:ring-gray-500` - Dark mode border color

### Status Color Classes

- **online**: `bg-green-400` - Green background
- **offline**: `bg-gray-400` - Gray background
- **away**: `bg-yellow-400` - Yellow background
- **busy**: `bg-red-400` - Red background

### Placeholder Classes

Placeholder avatars include:
- `inline-flex` - Flexbox layout
- `items-center` - Vertical centering
- `justify-center` - Horizontal centering
- `text-gray-500` / `dark:text-gray-300` - Text color
- `bg-gray-100` / `dark:bg-gray-600` - Background color

### Image Classes

Image avatars include:
- `object-cover` - Ensures images cover the entire avatar area while maintaining aspect ratio

## Summary

The avatar component is a versatile and accessible way to display user profile pictures or placeholders. It supports:

- ✅ Five size variants (xs, sm, md, lg, xl)
- ✅ Image or placeholder text support
- ✅ Four status indicators (online, offline, away, busy)
- ✅ Rounded or square shapes
- ✅ Optional border
- ✅ Full dark mode support
- ✅ Accessibility features (alt text, status tooltips)
- ✅ Flexible sizing and styling

Use avatars to display user information throughout your application, from navigation bars to user lists and profile pages.

