import { Component, OnInit, HostBinding } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute, Params, RoutesRecognized } from '@angular/router';
import { DataService } from '../../data.service';
declare var $: any;

@Component({
  selector: 'my-app',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, public dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {

    $('#main-loader').remove();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });


    // global language detector
    this.router.events.subscribe(val => {

      if (val instanceof RoutesRecognized) {

        console.log(val.state.root.firstChild.queryParams);
        let lang = val.state.root.firstChild.queryParams.lang;
        if (lang == "ar") {
          this.dataService.currentLanguage.type = 'he'
          this.dataService.changeLanguage()
        }
      }
    });
  }


}

