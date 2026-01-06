/**
 * Configuration options for drawer panels
 */
export class NgfDrawerConfig {
  /**
   * Position of the drawer: 'start' | 'end' | 'top' | 'bottom'
   */
  position?: 'start' | 'end' | 'top' | 'bottom';

  /**
   * Whether the drawer can be closed by clicking the backdrop
   */
  backdrop?: boolean | 'static';

  /**
   * Whether the drawer can be closed by pressing ESC
   */
  keyboard?: boolean;

  /**
   * Custom CSS class(es) to add to the drawer
   */
  drawerClass?: string;

  /**
   * Custom CSS class(es) to add to the drawer backdrop
   */
  backdropClass?: string;

  /**
   * Whether to show the close button
   */
  showCloseButton?: boolean;

  /**
   * ARIA label for the drawer
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

  /**
   * Width of the drawer (for start/end positions)
   */
  width?: string;

  /**
   * Height of the drawer (for top/bottom positions)
   */
  height?: string;

  constructor() {
    this.position = 'end';
    this.backdrop = true;
    this.keyboard = true;
    this.showCloseButton = true;
    this.animationDuration = 300;
    this.width = '384px'; // w-96 equivalent (for start/end positions)
    this.height = 'auto'; // for top/bottom positions
  }
}

