import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ngf-datepicker',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="wrapperClasses">
      <label
        *ngIf="label"
        [for]="datepickerId"
        [class]="labelClasses"
      >
        {{ label }}
        <span *ngIf="required" class="text-red-500">*</span>
      </label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
          </svg>
        </div>
        <input
          [id]="datepickerId"
          type="date"
          [class]="inputClasses"
          [placeholder]="placeholder"
          [disabled]="disabled"
          [readonly]="readonly"
          [required]="required"
          [min]="minDate"
          [max]="maxDate"
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
      useExisting: forwardRef(() => NgfDatepickerComponent),
      multi: true
    }
  ]
})
export class NgfDatepickerComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() helperText?: string;
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() required = false;
  @Input() minDate?: string;
  @Input() maxDate?: string;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() datepickerId = `ngf-datepicker-${Math.random().toString(36).substr(2, 9)}`;
  @Input() value = '';

  helperId = `${this.datepickerId}-helper`;

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

