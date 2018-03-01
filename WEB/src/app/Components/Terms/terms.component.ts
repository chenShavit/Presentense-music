import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import * as myGlobals from '../../globals';
declare var $: any;

@Component({
    selector: 'terms',
    templateUrl: './terms.component.html',
    styleUrls: ['./terms.component.css']
})
    export class TermsComponent implements OnInit {
        globals: any
        bigTitle: string
        type: string
        date: string
    
    
        constructor(public dataService: DataService, private route: ActivatedRoute, private router: Router) {
        }
        
        ngOnInit(): void { 
                this.dataService.type = '5';
            
        }

        toggleMenu() {

            $('.navigation-menup').toggleClass('open');
        }
    }