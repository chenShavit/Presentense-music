import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../data.service';
import { Router } from '@angular/router';
import * as myGlobals from '../../../globals';
import InputChecker from '../../../DataHelper/InputChecker';
import Translations from '../../../Translations/Translations';


@Component({
    selector: 'pisa-header',
    templateUrl: './pisa-header.component.html',
    styleUrls: ['./pisa-header.component.css']
})
export class PisaHeaderComponent implements OnInit {

    @Input() level:number;
    levelString: string
    bgForHeader: string

    constructor(public dataService: DataService, public route: ActivatedRoute, private router: Router) {
    }
    
    ngOnInit(): void { 
        
      switch (this.level) {
          case 1:
          this.levelString = 'קל מאוד'
          break;
          case 2:
          this.levelString = 'קל'
          break;
           case 3:
           this.levelString = 'בינוני'
           break; 
           case 4:
           this.levelString = 'קשה'
           break;
           case 5:
           this.levelString = 'קשה מאוד'
           break;  
          default:
              break;
      }
    }

    setBgForHeader(): Object {

        switch (this.level) {
            case 1:
            this.bgForHeader = "linear-gradient(180deg, rgba(35, 190, 110, .83), rgba(35, 190, 110, .83)), url('/images/658.jpg');"
            break;
            case 2:
            this.bgForHeader = "linear-gradient(180deg, rgba(35, 190, 110, .83), rgba(35, 190, 110, .83)), url('/images/658.jpg');"
            break;
             case 3:
             this.bgForHeader = "linear-gradient(315deg, #f1d97a 49%, #d29d3b);"
             break; 
             case 4:
             this.bgForHeader = "linear-gradient(315deg, #f1d97a 49%, #d29d3b);"
             break;
             case 5:
             this.bgForHeader = "linear-gradient(180deg, rgba(218, 50, 50, .68), rgba(218, 50, 50, .68)), url('/images/8681-Converted.png');"
             break;  
            default:
                break;
        }
        return new Object({ 'background-color': 'red'});
    }
}
