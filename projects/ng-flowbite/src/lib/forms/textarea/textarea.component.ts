import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ngf-textarea',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div [class]="wrapperClasses">
      <label
        *ngIf="label"
        [for]="textareaId"
        [class]="labelClasses"
      >
        {{ label }}
        <span *ngIf="required" class="text-red-500">*</span>
      </label>
      <textarea
        [id]="textareaId"
        [rows]="rows"
        [class]="textareaClasses"
        [placeholder]="placeholder"
        [disabled]="disabled"
        [readonly]="readonly"
        [required]="required"
        [value]="value"
        (input)="onInput($event)"
        (blur)="onBlur()"
        [attr.aria-describedby]="helperText ? helperId : null"
      ></textarea>
      <p *ngIf="helperText" [id]="helperId" [class]="helperClasses">
        {{ helperText }}
      </p>
      <p *ngIf="showCharCount" [class]="charCountClasses">
        {{ value.length }} / {{ maxLength }} characters
      </p>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgfTextareaComponent),
      multi: true
    }
  ]
})
export class NgfTextareaComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() helperText?: string;
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() required = false;
  @Input() rows = 4;
  @Input() maxLength?: number;
  @Input() showCharCount = false;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() textareaId = `ngf-textarea-${Math.random().toString(36).substr(2, 9)}`;
  @Input() value = '';

  helperId = `${this.textareaId}-helper`;

  private onChange = (value: string) => {};
  private onTouched = () => {};

  get wrapperClasses(): string {
    return 'mb-6';
  }

  get labelClasses(): string {
    return 'block mb-2 text-sm font-medium text-gray-900 dark:text-white';
  }

  get textareaClasses(): string {
    const base = 'block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
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

  get charCountClasses(): string {
    return 'mt-1 text-sm text-gray-500 dark:text-gray-400 text-right';
  }

  onInput(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    let newValue = target.value;
    
    if (this.maxLength && newValue.length > this.maxLength) {
      newValue = newValue.substring(0, this.maxLength);
      target.value = newValue;
    }
    
    this.value = newValue;
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

