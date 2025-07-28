import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-no-data',
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.scss'],
})
export class NoDataComponent {
  @Input() service!: string;

  setText(service: string): string {
    switch (service) {
      case 'invoice':
        return 'IP.TABLE.NOT-FOUND.INVOICE';
      case 'surrenders':
        return 'IP.TABLE.NOT-FOUND.SURRENDER';
      case 'purchase-order':
        return 'IP.TABLE.NOT-FOUND.PURCHASE-ORDER';
      case 'surrenders-paid':
        return 'IP.TABLE.NOT-FOUND.PAYMENT-HISTORY';
      case 'invoice-paid':
        return 'IP.TABLE.NOT-FOUND.PAYMENT-HISTORY';
      case 'invoice-report':
        return 'IP.TABLE.NOT-FOUND.REPORT-INVOICE';
      case 'active-contracts':
        return 'IP.TABLE.NOT-FOUND.ACTIVE-CONTRACT';
      case 'purchase-order':
        return 'IP.TABLE.NOT-FOUND.PURCHASE-ORDER';
      default:
        return '';
    }
  }
}
