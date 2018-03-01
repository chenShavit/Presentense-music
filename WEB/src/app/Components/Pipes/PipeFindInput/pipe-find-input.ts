import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Pipe({
    name: 'input'
})

export class InputSearch implements PipeTransform {

    constructor(private sanitizer: DomSanitizer) {
    }

    transform(value: any): any {


        let input = "<span  type='text' class='button-5p mq-answer' style='min-width:200px;margin-right: 5px;'>\
            <span>\
                <svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='39' height='39' viewBox='0 0 39 39'>\
                    <g>\
                        <g transform='translate(-372 -703)'>\
                            <image width='39' height='39' transform='translate(372 703)' \
                            xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAABo0lEQVRYR9XYS07EMAwG4N9iDxKX4QYsOAJCiC0nYosAcQQW3IDDgAT7kZGHNMqkeTnxlLZSN51M+tV1nDSExMHMFwDe3HlHRLtUu5FrzHwC4BHAlZxE9BH3R/EFB3sHcOp+ewVwawl0sCcA1+4ePwAuY+ABLgGb7GbABGy6xwzocQWYGbAASwL3uAbYMLABNgOSAtYNVMAOgcz8CeBcOfKac7ADNlG+JHLPAG6UOGleBQ7ApP8XwUm9CYe1xpkFmvTrBoQp0ARGtAtLiQnQCiZBi4vwKPAewENQ+YdSJDV9jQA1mLBtMndnOIMc1AKzgyqJWxBYLEdZ3ALAap0s4o4IrMJmozWXLIPlIe62CdaMM4xgM0yFc0BZHX9rh2PQ/oyIZFHZdFRzburF6NXaR84Ipl4PViNnDFMBt1nnjhQxVVnZ1ty6UMSaIriN9dxgxHz9surHzxCWHRpMdf5B1/31tfbv1lV/8ctGYbgfV1sxqCbvzhz82w5zf24FqmEdqxq/T7f+/bng6XIR7I5YnCNdO5sFoBms8Irre8IR8N93038BPEZms5CJPUUAAAAASUVORK5CYII='/>\
                        </g>\
                    </g>\
                </svg>\
            </span>\
        </span>"

        input = "<input class='mq-answer'  type='text' class='button-5p mq-answer' style='min-width:200px;margin-right: 5px;'></input>"
        do {
            // value = value.replace("{{input}}", "<input  #mathAnswers type='text' class='button-5p mq-answer' style='margin-right: 5px;'>x=</input>");
            value = value.replace(
                "{{input}}", input
            );
        }
        while (value.indexOf("{{input}}") != -1)

        return this.sanitizer.bypassSecurityTrustHtml(value);
    }

    
}



//  <span #mathAnswers>x=1 </span>
// <span #mathAnswers>x=2 </span>
// <span #mathAnswers>x=3 </span>