
'use strict';
// import { CookieService } from 'angular2-cookie/core';
import { Injectable } from '@angular/core';
// import { DataService } from './data.service';
import { Translations } from './Translations/translations';

export const version: string = "1.0.0";
export const isDesktop: boolean = !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

@Injectable()
export class GlobalsService {
    translations: any
    constructor() {
        this.translations = Translations;
    }

}
