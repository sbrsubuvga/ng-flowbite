import { Subject } from 'rxjs';
import { NgfModalConfig } from './modal-config';

/**
 * A reference to a newly opened modal.
 */
export class NgfModalRef<T = any> {
  /**
   * The instance of the component opened in the modal
   */
  componentInstance?: T;

  /**
   * A promise that resolves when the modal is closed and rejects when the modal is dismissed
   */
  result: Promise<any>;

  private _resolve: (result?: any) => void = () => {};
  private _reject: (reason?: any) => void = () => {};
  private _closed$ = new Subject<any>();
  private _dismissed$ = new Subject<any>();

  constructor(public config: NgfModalConfig) {
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
   * Closes the modal with an optional result
   */
  close(result?: any): void {
    if (this._resolve) {
      this._resolve(result);
    }
    this._closed$.next(result);
  }

  /**
   * Dismisses the modal with an optional reason
   */
  dismiss(reason?: any): void {
    if (this._reject) {
      this._reject(reason);
    }
    this._dismissed$.next(reason);
  }

  /**
   * Observable that emits when the modal is closed
   */
  get closed$() {
    return this._closed$.asObservable();
  }

  /**
   * Observable that emits when the modal is dismissed
   */
  get dismissed$() {
    return this._dismissed$.asObservable();
  }
}

