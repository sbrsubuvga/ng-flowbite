# ng-flowbite

Angular widgets built from the ground up using Flowbite (Tailwind CSS) with APIs designed for the Angular ecosystem.

Inspired by [ng-bootstrap](https://github.com/ng-bootstrap/ng-bootstrap), this library provides Angular components based on [Flowbite](https://github.com/themesberg/flowbite) and Tailwind CSS.

## Table of Contents

- [Demo](#demo)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Supported Browsers](#supported-browsers)
- [Getting Help](#getting-help)
- [Contributing](#contributing)
- [License](#license)

## Demo

Please check all components we have in action at [ng-flowbite demo site](https://ng-flowbite.github.io) (coming soon).

## Dependencies

The only dependencies are Angular, Flowbite, and Tailwind CSS.

Angular and Flowbite are explicitly listed as peer dependencies. The table below lists the exact versions of Flowbite against which the corresponding versions of ng-flowbite are tested.

| ng-flowbite | Angular | Flowbite | Tailwind CSS |
| ----------- | ------- | -------- | ------------ |
| 0.1.x       | ^17.0.0 \| ^18.0.0 \| ^19.0.0 | ^2.0.0   | ^3.0.0      |

## Installation

We strongly recommend using Angular CLI for setting up a new project. If you have an Angular CLI project, you could simply use our schematics to add ng-flowbite library to it.

```bash
ng add @ng-flowbite/ng-flowbite
```

It will install ng-flowbite for the default application specified in your `angular.json`. If you have multiple projects and you want to target a specific application, you could specify the `--project` option:

```bash
ng add @ng-flowbite/ng-flowbite --project myProject
```

### Manual Installation

If you prefer not to use schematics and install everything manually:

1. Install the package:

```bash
npm install @ng-flowbite/ng-flowbite flowbite
```

2. Install Tailwind CSS (if not already installed):

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

3. Configure Tailwind CSS to include Flowbite:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
```

4. Import the module in your `app.module.ts`:

```typescript
import { NgFlowbiteModule } from '@ng-flowbite/ng-flowbite';

@NgModule({
  imports: [NgFlowbiteModule],
  // ...
})
export class AppModule { }
```

5. Add Flowbite CSS to your `styles.css`:

```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
@import 'flowbite/dist/flowbite.min.css';
```

## Usage Examples

### Modal

```typescript
import { Component } from '@angular/core';
import { NgfModalService, NgfActiveModal } from '@ng-flowbite/ng-flowbite';

@Component({
  selector: 'app-modal-demo',
  template: `
    <button (click)="openModal()">Open Modal</button>
  `
})
export class ModalDemoComponent {
  constructor(private modalService: NgfModalService) {}

  openModal() {
    const modalRef = this.modalService.open(MyModalContent);
    modalRef.componentInstance.name = 'World';
  }
}

@Component({
  selector: 'app-modal-content',
  template: `
    <div class="p-6">
      <h3 class="text-xl font-semibold mb-4">Hello, {{ name }}!</h3>
      <button (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class MyModalContent {
  name: string = '';
  constructor(public activeModal: NgfActiveModal) {}
}
```

### Dropdown

```html
<ngf-dropdown label="Dropdown button">
  <ng-container ngfDropdownToggle>
    <span>Dropdown</span>
  </ng-container>
  <ngf-dropdown-item>Dashboard</ngf-dropdown-item>
  <ngf-dropdown-item>Settings</ngf-dropdown-item>
  <ngf-dropdown-item>Earnings</ngf-dropdown-item>
  <ngf-dropdown-item>Sign out</ngf-dropdown-item>
</ngf-dropdown>
```

### Tooltip

```html
<button ngfTooltip="Tooltip content" tooltipPlacement="top">
  Hover me
</button>
```

### Accordion

```html
<ngf-accordion>
  <ngf-accordion-item [isFirst]="true">
    <div ngfAccordionHeader>Accordion Item 1</div>
    <div ngfAccordionBody>
      Content for accordion item 1
    </div>
  </ngf-accordion-item>
  <ngf-accordion-item>
    <div ngfAccordionHeader>Accordion Item 2</div>
    <div ngfAccordionBody>
      Content for accordion item 2
    </div>
  </ngf-accordion-item>
</ngf-accordion>
```

## Supported Browsers

We support the same browsers and versions supported by both Angular and Tailwind CSS, whichever is _more_ restrictive. See [Angular browser support](https://angular.io/guide/browser-support) and [Tailwind CSS browser support](https://tailwindcss.com/docs/browser-support) for more details.

## Getting Help

Please, do not open issues for general support questions. You've got much better chances of getting your question answered on [StackOverflow](https://stackoverflow.com/questions/tagged/ng-flowbite) where maintainers are looking at questions tagged with `ng-flowbite`.

StackOverflow is a much better place to ask questions since:

- there are hundreds of people willing to help on StackOverflow
- questions and answers stay available for public viewing so your question/answer might help someone else
- Stack Overflow's voting system assures that the best answers are prominently visible.

To save your and our time we will be systematically closing all the issues that are requests for general support and redirecting people to StackOverflow.

## Do you think you've found a bug?

We want to fix it ASAP! But before fixing a bug we need to reproduce and confirm it.

We ask you to respect two things:

1. Fill the GitHub issue template by providing the bug description and appropriate versions of Angular, ng-flowbite, Flowbite, and TypeScript
2. Provide a use-case that fails with a **minimal reproduction scenario** using StackBlitz

A minimal reproduction scenario allows us to quickly confirm a bug (or point out a coding problem) as well as confirm that we are fixing the right problem.

## Contributing to the project

Please check [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## License

MIT

