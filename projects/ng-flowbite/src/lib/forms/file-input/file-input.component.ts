import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef, EventEmitter, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ngf-file-input',
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
      <div class="flex items-center justify-center w-full">
        <label
          [for]="inputId"
          [class]="dropzoneClasses"
        >
          <input
            [id]="inputId"
            type="file"
            [class]="inputClasses"
            [accept]="accept"
            [multiple]="multiple"
            [disabled]="disabled"
            (change)="onFileChange($event)"
            [attr.aria-describedby]="helperText ? helperId : null"
          />
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">{{ fileTypesText }}</p>
          </div>
        </label>
      </div>
      <p *ngIf="helperText" [id]="helperId" [class]="helperClasses">
        {{ helperText }}
      </p>
      <p *ngIf="errorMessage" [class]="errorClasses">
        {{ errorMessage }}
      </p>
      <div *ngIf="selectedFiles.length > 0" class="mt-2">
        <p class="text-sm text-gray-600 dark:text-gray-400">Selected files:</p>
        <ul class="list-disc list-inside text-sm text-gray-500">
          <li *ngFor="let file of selectedFiles">{{ file.name }}</li>
        </ul>
      </div>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgfFileInputComponent),
      multi: true
    }
  ]
})
export class NgfFileInputComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() accept?: string;
  @Input() multiple = false;
  @Input() disabled = false;
  @Input() required = false;
  @Input() helperText?: string;
  @Input() errorMessage?: string;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() inputId = `ngf-file-input-${Math.random().toString(36).substr(2, 9)}`;
  @Output() fileChange = new EventEmitter<File[]>();

  selectedFiles: File[] = [];
  helperId = `${this.inputId}-helper`;

  private onChange = (value: File[] | null) => {};
  private onTouched = () => {};

  get wrapperClasses(): string {
    return 'mb-6';
  }

  get labelClasses(): string {
    return 'block mb-2 text-sm font-medium text-gray-900 dark:text-white';
  }

  get dropzoneClasses(): string {
    const base = 'flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600';
    const disabledClass = this.disabled ? 'opacity-50 cursor-not-allowed' : '';
    return `${base} ${disabledClass}`.trim();
  }

  get inputClasses(): string {
    return 'hidden';
  }

  get helperClasses(): string {
    return 'mt-2 text-sm text-gray-500 dark:text-gray-400';
  }

  get errorClasses(): string {
    return 'mt-2 text-sm text-red-600 dark:text-red-500';
  }

  get fileTypesText(): string {
    if (this.accept) {
      return this.accept.split(',').map(type => type.trim()).join(', ');
    }
    return 'SVG, PNG, JPG or GIF (MAX. 800x400px)';
  }

  onFileChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (files) {
      this.selectedFiles = Array.from(files);
      this.onChange(this.selectedFiles);
      this.fileChange.emit(this.selectedFiles);
    }
  }

  // ControlValueAccessor implementation
  writeValue(value: File[] | null): void {
    this.selectedFiles = value || [];
  }

  registerOnChange(fn: (value: File[] | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}

