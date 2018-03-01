import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import * as myGlobals from '../../globals';
import InputChecker from '../../DataHelper/InputChecker';
import Translations from '../../Translations/Translations';


@Component({
    selector: 'pisa-questions-list',
    templateUrl: './pisa-questions-listing.component.html',
    styleUrls: ['./pisa-questions-listing.component.css']
})
export class PisaQuestionsListComponent implements OnInit {
    
    @Input() questions:Array<any>;
    @Input() level:number;

    constructor(public dataService: DataService, public route: ActivatedRoute, private router: Router) {
    }
    
    ngOnInit(): void { 
      
    }
}
