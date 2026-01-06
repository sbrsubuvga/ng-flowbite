import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ngf-number-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div [class]="wrapperClasses">
      <label
        *ngIf="label"
        [for]="inputId"
        [class]="labelClasses"
      >
        {{ label }}
        <span *ngIf="required" class="text-red-500">*</span>
      </label>
      <div class="relative flex items-center">
        <button
          type="button"
          [class]="decrementButtonClasses"
          (click)="decrement()"
          [disabled]="disabled || value <= min"
          aria-label="Decrease"
        >
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
          </svg>
        </button>
        <input
          [id]="inputId"
          type="number"
          [class]="inputClasses"
          [placeholder]="placeholder"
          [disabled]="disabled"
          [readonly]="readonly"
          [required]="required"
          [min]="min"
          [max]="max"
          [step]="step"
          [value]="value"
          (input)="onInput($event)"
          (blur)="onBlur()"
        />
        <button
          type="button"
          [class]="incrementButtonClasses"
          (click)="increment()"
          [disabled]="disabled || value >= max"
          aria-label="Increase"
        >
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
          </svg>
        </button>
      </div>
      <p *ngIf="helperText" [id]="helperId" [class]="helperClasses">
        {{ helperText }}
      </p>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgfNumberInputComponent),
      multi: true
    }
  ]
})
export class NgfNumberInputComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() helperText?: string;
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() required = false;
  @Input() min = 0;
  @Input() max = 100;
  @Input() step = 1;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() inputId = `ngf-number-input-${Math.random().toString(36).substr(2, 9)}`;
  @Input() value = 0;

  helperId = `${this.inputId}-helper`;

  private onChange = (value: number) => {};
  private onTouched = () => {};

  get wrapperClasses(): string {
    return 'mb-6';
  }

  get labelClasses(): string {
    return 'block mb-2 text-sm font-medium text-gray-900 dark:text-white';
  }

  get inputClasses(): string {
    const base = 'block w-full text-center border-x-0 border-gray-300 text-gray-900 focus:ring-0 focus:border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white';
    const sizeClasses = {
      sm: 'p-2 text-sm',
      md: 'p-2.5 text-sm',
      lg: 'p-4 text-base'
    };
    return `${base} ${sizeClasses[this.size]}`.trim();
  }

  get decrementButtonClasses(): string {
    const base = 'bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-s-lg p-3 h-11 focus:ring-2 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 focus:z-10';
    const disabledClass = this.disabled || this.value <= this.min ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200 dark:hover:bg-gray-600';
    return `${base} ${disabledClass}`.trim();
  }

  get incrementButtonClasses(): string {
    const base = 'bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-e-lg p-3 h-11 focus:ring-2 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 focus:z-10';
    const disabledClass = this.disabled || this.value >= this.max ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200 dark:hover:bg-gray-600';
    return `${base} ${disabledClass}`.trim();
  }

  get helperClasses(): string {
    return 'mt-2 text-sm text-gray-500 dark:text-gray-400';
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    const numValue = parseFloat(target.value) || 0;
    this.value = Math.max(this.min, Math.min(this.max, numValue));
    this.onChange(this.value);
  }

  onBlur(): void {
    this.onTouched();
  }

  increment(): void {
    if (!this.disabled && this.value < this.max) {
      this.value = Math.min(this.max, this.value + this.step);
      this.onChange(this.value);
    }
  }

  decrement(): void {
    if (!this.disabled && this.value > this.min) {
      this.value = Math.max(this.min, this.value - this.step);
      this.onChange(this.value);
    }
  }

  // ControlValueAccessor implementation
  writeValue(value: number): void {
    this.value = value || 0;
  }

  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}

