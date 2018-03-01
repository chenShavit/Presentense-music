import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Pipe({
    name: 'bidi'
})

export class BiDi implements PipeTransform {

    constructor(private sanitizer: DomSanitizer) {
    }

    transform(value: any): any {

        var reg = /([^\u0590-\u05fe])+/g;
        if (typeof value == 'string') {
            value = value.replace(reg, '<span style="direction:ltr;" dir="ltr"> $1 </span>');

        }


        return this.sanitizer.bypassSecurityTrustHtml(value);
        // return value;
    }


}
