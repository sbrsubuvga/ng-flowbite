export class NgfToastConfig {
  color: 'blue' | 'gray' | 'green' | 'red' | 'yellow' | 'purple' | 'pink' = 'blue';
  duration?: number; // in milliseconds, 0 or undefined means no auto-dismiss
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

  constructor() {
    this.duration = 5000; // Default 5 seconds
    this.position = 'top-right';
  }
}

