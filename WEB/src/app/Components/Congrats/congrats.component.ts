import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import * as myGlobals from '../../globals';
import InputChecker from '../../DataHelper/InputChecker';
import Translations from '../../Translations/Translations';


@Component({
    selector: 'congrats',
    templateUrl: './congrats.component.html',
    styleUrls: ['./congrats.component.css']
})
export class CongratsComponent implements OnInit {
    globals: {}
    bigTitle: string
    congrats: string
    type: string
    @Output() close = new EventEmitter<boolean>();

    constructor(public dataService: DataService, public route: ActivatedRoute) {
    }
    ngOnInit(): void {
        if (this.route.snapshot.params['type']) {
            this.globals = myGlobals
            this.type = this.route.snapshot.params['type']
            this.dataService.type = this.type
            this.dataService.sendGoogleTagVirtualPage('המשך')
        }
    }

    continue(): void{
        this.close.emit(false);
    }


    
}
