import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-demo',
  standalone: false,
  template: `
    <div class="max-w-6xl mx-auto space-y-8">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Forms</h1>
        <p class="text-gray-600 dark:text-gray-400">Complete form components with Angular Forms integration</p>
      </div>

      <!-- Input Field -->
      <section class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Input Field</h2>
        <p class="text-gray-600 dark:text-gray-400 mb-4">Text input field component</p>
        <div class="mb-4">
          <ngf-input
            label="Email"
            type="email"
            placeholder="name@flowbite.com"
            formControlName="email"
          ></ngf-input>
        </div>
        <app-code-example [code]="inputCode"></app-code-example>
      </section>

      <!-- Select -->
      <section class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Select</h2>
        <p class="text-gray-600 dark:text-gray-400 mb-4">Select dropdown component</p>
        <div class="mb-4">
          <ngf-select
            label="Choose a country"
            formControlName="country"
            [options]="countries"
          ></ngf-select>
        </div>
        <app-code-example [code]="selectCode"></app-code-example>
      </section>

      <!-- Checkbox -->
      <section class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Checkbox</h2>
        <p class="text-gray-600 dark:text-gray-400 mb-4">Checkbox component</p>
        <div class="mb-4 space-y-2">
          <ngf-checkbox
            label="I agree to the terms and conditions"
            formControlName="agree"
          ></ngf-checkbox>
        </div>
        <app-code-example [code]="checkboxCode"></app-code-example>
      </section>

      <!-- Toggle -->
      <section class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Toggle</h2>
        <p class="text-gray-600 dark:text-gray-400 mb-4">Toggle switch component</p>
        <div class="mb-4 space-y-2">
          <ngf-toggle
            label="Enable notifications"
            formControlName="notifications"
          ></ngf-toggle>
        </div>
        <app-code-example [code]="toggleCode"></app-code-example>
      </section>

      <!-- Complete Form Example -->
      <section class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Complete Form Example</h2>
        <p class="text-gray-600 dark:text-gray-400 mb-4">Example of a complete form using all components</p>
        <form [formGroup]="form" (ngSubmit)="onSubmit()" class="space-y-4">
          <ngf-input
            label="Name"
            formControlName="name"
            placeholder="Your name"
          ></ngf-input>
          
          <ngf-input
            label="Email"
            type="email"
            formControlName="email"
            placeholder="name@example.com"
          ></ngf-input>
          
          <ngf-select
            label="Country"
            formControlName="country"
            [options]="countries"
          ></ngf-select>
          
          <ngf-checkbox
            label="I agree to the terms"
            formControlName="agree"
          ></ngf-checkbox>
          
          <div class="flex gap-4">
            <ngf-button type="submit" color="blue" [disabled]="form.invalid">Submit</ngf-button>
            <ngf-button type="button" color="gray" [outline]="true" (onClick)="form.reset()">Reset</ngf-button>
          </div>
        </form>
        <app-code-example [code]="completeFormCode"></app-code-example>
      </section>
    </div>
  `,
  styles: []
})
export class FormsDemoComponent {
  form: FormGroup;
  countries = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
    { value: 'au', label: 'Australia' }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: [''],
      agree: [false],
      notifications: [true]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
    }
  }

  inputCode = `<ngf-input
  label="Email"
  type="email"
  [formControl]="emailControl"
></ngf-input>`;

  selectCode = `<ngf-select
  label="Choose a country"
  [formControl]="countryControl"
  [options]="countries"
></ngf-select>`;

  checkboxCode = `<ngf-checkbox
  label="I agree"
  [formControl]="agreeControl"
></ngf-checkbox>`;

  toggleCode = `<ngf-toggle
  label="Enable feature"
  [formControl]="toggleControl"
></ngf-toggle>`;

  completeFormCode = `<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <ngf-input label="Name" formControlName="name"></ngf-input>
  <ngf-input label="Email" formControlName="email"></ngf-input>
  <ngf-button type="submit" color="blue">Submit</ngf-button>
</form>`;
}

