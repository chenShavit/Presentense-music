import { Component } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
    selector: 'did-not-pass',
    templateUrl: './did-not-pass.component.html',
    styleUrls: ['./did-not-pass.component.css']
})
export class DidNotPassComponent {

    constructor(public dataService: DataService) {
    }
}
