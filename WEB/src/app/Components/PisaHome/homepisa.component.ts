import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import * as myGlobals from '../../globals';
import InputChecker from '../../DataHelper/InputChecker';
import Translations from '../../Translations/Translations';


@Component({
    selector: 'homepisa',
    templateUrl: './homepisa.component.html',
    styleUrls: ['./homepisa.component.css']
})
export class PisaHomeComponent implements OnInit {
    randomDifficulty: number

    constructor(public dataService: DataService, public route: ActivatedRoute, private router: Router) {
    }
    
    ngOnInit(): void { 
        this.randomDifficulty = Math.floor(Math.random() * 6);
        if (this.randomDifficulty==0) {
            this.randomDifficulty++
        }
    }
}
