import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'image'
})

export class ImageSearch implements PipeTransform {
    transform(value: any): any {
        // let re = /\/images\/[\w\s_.-]+\.png/gi
        let re = /https?:\/\/.*?\.(?:png|jpg|jpeg)/ig;
        let res = value.match(re);
        if (res) {
            res.forEach((src: string) => {
                value = value.replace(src, "<img src='" + src + "'>");
            });
        }
        return value;
    }
}
