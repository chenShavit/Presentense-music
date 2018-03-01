import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import * as myGlobals from '../../globals';
import InputChecker from '../../DataHelper/InputChecker';
import Translations from '../../Translations/Translations';


@Component({
    selector: 'pisa-page',
    templateUrl: './pisapage.component.html',
    styleUrls: ['./pisapage.component.css']
})

export class PisaPageComponent implements OnInit {

    level: number;

    constructor(public dataService: DataService, public route: ActivatedRoute, private router: Router) {
    }

    ngOnInit(): void {
        let sub = this.route.params.subscribe(params => {
            this.level = params['level'] -1; // (+) converts string 'id' to a number
        })
    }


}
