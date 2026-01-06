/**
 * Configuration options for modal windows
 */
export class NgfModalConfig {
  /**
   * Whether the modal is centered vertically
   */
  centered?: boolean;

  /**
   * Size of the modal: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

  /**
   * Whether the modal can be closed by clicking the backdrop
   */
  backdrop?: boolean | 'static';

  /**
   * Whether the modal can be closed by pressing ESC
   */
  keyboard?: boolean;

  /**
   * Custom CSS class(es) to add to the modal
   */
  modalClass?: string;

  /**
   * Custom CSS class(es) to add to the modal backdrop
   */
  backdropClass?: string;

  /**
   * Whether to show the close button
   */
  showCloseButton?: boolean;

  /**
   * ARIA label for the modal
   */
  ariaLabelledBy?: string;

  /**
   * ARIA described by
   */
  ariaDescribedBy?: string;

  /**
   * Animation duration in milliseconds
   */
  animationDuration?: number;

  constructor() {
    this.centered = false;
    this.size = 'md';
    this.backdrop = true;
    this.keyboard = true;
    this.showCloseButton = true;
    this.animationDuration = 300;
  }
}

