import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ngf-timepicker',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div [class]="wrapperClasses">
      <label
        *ngIf="label"
        [for]="timepickerId"
        [class]="labelClasses"
      >
        {{ label }}
        <span *ngIf="required" class="text-red-500">*</span>
      </label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd"/>
          </svg>
        </div>
        <input
          [id]="timepickerId"
          type="time"
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
      useExisting: forwardRef(() => NgfTimepickerComponent),
      multi: true
    }
  ]
})
export class NgfTimepickerComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() helperText?: string;
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() required = false;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() timepickerId = `ngf-timepicker-${Math.random().toString(36).substr(2, 9)}`;
  @Input() value = '';

  helperId = `${this.timepickerId}-helper`;

  private onChange = (value: string) => {};
  private onTouched = () => {};

  get wrapperClasses(): string {
    return 'mb-6';
  }

  get labelClasses(): string {
    return 'block mb-2 text-sm font-medium text-gray-900 dark:text-white';
  }

  get inputClasses(): string {
    const base = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
    const sizeClasses = {
      sm: 'p-2 pl-9',
      md: 'p-2.5 pl-10',
      lg: 'p-4 pl-12'
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

