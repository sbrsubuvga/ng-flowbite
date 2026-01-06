import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ngf-input',
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
      <input
        [id]="inputId"
        [type]="type"
        [class]="inputClasses"
        [placeholder]="placeholder"
        [disabled]="disabled"
        [readonly]="readonly"
        [required]="required"
        [value]="value"
        (input)="onInput($event)"
        (blur)="onBlur()"
        [attr.aria-describedby]="helperText ? helperId : null"
        [attr.aria-invalid]="hasError"
      />
      <p *ngIf="helperText && !hasError" [id]="helperId" [class]="helperClasses">
        {{ helperText }}
      </p>
      <p *ngIf="errorMessage && hasError" [id]="helperId" [class]="errorClasses">
        {{ errorMessage }}
      </p>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgfInputComponent),
      multi: true
    }
  ]
})
export class NgfInputComponent implements ControlValueAccessor {
  @Input() type: 'text' | 'email' | 'password' | 'tel' | 'url' = 'text';
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() helperText?: string;
  @Input() errorMessage?: string;
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() required = false;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() color: 'default' | 'success' | 'error' = 'default';
  @Input() inputId = `ngf-input-${Math.random().toString(36).substr(2, 9)}`;
  @Input() value = '';

  hasError = false;
  helperId = `${this.inputId}-helper`;

  private onChange = (value: string) => {};
  private onTouched = () => {};

  get wrapperClasses(): string {
    return 'mb-6';
  }

  get labelClasses(): string {
    const base = 'block mb-2 text-sm font-medium';
    const colorClass = this.hasError
      ? 'text-red-700 dark:text-red-500'
      : 'text-gray-900 dark:text-white';
    return `${base} ${colorClass}`.trim();
  }

  get inputClasses(): string {
    const base = 'block w-full rounded-lg border text-sm';
    const sizeClasses = {
      sm: 'p-2',
      md: 'p-2.5',
      lg: 'p-4'
    };
    const colorClasses = {
      default: 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
      success: 'bg-green-50 border-green-500 text-green-900 placeholder-green-700 focus:ring-green-500 focus:border-green-500 dark:bg-green-100 dark:border-green-400',
      error: 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:bg-red-100 dark:border-red-400'
    };
    const disabledClass = this.disabled ? 'cursor-not-allowed opacity-50' : '';
    return `${base} ${sizeClasses[this.size]} ${colorClasses[this.color]} ${disabledClass}`.trim();
  }

  get helperClasses(): string {
    return 'mt-2 text-sm text-gray-500 dark:text-gray-400';
  }

  get errorClasses(): string {
    return 'mt-2 text-sm text-red-600 dark:text-red-500';
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
    this.hasError = this.errorMessage ? true : false;
  }

  onBlur(): void {
    this.onTouched();
  }

  // ControlValueAccessor implementation
  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}

