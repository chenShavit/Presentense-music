import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import Translations from '../../Translations/Translations';


@Component({
    selector: 'answer-sent',
    templateUrl: './answer-sent.component.html',
    styleUrls: ['./answer-sent.component.css']
})
export class AnswerSentComponent {

    constructor(public dataService: DataService) {
    }
}
