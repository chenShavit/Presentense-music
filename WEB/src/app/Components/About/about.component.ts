import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import Translations from '../../Translations/Translations';


@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent {


    constructor(public dataService: DataService) {
    }
}
