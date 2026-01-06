import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ngf-range',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div [class]="wrapperClasses">
      <label
        *ngIf="label"
        [for]="rangeId"
        [class]="labelClasses"
      >
        {{ label }}
        <span *ngIf="required" class="text-red-500">*</span>
        <span *ngIf="showValue" class="text-gray-500">: {{ value }}</span>
      </label>
      <input
        [id]="rangeId"
        type="range"
        [class]="rangeClasses"
        [min]="min"
        [max]="max"
        [step]="step"
        [disabled]="disabled"
        [required]="required"
        [value]="value"
        (input)="onInput($event)"
        (blur)="onBlur()"
        [attr.aria-describedby]="helperText ? helperId : null"
      />
      <div *ngIf="showMinMax" class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
        <span>{{ min }}</span>
        <span>{{ max }}</span>
      </div>
      <p *ngIf="helperText" [id]="helperId" [class]="helperClasses">
        {{ helperText }}
      </p>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgfRangeComponent),
      multi: true
    }
  ]
})
export class NgfRangeComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() helperText?: string;
  @Input() disabled = false;
  @Input() required = false;
  @Input() min = 0;
  @Input() max = 100;
  @Input() step = 1;
  @Input() showValue = false;
  @Input() showMinMax = false;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() color: 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'pink' = 'blue';
  @Input() rangeId = `ngf-range-${Math.random().toString(36).substr(2, 9)}`;
  @Input() value = 50;

  helperId = `${this.rangeId}-helper`;

  private onChange = (value: number) => {};
  private onTouched = () => {};

  get wrapperClasses(): string {
    return 'mb-6';
  }

  get labelClasses(): string {
    return 'block mb-2 text-sm font-medium text-gray-900 dark:text-white';
  }

  get rangeClasses(): string {
    const base = 'w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700';
    const colorClasses = {
      blue: 'accent-blue-600',
      green: 'accent-green-600',
      red: 'accent-red-600',
      yellow: 'accent-yellow-400',
      purple: 'accent-purple-600',
      pink: 'accent-pink-600'
    };
    const sizeClasses = {
      sm: 'h-1',
      md: 'h-2',
      lg: 'h-3'
    };
    const disabledClass = this.disabled ? 'cursor-not-allowed opacity-50' : '';
    return `${base} ${colorClasses[this.color]} ${sizeClasses[this.size]} ${disabledClass}`.trim();
  }

  get helperClasses(): string {
    return 'mt-2 text-sm text-gray-500 dark:text-gray-400';
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = parseFloat(target.value) || 0;
    this.onChange(this.value);
  }

  onBlur(): void {
    this.onTouched();
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

