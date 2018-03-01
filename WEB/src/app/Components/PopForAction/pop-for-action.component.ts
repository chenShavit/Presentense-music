
import { Component, OnInit, NgZone, Input } from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import * as myGlobals from '../../globals';

@Component({
    selector: 'pop-for-action',
    templateUrl: './pop-for-action.component.html',
    styleUrls: ['./pop-for-action.component.css']
})
export class PopForActionComponent implements OnInit {
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