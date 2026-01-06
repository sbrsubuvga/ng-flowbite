import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

export interface TimelineItem {
  title: string;
  content?: string;
  time?: string;
  icon?: string;
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'pink';
}

@Component({
  selector: 'ngf-timeline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ol [class]="timelineClasses">
      <ng-content></ng-content>
    </ol>
  `
})
export class NgfTimelineComponent {
  @Input() horizontal = false;

  get timelineClasses(): string {
    const base = 'relative border-l border-gray-200 dark:border-gray-700';
    const horizontalClass = this.horizontal ? 'flex' : '';
    return `${base} ${horizontalClass}`.trim();
  }
}

@Component({
  selector: 'ngf-timeline-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <li [class]="itemClasses">
      <span [class]="dotClasses">
        <svg
          *ngIf="icon"
          [class]="iconSvgClasses"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path [attr.d]="icon"></path>
        </svg>
      </span>
      <div [class]="contentClasses">
        <h3 *ngIf="title" [class]="titleClasses">{{ title }}</h3>
        <time *ngIf="time" [class]="timeClasses">{{ time }}</time>
        <p *ngIf="content" [class]="textClasses">{{ content }}</p>
        <ng-content></ng-content>
      </div>
    </li>
  `
})
export class NgfTimelineItemComponent {
  @Input() title?: string;
  @Input() content?: string;
  @Input() time?: string;
  @Input() icon?: string;
  @Input() color: 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'pink' = 'blue';

  get itemClasses(): string {
    return 'mb-10 ml-6';
  }

  get dotClasses(): string {
    const base = 'absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900';
    const colorClasses = {
      blue: 'bg-blue-200 dark:bg-blue-900',
      green: 'bg-green-200 dark:bg-green-900',
      red: 'bg-red-200 dark:bg-red-900',
      yellow: 'bg-yellow-200 dark:bg-yellow-900',
      purple: 'bg-purple-200 dark:bg-purple-900',
      pink: 'bg-pink-200 dark:bg-pink-900'
    };
    return `${base} ${colorClasses[this.color]}`.trim();
  }

  get iconSvgClasses(): string {
    const colorClasses = {
      blue: 'text-blue-600 dark:text-blue-300',
      green: 'text-green-600 dark:text-green-300',
      red: 'text-red-600 dark:text-red-300',
      yellow: 'text-yellow-600 dark:text-yellow-300',
      purple: 'text-purple-600 dark:text-purple-300',
      pink: 'text-pink-600 dark:text-pink-300'
    };
    return `w-3 h-3 ${colorClasses[this.color]}`;
  }

  get contentClasses(): string {
    return 'p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600';
  }

  get titleClasses(): string {
    return 'mb-1 text-lg font-semibold text-gray-900 dark:text-white';
  }

  get timeClasses(): string {
    return 'block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500';
  }

  get textClasses(): string {
    return 'mb-4 text-base font-normal text-gray-500 dark:text-gray-400';
  }
}

