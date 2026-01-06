import { Directive, Input, ElementRef, Renderer2, OnInit, OnDestroy, HostListener } from '@angular/core';

@Directive({
  selector: '[ngfPopover]',
  standalone: true
})
export class NgfPopoverDirective implements OnInit, OnDestroy {
  @Input() ngfPopover?: string;
  @Input() popoverTitle?: string;
  @Input() popoverPlacement: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() popoverTrigger: 'hover' | 'click' | 'focus' = 'hover';

  private popoverElement?: HTMLElement;
  private showTimeout?: any;
  private hideTimeout?: any;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    if (this.popoverTrigger === 'focus') {
      this.renderer.setAttribute(this.el.nativeElement, 'tabindex', '0');
    }
  }

  ngOnDestroy(): void {
    this.hide();
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (this.popoverTrigger === 'hover') {
      this.show();
    }
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (this.popoverTrigger === 'hover') {
      this.hide();
    }
  }

  @HostListener('click')
  onClick(): void {
    if (this.popoverTrigger === 'click') {
      this.toggle();
    }
  }

  @HostListener('focus')
  onFocus(): void {
    if (this.popoverTrigger === 'focus') {
      this.show();
    }
  }

  @HostListener('blur')
  onBlur(): void {
    if (this.popoverTrigger === 'focus') {
      this.hide();
    }
  }

  private show(): void {
    if (!this.ngfPopover || this.popoverElement) {
      return;
    }

    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = undefined;
    }

    this.showTimeout = setTimeout(() => {
      this.createPopover();
    }, 100);
  }

  private hide(): void {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
      this.showTimeout = undefined;
    }

    this.hideTimeout = setTimeout(() => {
      if (this.popoverElement) {
        this.renderer.removeChild(document.body, this.popoverElement);
        this.popoverElement = undefined;
      }
    }, 100);
  }

  private toggle(): void {
    if (this.popoverElement) {
      this.hide();
    } else {
      this.show();
    }
  }

  private createPopover(): void {
    if (!this.ngfPopover) {
      return;
    }

    const rect = this.el.nativeElement.getBoundingClientRect();
    this.popoverElement = this.renderer.createElement('div');
    this.renderer.addClass(this.popoverElement, 'absolute');
    this.renderer.addClass(this.popoverElement, 'z-50');
    this.renderer.addClass(this.popoverElement, 'inline-block');
    this.renderer.addClass(this.popoverElement, 'w-64');
    this.renderer.addClass(this.popoverElement, 'text-sm');
    this.renderer.addClass(this.popoverElement, 'text-white');
    this.renderer.addClass(this.popoverElement, 'bg-gray-800');
    this.renderer.addClass(this.popoverElement, 'rounded-lg');
    this.renderer.addClass(this.popoverElement, 'shadow-sm');
    this.renderer.addClass(this.popoverElement, 'dark:bg-gray-700');

    if (this.popoverTitle) {
      const title = this.renderer.createElement('div');
      this.renderer.addClass(title, 'px-3');
      this.renderer.addClass(title, 'py-2');
      this.renderer.addClass(title, 'border-b');
      this.renderer.addClass(title, 'border-gray-200');
      this.renderer.addClass(title, 'dark:border-gray-600');
      const titleText = this.renderer.createText(this.popoverTitle);
      this.renderer.appendChild(title, titleText);
      this.renderer.appendChild(this.popoverElement, title);
    }

    const body = this.renderer.createElement('div');
    this.renderer.addClass(body, 'px-3');
    this.renderer.addClass(body, 'py-2');
    const text = this.renderer.createText(this.ngfPopover);
    this.renderer.appendChild(body, text);
    this.renderer.appendChild(this.popoverElement, body);

    this.renderer.appendChild(document.body, this.popoverElement);
    this.positionPopover(rect);
  }

  private positionPopover(rect: DOMRect): void {
    if (!this.popoverElement) {
      return;
    }

    const popoverRect = this.popoverElement.getBoundingClientRect();
    let top = 0;
    let left = 0;

    switch (this.popoverPlacement) {
      case 'top':
        top = rect.top - popoverRect.height - 8;
        left = rect.left + (rect.width / 2) - (popoverRect.width / 2);
        break;
      case 'bottom':
        top = rect.bottom + 8;
        left = rect.left + (rect.width / 2) - (popoverRect.width / 2);
        break;
      case 'left':
        top = rect.top + (rect.height / 2) - (popoverRect.height / 2);
        left = rect.left - popoverRect.width - 8;
        break;
      case 'right':
        top = rect.top + (rect.height / 2) - (popoverRect.height / 2);
        left = rect.right + 8;
        break;
    }

    this.renderer.setStyle(this.popoverElement, 'top', `${top + window.scrollY}px`);
    this.renderer.setStyle(this.popoverElement, 'left', `${left + window.scrollX}px`);
  }
}

