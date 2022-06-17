import { formatCurrency, getCurrencySymbol } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

import { environment } from 'src/environments/environment';

@Pipe({
  name: 'i28nCurrency'
})
export class I28nCurrencyPipe implements PipeTransform {

  transform(
    value: number,
    currencyCode: string = environment.i18n.currency,
    display:
        | 'code'
        | 'symbol'
        | 'symbol-narrow'
        | string
        | boolean = 'symbol',
    digitsInfo: string = '3.2-2',
    locale: string = environment.i18n.defaultLocale,
  ): string | null {
    return formatCurrency(
      value,
      locale,
      getCurrencySymbol(currencyCode, 'wide'),
      currencyCode,
      digitsInfo,
    );
  }

}
