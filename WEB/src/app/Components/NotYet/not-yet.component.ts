import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import * as myGlobals from '../../globals';

@Component({
    selector: 'not-yet',
    templateUrl: './not-yet.component.html',
    styleUrls: ['./not-yet.component.css']
})
    export class NotyetComponent implements OnInit {
        globals: any
        bigTitle: string
        type: string
        date: string
    
    
        constructor(public dataService: DataService, private route: ActivatedRoute, private router: Router) {
        }
        
        ngOnInit(): void { 
            this.dataService.type = '4';
            this.type = '4';
            this.date = '04.02';

            // subscribe to router event
            this.route.queryParams.subscribe((params: Params) => {
               if (params['ar']=="") {
                this.dataService.currentLanguage.type = 'he'
                this.dataService.changeLanguage()
               }
                
            });
        }
    }