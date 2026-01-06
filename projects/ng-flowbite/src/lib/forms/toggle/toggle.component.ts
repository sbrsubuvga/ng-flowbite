import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ngf-toggle',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <label [for]="toggleId" [class]="labelWrapperClasses">
      <input
        [id]="toggleId"
        type="checkbox"
        [class]="toggleClasses"
        [checked]="checked"
        [disabled]="disabled"
        [required]="required"
        (change)="onChange($event)"
        (blur)="onBlur()"
      />
      <div [class]="toggleSwitchClasses"></div>
      <span *ngIf="label" [class]="labelClasses">
        {{ label }}
        <span *ngIf="required" class="text-red-500">*</span>
      </span>
    </label>
    <p *ngIf="helperText" [id]="helperId" [class]="helperClasses">
      {{ helperText }}
    </p>
  `,
  styles: [`
    input[type="checkbox"]:checked + div {
      background-color: var(--toggle-color);
    }
  `],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgfToggleComponent),
      multi: true
    }
  ]
})
export class NgfToggleComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() helperText?: string;
  @Input() disabled = false;
  @Input() required = false;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() color: 'blue' | 'green' | 'red' | 'yellow' | 'purple' = 'blue';
  @Input() toggleId = `ngf-toggle-${Math.random().toString(36).substr(2, 9)}`;
  @Input() checked = false;

  helperId = `${this.toggleId}-helper`;

  private onChangeFn = (value: boolean) => {};
  private onTouchedFn = () => {};

  get labelWrapperClasses(): string {
    return 'relative inline-flex items-center cursor-pointer';
  }

  get toggleClasses(): string {
    const base = 'sr-only peer';
    return base;
  }

  get labelClasses(): string {
    const base = 'ms-3 text-sm font-medium text-gray-900 dark:text-gray-300';
    const sizeClasses = {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base'
    };
    return `${base} ${sizeClasses[this.size]}`.trim();
  }

  get helperClasses(): string {
    return 'mt-1 text-sm text-gray-500 dark:text-gray-400';
  }

  get toggleSwitchClasses(): string {
    const sizeClasses = {
      sm: 'w-9 h-5',
      md: 'w-11 h-6',
      lg: 'w-14 h-7'
    };
    const base = 'relative bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[\'\'] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600';
    const colorClasses = {
      blue: 'peer-checked:bg-blue-600',
      green: 'peer-checked:bg-green-600',
      red: 'peer-checked:bg-red-600',
      yellow: 'peer-checked:bg-yellow-400',
      purple: 'peer-checked:bg-purple-600'
    };
    const sizeAdjustments = {
      sm: 'after:h-4 after:w-4',
      md: 'after:h-5 after:w-5',
      lg: 'after:h-6 after:w-6'
    };
    return `${base} ${sizeClasses[this.size]} ${colorClasses[this.color]} ${sizeAdjustments[this.size]}`.trim();
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

