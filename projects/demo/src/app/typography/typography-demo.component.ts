import { Component } from '@angular/core';

@Component({
  selector: 'app-typography-demo',
  standalone: false,
  template: `
    <div class="max-w-6xl mx-auto space-y-8">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Typography</h1>
        <p class="text-gray-600 dark:text-gray-400">Typography components for headings, paragraphs, lists, and more</p>
      </div>

      <!-- Headings -->
      <section class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Headings</h2>
        <p class="text-gray-600 dark:text-gray-400 mb-4">Heading components with different sizes</p>
        <div class="mb-4 space-y-2">
          <ngf-heading [level]="1">Heading 1</ngf-heading>
          <ngf-heading [level]="2">Heading 2</ngf-heading>
          <ngf-heading [level]="3">Heading 3</ngf-heading>
          <ngf-heading [level]="4">Heading 4</ngf-heading>
        </div>
        <app-code-example [code]="headingsCode"></app-code-example>
      </section>

      <!-- Paragraphs -->
      <section class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Paragraphs</h2>
        <p class="text-gray-600 dark:text-gray-400 mb-4">Paragraph component with styling options</p>
        <div class="mb-4 space-y-4">
          <ngf-paragraph>
            This is a regular paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </ngf-paragraph>
          <ngf-paragraph [size]="'lg'">
            This is a lead paragraph. It stands out from regular paragraphs.
          </ngf-paragraph>
        </div>
        <app-code-example [code]="paragraphsCode"></app-code-example>
      </section>

      <!-- Lists -->
      <section class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Lists</h2>
        <p class="text-gray-600 dark:text-gray-400 mb-4">List components for ordered and unordered lists</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <h3 class="font-semibold mb-2">Unordered List</h3>
            <ngf-list [type]="'unordered'">
              <ngf-list-item>First item</ngf-list-item>
              <ngf-list-item>Second item</ngf-list-item>
              <ngf-list-item>Third item</ngf-list-item>
            </ngf-list>
          </div>
          <div>
            <h3 class="font-semibold mb-2">Ordered List</h3>
            <ngf-list [type]="'ordered'">
              <ngf-list-item>First item</ngf-list-item>
              <ngf-list-item>Second item</ngf-list-item>
              <ngf-list-item>Third item</ngf-list-item>
            </ngf-list>
          </div>
        </div>
        <app-code-example [code]="listsCode"></app-code-example>
      </section>

      <!-- Links -->
      <section class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Links</h2>
        <p class="text-gray-600 dark:text-gray-400 mb-4">Link component with styling options</p>
        <div class="mb-4 space-y-2">
          <p>
            This is a <ngf-link href="#">regular link</ngf-link> in a paragraph.
          </p>
          <p>
            This is an <ngf-link href="https://flowbite.com" target="_blank" rel="noopener noreferrer">external link</ngf-link>.
          </p>
        </div>
        <app-code-example [code]="linksCode"></app-code-example>
      </section>
    </div>
  `,
  styles: []
})
export class TypographyDemoComponent {
  headingsCode = `<ngf-heading level="1">Heading 1</ngf-heading>
<ngf-heading level="2">Heading 2</ngf-heading>`;

  paragraphsCode = `<ngf-paragraph>Regular paragraph</ngf-paragraph>
<ngf-paragraph [size]="'lg'">Lead paragraph</ngf-paragraph>`;

  listsCode = `<ngf-list [type]="'unordered'">
  <ngf-list-item>Item 1</ngf-list-item>
  <ngf-list-item>Item 2</ngf-list-item>
</ngf-list>`;

  linksCode = `<ngf-link href="#">Regular link</ngf-link>
<ngf-link href="https://example.com" target="_blank">External link</ngf-link>`;
}

