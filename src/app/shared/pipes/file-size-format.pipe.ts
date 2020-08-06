import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSizeFormat'
})
export class FileSizeFormatPipe implements PipeTransform {

  private units = [
    'bytes',
    'KB',
    'MB',
    'GB',
    'TB',
    'PB'
  ];

  transform(bytes: number = 0, precision: number = 0): string {
    if (isNaN(parseFloat(String(bytes))) || !isFinite(bytes)) { return '?'; }

    let unit = 0;

    while (bytes >= 1024) {
      bytes /= 1024;
      unit++;
    }

    return bytes.toFixed(+ precision) + ' ' + this.units[unit];
  }

}
