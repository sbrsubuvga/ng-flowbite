import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ngf-checkbox',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="flex items-center">
      <input
        [id]="checkboxId"
        type="checkbox"
        [class]="checkboxClasses"
        [checked]="checked"
        [disabled]="disabled"
        [required]="required"
        (change)="onChange($event)"
        (blur)="onBlur()"
      />
      <label
        *ngIf="label"
        [for]="checkboxId"
        [class]="labelClasses"
      >
        {{ label }}
        <span *ngIf="required" class="text-red-500">*</span>
      </label>
    </div>
    <p *ngIf="helperText" [id]="helperId" [class]="helperClasses">
      {{ helperText }}
    </p>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgfCheckboxComponent),
      multi: true
    }
  ]
})
export class NgfCheckboxComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() helperText?: string;
  @Input() disabled = false;
  @Input() required = false;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() checkboxId = `ngf-checkbox-${Math.random().toString(36).substr(2, 9)}`;
  @Input() checked = false;

  helperId = `${this.checkboxId}-helper`;

  private onChangeFn = (value: boolean) => {};
  private onTouchedFn = () => {};

  get checkboxClasses(): string {
    const base = 'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600';
    const sizeClasses = {
      sm: 'w-3 h-3',
      md: 'w-4 h-4',
      lg: 'w-5 h-5'
    };
    const disabledClass = this.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer';
    return `${base} ${sizeClasses[this.size]} ${disabledClass}`.trim();
  }

  get labelClasses(): string {
    return 'ms-2 text-sm font-medium text-gray-900 dark:text-gray-300';
  }

  get helperClasses(): string {
    return 'mt-1 text-sm text-gray-500 dark:text-gray-400';
  }

  onChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.checked = target.checked;
    this.onChangeFn(this.checked);
  }

  onBlur(): void {
    this.onTouchedFn();
  }

  // ControlValueAccessor implementation
  writeValue(value: boolean): void {
    this.checked = value || false;
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouchedFn = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}

