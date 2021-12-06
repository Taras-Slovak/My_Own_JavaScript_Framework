import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      listeners: ['click', 'mousedown']
    });
  }

  toHTML() {
    return createTable(20);
  }
  onClick() {
    cosole.log('click');
  }

  onMouseDown() {
    cosole.log('mousedown');
  }
}
