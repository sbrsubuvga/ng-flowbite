import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ngf-floating-label',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div [class]="wrapperClasses">
      <div class="relative">
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
          (focus)="onFocus()"
          (blur)="onBlur()"
          [attr.aria-describedby]="helperText ? helperId : null"
        />
        <label
          [for]="inputId"
          [class]="labelClasses"
        >
          {{ label }}
          <span *ngIf="required" class="text-red-500">*</span>
        </label>
      </div>
      <p *ngIf="helperText" [id]="helperId" [class]="helperClasses">
        {{ helperText }}
      </p>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgfFloatingLabelComponent),
      multi: true
    }
  ]
})
export class NgfFloatingLabelComponent implements ControlValueAccessor {
  @Input() type: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number' = 'text';
  @Input() label!: string;
  @Input() placeholder?: string;
  @Input() helperText?: string;
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() required = false;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() inputId = `ngf-floating-label-${Math.random().toString(36).substr(2, 9)}`;
  @Input() value = '';

  isFocused = false;
  helperId = `${this.inputId}-helper`;

  private onChange = (value: string) => {};
  private onTouched = () => {};

  get wrapperClasses(): string {
    return 'mb-6';
  }

  get inputClasses(): string {
    const base = 'block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer';
    const sizeClasses = {
      sm: 'px-2 pb-2 pt-3 text-sm',
      md: 'px-2.5 pb-2.5 pt-4 text-sm',
      lg: 'px-3 pb-3 pt-5 text-base'
    };
    const colorClass = this.hasValue || this.isFocused
      ? 'border-blue-600 dark:border-blue-500'
      : 'border-gray-300 dark:border-gray-600';
    const disabledClass = this.disabled ? 'cursor-not-allowed opacity-50' : '';
    return `${base} ${sizeClasses[this.size]} ${colorClass} ${disabledClass}`.trim();
  }

  get labelClasses(): string {
    const base = 'absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1';
    const colorClass = this.hasValue || this.isFocused
      ? 'text-blue-600 dark:text-blue-500'
      : 'text-gray-500 dark:text-gray-400';
    return `${base} ${colorClass}`.trim();
  }

  get helperClasses(): string {
    return 'mt-2 text-sm text-gray-500 dark:text-gray-400';
  }

  get hasValue(): boolean {
    return typeof this.value === 'string' && this.value.length > 0;
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
  }

  onFocus(): void {
    this.isFocused = true;
  }

  onBlur(): void {
    this.isFocused = false;
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

