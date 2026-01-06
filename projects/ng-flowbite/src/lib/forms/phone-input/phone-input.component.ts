import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ngf-phone-input',
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
      <div class="flex">
        <span [class]="countryCodeClasses">+{{ countryCode }}</span>
        <input
          [id]="inputId"
          type="tel"
          [class]="inputClasses"
          [placeholder]="placeholder"
          [disabled]="disabled"
          [readonly]="readonly"
          [required]="required"
          [value]="value"
          (input)="onInput($event)"
          (blur)="onBlur()"
          [attr.aria-describedby]="helperText ? helperId : null"
        />
      </div>
      <p *ngIf="helperText" [id]="helperId" [class]="helperClasses">
        {{ helperText }}
      </p>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgfPhoneInputComponent),
      multi: true
    }
  ]
})
export class NgfPhoneInputComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() placeholder = '1234567890';
  @Input() helperText?: string;
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() required = false;
  @Input() countryCode = '1';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() inputId = `ngf-phone-input-${Math.random().toString(36).substr(2, 9)}`;
  @Input() value = '';

  helperId = `${this.inputId}-helper`;

  private onChange = (value: string) => {};
  private onTouched = () => {};

  get wrapperClasses(): string {
    return 'mb-6';
  }

  get labelClasses(): string {
    return 'block mb-2 text-sm font-medium text-gray-900 dark:text-white';
  }

  get countryCodeClasses(): string {
    const base = 'inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-lg dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600';
    const sizeClasses = {
      sm: 'p-2',
      md: 'p-2.5',
      lg: 'p-4'
    };
    return `${base} ${sizeClasses[this.size]}`.trim();
  }

  get inputClasses(): string {
    const base = 'rounded-none rounded-r-lg border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
    const sizeClasses = {
      sm: 'p-2',
      md: 'p-2.5',
      lg: 'p-4'
    };
    const disabledClass = this.disabled ? 'cursor-not-allowed opacity-50' : '';
    return `${base} ${sizeClasses[this.size]} ${disabledClass}`.trim();
  }

  get helperClasses(): string {
    return 'mt-2 text-sm text-gray-500 dark:text-gray-400';
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
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

