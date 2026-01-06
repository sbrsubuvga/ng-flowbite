import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgfInputComponent } from './input/input.component';
import { NgfFileInputComponent } from './file-input/file-input.component';
import { NgfSearchInputComponent } from './search-input/search-input.component';
import { NgfNumberInputComponent } from './number-input/number-input.component';
import { NgfPhoneInputComponent } from './phone-input/phone-input.component';
import { NgfSelectComponent } from './select/select.component';
import { NgfTextareaComponent } from './textarea/textarea.component';
import { NgfCheckboxComponent } from './checkbox/checkbox.component';
import { NgfRadioComponent } from './radio/radio.component';
import { NgfToggleComponent } from './toggle/toggle.component';
import { NgfRangeComponent } from './range/range.component';
import { NgfTimepickerComponent } from './timepicker/timepicker.component';
import { NgfFloatingLabelComponent } from './floating-label/floating-label.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgfInputComponent,
    NgfFileInputComponent,
    NgfSearchInputComponent,
    NgfNumberInputComponent,
    NgfPhoneInputComponent,
    NgfSelectComponent,
    NgfTextareaComponent,
    NgfCheckboxComponent,
    NgfRadioComponent,
    NgfToggleComponent,
    NgfRangeComponent,
    NgfTimepickerComponent,
    NgfFloatingLabelComponent
  ],
  exports: [
    NgfInputComponent,
    NgfFileInputComponent,
    NgfSearchInputComponent,
    NgfNumberInputComponent,
    NgfPhoneInputComponent,
    NgfSelectComponent,
    NgfTextareaComponent,
    NgfCheckboxComponent,
    NgfRadioComponent,
    NgfToggleComponent,
    NgfRangeComponent,
    NgfTimepickerComponent,
    NgfFloatingLabelComponent
  ]
})
export class NgfFormsModule {}

