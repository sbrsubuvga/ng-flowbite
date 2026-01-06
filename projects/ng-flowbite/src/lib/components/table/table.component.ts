import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngf-table',
  template: `
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table [class]="tableClasses">
        <ng-content></ng-content>
      </table>
    </div>
  `
})
export class NgfTableComponent {
  @Input() striped = false;
  @Input() hoverable = false;
  @Input() bordered = false;

  get tableClasses(): string {
    const base = 'w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400';
    const stripedClass = this.striped ? 'table-striped' : '';
    const hoverableClass = this.hoverable ? 'hover:bg-gray-50 dark:hover:bg-gray-600' : '';
    const borderedClass = this.bordered ? 'border border-gray-200 dark:border-gray-700' : '';
    return `${base} ${stripedClass} ${hoverableClass} ${borderedClass}`.trim();
  }
}

@Component({
  selector: 'ngf-table-head',
  template: `
    <thead [class]="headClasses">
      <ng-content></ng-content>
    </thead>
  `
})
export class NgfTableHeadComponent {
  @Input() dark = false;

  get headClasses(): string {
    const base = 'text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400';
    return base;
  }
}

@Component({
  selector: 'ngf-table-body',
  template: `
    <tbody>
      <ng-content></ng-content>
    </tbody>
  `
})
export class NgfTableBodyComponent {}

@Component({
  selector: 'ngf-table-row',
  template: `
    <tr [class]="rowClasses">
      <ng-content></ng-content>
    </tr>
  `
})
export class NgfTableRowComponent {
  @Input() hoverable = false;

  get rowClasses(): string {
    const base = 'bg-white border-b dark:bg-gray-800 dark:border-gray-700';
    const hoverableClass = this.hoverable ? 'hover:bg-gray-50 dark:hover:bg-gray-600' : '';
    return `${base} ${hoverableClass}`.trim();
  }
}

@Component({
  selector: 'ngf-table-header',
  template: `
    <th [class]="headerClasses" [attr.scope]="scope">
      <ng-content></ng-content>
    </th>
  `
})
export class NgfTableHeaderComponent {
  @Input() scope: 'col' | 'row' = 'col';

  get headerClasses(): string {
    return 'px-6 py-3';
  }
}

@Component({
  selector: 'ngf-table-cell',
  template: `
    <td [class]="cellClasses">
      <ng-content></ng-content>
    </td>
  `
})
export class NgfTableCellComponent {
  get cellClasses(): string {
    return 'px-6 py-4';
  }
}

