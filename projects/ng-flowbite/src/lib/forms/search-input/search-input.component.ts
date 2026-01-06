import { Component, Input, forwardRef, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ngf-search-input',
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
      </label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input
          [id]="inputId"
          type="search"
          [class]="inputClasses"
          [placeholder]="placeholder"
          [disabled]="disabled"
          [value]="value"
          (input)="onInput($event)"
          (keyup.enter)="onSearch.emit(value)"
        />
        <button
          *ngIf="showSearchButton"
          type="button"
          [class]="buttonClasses"
          (click)="onSearch.emit(value)"
          [disabled]="disabled"
        >
          Search
        </button>
      </div>
      <p *ngIf="helperText" [id]="helperId" [class]="helperClasses">
        {{ helperText }}
      </p>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgfSearchInputComponent),
      multi: true
    }
  ]
})
export class NgfSearchInputComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() placeholder = 'Search...';
  @Input() disabled = false;
  @Input() helperText?: string;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() showSearchButton = false;
  @Input() inputId = `ngf-search-input-${Math.random().toString(36).substr(2, 9)}`;
  @Input() value = '';
  @Output() onSearch = new EventEmitter<string>();

  helperId = `${this.inputId}-helper`;

  private onChange = (value: string) => {};
  private onTouched = () => {};

  get wrapperClasses(): string {
    return 'mb-6';
  }

  get labelClasses(): string {
    return 'mb-2 text-sm font-medium text-gray-900 dark:text-white';
  }

  get inputClasses(): string {
    const base = 'block w-full p-2.5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
    const sizeClasses = {
      sm: 'p-2 pl-9',
      md: 'p-2.5 pl-10',
      lg: 'p-4 pl-12'
    };
    const buttonClass = this.showSearchButton ? 'pr-24' : '';
    const disabledClass = this.disabled ? 'cursor-not-allowed opacity-50' : '';
    return `${base} ${sizeClasses[this.size]} ${buttonClass} ${disabledClass}`.trim();
  }

  get buttonClasses(): string {
    return 'absolute right-2.5 bottom-2.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800';
  }

  get helperClasses(): string {
    return 'mt-2 text-sm text-gray-500 dark:text-gray-400';
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
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

