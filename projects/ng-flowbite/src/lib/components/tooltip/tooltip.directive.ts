import { Directive, Input, ElementRef, Renderer2, OnInit, OnDestroy, HostListener } from '@angular/core';

@Directive({
  selector: '[ngfTooltip]',
  standalone: true
})
export class NgfTooltipDirective implements OnInit, OnDestroy {
  @Input() ngfTooltip?: string;
  @Input() tooltipPlacement: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() tooltipTrigger: 'hover' | 'click' | 'focus' = 'hover';

  private tooltipElement?: HTMLElement;
  private showTimeout?: any;
  private hideTimeout?: any;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    if (this.tooltipTrigger === 'focus') {
      this.renderer.setAttribute(this.el.nativeElement, 'tabindex', '0');
    }
  }

  ngOnDestroy(): void {
    this.hide();
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (this.tooltipTrigger === 'hover') {
      this.show();
    }
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (this.tooltipTrigger === 'hover') {
      this.hide();
    }
  }

  @HostListener('click')
  onClick(): void {
    if (this.tooltipTrigger === 'click') {
      this.toggle();
    }
  }

  @HostListener('focus')
  onFocus(): void {
    if (this.tooltipTrigger === 'focus') {
      this.show();
    }
  }

  @HostListener('blur')
  onBlur(): void {
    if (this.tooltipTrigger === 'focus') {
      this.hide();
    }
  }

  private show(): void {
    if (!this.ngfTooltip || this.tooltipElement) {
      return;
    }

    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = undefined;
    }

    this.showTimeout = setTimeout(() => {
      this.createTooltip();
    }, 100);
  }

  private hide(): void {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
      this.showTimeout = undefined;
    }

    this.hideTimeout = setTimeout(() => {
      if (this.tooltipElement) {
        this.renderer.removeChild(document.body, this.tooltipElement);
        this.tooltipElement = undefined;
      }
    }, 100);
  }

  private toggle(): void {
    if (this.tooltipElement) {
      this.hide();
    } else {
      this.show();
    }
  }

  private createTooltip(): void {
    if (!this.ngfTooltip) {
      return;
    }

    const rect = this.el.nativeElement.getBoundingClientRect();
    this.tooltipElement = this.renderer.createElement('div');
    this.renderer.addClass(this.tooltipElement, 'absolute');
    this.renderer.addClass(this.tooltipElement, 'z-50');
    this.renderer.addClass(this.tooltipElement, 'inline-block');
    this.renderer.addClass(this.tooltipElement, 'rounded-lg');
    this.renderer.addClass(this.tooltipElement, 'bg-gray-900');
    this.renderer.addClass(this.tooltipElement, 'px-3');
    this.renderer.addClass(this.tooltipElement, 'py-2');
    this.renderer.addClass(this.tooltipElement, 'text-sm');
    this.renderer.addClass(this.tooltipElement, 'font-medium');
    this.renderer.addClass(this.tooltipElement, 'text-white');
    this.renderer.addClass(this.tooltipElement, 'shadow-sm');
    this.renderer.addClass(this.tooltipElement, 'dark:bg-gray-700');
    this.renderer.addClass(this.tooltipElement, 'tooltip');
    this.renderer.setStyle(this.tooltipElement, 'pointer-events', 'none');

    const text = this.renderer.createText(this.ngfTooltip);
    this.renderer.appendChild(this.tooltipElement, text);

    this.renderer.appendChild(document.body, this.tooltipElement);

    // Position tooltip
    this.positionTooltip(rect);
  }

  private positionTooltip(rect: DOMRect): void {
    if (!this.tooltipElement) {
      return;
    }

    const tooltipRect = this.tooltipElement.getBoundingClientRect();
    let top = 0;
    let left = 0;

    switch (this.tooltipPlacement) {
      case 'top':
        top = rect.top - tooltipRect.height - 8;
        left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
        break;
      case 'bottom':
        top = rect.bottom + 8;
        left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
        break;
      case 'left':
        top = rect.top + (rect.height / 2) - (tooltipRect.height / 2);
        left = rect.left - tooltipRect.width - 8;
        break;
      case 'right':
        top = rect.top + (rect.height / 2) - (tooltipRect.height / 2);
        left = rect.right + 8;
        break;
    }

    this.renderer.setStyle(this.tooltipElement, 'top', `${top + window.scrollY}px`);
    this.renderer.setStyle(this.tooltipElement, 'left', `${left + window.scrollX}px`);
  }
}

