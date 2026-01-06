import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

@Component({
  selector: 'ngf-select',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div [class]="wrapperClasses">
      <label
        *ngIf="label"
        [for]="selectId"
        [class]="labelClasses"
      >
        {{ label }}
        <span *ngIf="required" class="text-red-500">*</span>
      </label>
      <select
        [id]="selectId"
        [class]="selectClasses"
        [disabled]="disabled"
        [required]="required"
        [value]="value"
        (change)="onChange($event)"
        (blur)="onBlur()"
        [attr.aria-describedby]="helperText ? helperId : null"
      >
        <option *ngIf="placeholder" value="" disabled>{{ placeholder }}</option>
        <option
          *ngFor="let option of options"
          [value]="option.value"
          [disabled]="option.disabled"
        >
          {{ option.label }}
        </option>
      </select>
      <p *ngIf="helperText" [id]="helperId" [class]="helperClasses">
        {{ helperText }}
      </p>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgfSelectComponent),
      multi: true
    }
  ]
})
export class NgfSelectComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() helperText?: string;
  @Input() disabled = false;
  @Input() required = false;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() options: SelectOption[] = [];
  @Input() selectId = `ngf-select-${Math.random().toString(36).substr(2, 9)}`;
  @Input() value: string | number = '';

  helperId = `${this.selectId}-helper`;

  private onChangeFn = (value: string | number) => {};
  private onTouchedFn = () => {};

  get wrapperClasses(): string {
    return 'mb-6';
  }

  get labelClasses(): string {
    return 'block mb-2 text-sm font-medium text-gray-900 dark:text-white';
  }

  get selectClasses(): string {
    const base = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
    const sizeClasses = {
      sm: 'p-2 text-sm',
      md: 'p-2.5 text-sm',
      lg: 'p-4 text-base'
    };
    const disabledClass = this.disabled ? 'cursor-not-allowed opacity-50' : '';
    return `${base} ${sizeClasses[this.size]} ${disabledClass}`.trim();
  }

  get helperClasses(): string {
    return 'mt-2 text-sm text-gray-500 dark:text-gray-400';
  }

  onChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.value = target.value;
    this.onChangeFn(this.value);
  }

  onBlur(): void {
    this.onTouchedFn();
  }

  // ControlValueAccessor implementation
  writeValue(value: string | number): void {
    this.value = value || '';
  }

  registerOnChange(fn: (value: string | number) => void): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouchedFn = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}

