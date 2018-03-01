
import { Component, OnInit, NgZone } from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import * as myGlobals from '../../globals';
import UserDataModel from '../../DataModels/UserDataModel';

@Component({
    selector: 'popup-confirm-terms',
    templateUrl: './popup-confirm-terms.component.html',
    styleUrls: ['./popup-confirm-terms.component.css']
})
export class ConfirmComponent implements OnInit {
    globals: any;
    termsConfirmed: boolean = false;

    constructor(route: ActivatedRoute, public dataService: DataService, private router: Router) {
    }

    ngOnInit(): void {
        this.globals = myGlobals;
    }

    termsSubmitted(): void {
        this.dataService.joinContest().then(res => {
            this.dataService.showConfirmTerms = false;
        }).catch(err => alert('Something went wrong..' + err)/*TODO: change to warning popup*/);
    }
}
