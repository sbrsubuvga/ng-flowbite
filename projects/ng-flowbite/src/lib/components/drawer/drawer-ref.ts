import { Subject } from 'rxjs';
import { NgfDrawerConfig } from './drawer-config';

/**
 * A reference to a newly opened drawer panel.
 */
export class NgfDrawerRef<T = any> {
  /**
   * The instance of the component opened in the drawer
   */
  componentInstance?: T;

  /**
   * A promise that resolves when the drawer is closed and rejects when the drawer is dismissed
   */
  result: Promise<any>;

  private _resolve: (result?: any) => void = () => {};
  private _reject: (reason?: any) => void = () => {};
  private _closed$ = new Subject<any>();
  private _dismissed$ = new Subject<any>();

  constructor(public config: NgfDrawerConfig) {
    this.result = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
    this.result.finally(() => {
      this._closed$.complete();
      this._dismissed$.complete();
    });
  }

  /**
   * Closes the drawer with an optional result
   */
  close(result?: any): void {
    if (this._resolve) {
      this._resolve(result);
    }
    this._closed$.next(result);
  }

  /**
   * Dismisses the drawer with an optional reason
   */
  dismiss(reason?: any): void {
    if (this._reject) {
      this._reject(reason);
    }
    this._dismissed$.next(reason);
  }

  /**
   * Observable that emits when the drawer is closed
   */
  get closed$() {
    return this._closed$.asObservable();
  }

  /**
   * Observable that emits when the drawer is dismissed
   */
  get dismissed$() {
    return this._dismissed$.asObservable();
  }
}

