import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

declare var GGBApplet: any;
declare var $: any;

@Pipe({
    name: 'ggb'
})

export class GGBSearch implements PipeTransform {

    readonly ggbModelsDir: string = "../../../../ggbModels/";
    readonly ggbSelectorId: string = "ggb-element";

    constructor(private sanitizer: DomSanitizer) {
    }

    transform(value: any, args: any[]): any {

      
        // find the ggb in the text
        value = value.replace("{{ggb}}", `<div><div id="${this.ggbSelectorId}"></div></div>`);
        
        return this.sanitizer.bypassSecurityTrustHtml(value);

    }

}
