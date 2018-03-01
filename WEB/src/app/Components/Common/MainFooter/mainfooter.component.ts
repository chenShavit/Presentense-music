import { Component, OnInit, Input } from '@angular/core';
import * as myGlobals from '../../../globals';
import { DataService } from '../../../data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'main-footer',
  templateUrl: './mainfooter.component.html',
  styleUrls: ['./mainfooter.component.css']
})

export class MainFooterComponent implements OnInit {
  @Input() minimized: boolean;
  @Input() isHome: boolean;
  @Input() showPartners: boolean = true;
  isDesktop: boolean;
  globals: {};
  isPisaSite: boolean
  isSocialSite: boolean

  constructor(public dataService: DataService, route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.globals = myGlobals;
    this.isDesktop = myGlobals.isDesktop;
    this.isPisaSite = this.router.url.indexOf('pisa') != -1
    this.isSocialSite = window.location.hostname.indexOf('social') != -1
  }

  footerLogo() {
    window.scrollTo(0, 0);
  }

  public termsClicked() {
    this.router.navigate(['/terms']);
  }
  public privacyClicked() {
    this.router.navigate(['/privacySettings']);
  }
}
