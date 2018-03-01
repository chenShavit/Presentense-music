
import { Component, OnInit, NgZone, Input } from '@angular/core';
import { DataService } from '../../../data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import * as myGlobals from '../../../globals';

@Component({
    selector: 'alert-popup-message',
    templateUrl: './AlertPopUpMessage.component.html',
    styleUrls: ['./AlertPopUpMessage.component.css']
})
export class AlertPopUpMessageComponent implements OnInit {
    globals: any;
    user: any;

    @Input() textForPopup: any
    @Input() subTextForPopup: any
    @Input() success: boolean = false;


    constructor(route: ActivatedRoute, public dataService: DataService, private router: Router, private _ngZone: NgZone) {

    }

    ngOnInit(): void {
        this.user = {};
        this.globals = myGlobals;
    }

}
