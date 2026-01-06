import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface StepperStep {
  title: string;
  description?: string;
  completed?: boolean;
  active?: boolean;
  disabled?: boolean;
}

@Component({
  selector: 'ngf-stepper',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ol [class]="stepperClasses">
      <li
        *ngFor="let step of steps; let i = index"
        [class]="getStepClasses(i, step)"
      >
        <div class="flex items-center">
          <span [class]="getStepNumberClasses(i, step)">
            <span *ngIf="!step.completed && step.active">{{ i + 1 }}</span>
            <svg
              *ngIf="step.completed"
              class="w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
            </svg>
          </span>
          <div class="ms-3">
            <h3 [class]="getTitleClasses(step)">
              {{ step.title }}
            </h3>
            <p *ngIf="step.description" [class]="getDescriptionClasses(step)">
              {{ step.description }}
            </p>
          </div>
        </div>
        <div *ngIf="i < steps.length - 1" [class]="getConnectorClasses(i)"></div>
      </li>
    </ol>
  `
})
export class NgfStepperComponent {
  @Input() steps: StepperStep[] = [];
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() currentStep = 0;
  @Output() stepClick = new EventEmitter<number>();

  get stepperClasses(): string {
    const base = 'flex items-center w-full';
    const orientationClass = this.orientation === 'vertical' ? 'flex-col' : '';
    return `${base} ${orientationClass}`.trim();
  }

  getStepClasses(index: number, step: StepperStep): string {
    const base = this.orientation === 'vertical' ? 'flex items-center w-full' : 'flex items-center';
    return base;
  }

  getStepNumberClasses(index: number, step: StepperStep): string {
    const base = 'flex items-center justify-center w-5 h-5 rounded-full';
    if (step.completed) {
      return `${base} bg-green-500 text-white`;
    } else if (step.active) {
      return `${base} bg-blue-600 text-white`;
    } else if (step.disabled) {
      return `${base} bg-gray-200 text-gray-500`;
    } else {
      return `${base} bg-gray-200 text-gray-500`;
    }
  }

  getTitleClasses(step: StepperStep): string {
    const base = 'text-sm font-medium';
    if (step.active) {
      return `${base} text-blue-600 dark:text-blue-500`;
    } else if (step.completed) {
      return `${base} text-gray-900 dark:text-white`;
    } else {
      return `${base} text-gray-500 dark:text-gray-400`;
    }
  }

  getDescriptionClasses(step: StepperStep): string {
    return 'text-sm text-gray-500 dark:text-gray-400';
  }

  getConnectorClasses(index: number): string {
    const base = this.orientation === 'vertical' ? 'w-0.5 h-12 ml-2.5' : 'w-full h-0.5';
    const completedClass = this.steps[index]?.completed ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700';
    return `${base} ${completedClass}`.trim();
  }

  onStepClick(index: number): void {
    if (!this.steps[index]?.disabled) {
      this.stepClick.emit(index);
    }
  }
}

