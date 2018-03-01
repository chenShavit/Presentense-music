import { Component, OnInit, Input, NgZone } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/core';
import { Router } from '@angular/router';
import * as myGlobals from '../../../globals';
import { DataService } from '../../../data.service';

@Component({
  selector: 'main-header',
  templateUrl: './mainheader.component.html',
  styleUrls: ['./mainheader.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(-100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})

export class MainHeaderComponent implements OnInit {

  globals: any
  @Input() hidesignup: boolean
  constructor(public dataService: DataService, private router: Router, private _ngZone: NgZone) {
  }

  ngOnInit(): void {
    this.globals = myGlobals;
  }

  analyticsEvent(eventName: string): void {
    this.dataService.sendAnalyticsEvent(this.dataService.getChallengeName(),eventName,'לחיצה','auto_event')
  }
}
