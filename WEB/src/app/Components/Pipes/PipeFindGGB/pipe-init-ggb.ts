import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

declare var GGBApplet: any;
declare var $: any;


@Pipe({
    name: 'ggbInit'
})

export class GGBInit implements PipeTransform {

    readonly ggbModelsDir: string = "../../../ggbModels/";
    readonly ggbSelectorId: string = "ggb-element";

    constructor(private sanitizer: DomSanitizer) {
    }

    transform(value: any, args: any[]): any {

        let fileName = args;
        let that = this;
        setTimeout(() => {
            that.injectGGB(fileName && fileName.toString());
        }, 20)

        // return this.sanitizer.bypassSecurityTrustHtml(value);
        return value;

    }



    injectGGB(fileName: string) {

        fileName = `${this.ggbModelsDir}${fileName}`
        let that = this;
        $('#' + this.ggbSelectorId).ready(() => {
            console.log(fileName)
            let ggbApp = new GGBApplet({
                appName: "geometry",
                width: 700,
                height: 700,
                showToolBar: false,
                showAlgebraInput: true,
                showMenuBar: true,
                filename: fileName
            }, true);

            ggbApp.inject(that.ggbSelectorId);
        })

    }


}
