import { Component, Output, EventEmitter, NgZone, Input } from '@angular/core';
import { DataService } from '../../data.service';
import * as myGlobals from '../../globals';


declare var FB: any;
declare var window: any;

@Component({
  selector: 'facebook-integration',
  templateUrl: './facebook-intergration.component.html',
  styleUrls: ['./facebook-intergration.component.css']
})

export class FacebookComponent {
  globals: any;
  @Output() onSuccess = new EventEmitter<any>();
  @Input() showTerms :boolean
    facebookUser: any = { name: '', email: '' };


  constructor(private _ngZone: NgZone, public dataService: DataService) {
    if (window.FB) {
      var that = this
      FB.Event.subscribe('auth.statusChange', ((response: any) => {
        if (response.status === 'connected') {
          console.log(response.authResponse.userID)
          FB.api('/' + response.authResponse.userID + '?fields=name, email, birthday, hometown, gender', ((responses: any) => {

            //  if (this.showTerms) {
            //   that._ngZone.run(() => {
            //     that.dataService.alertMessage = "היי, נראה ששכחת לקרוא את התקנון";
            //     that.dataService.alertSubMessage = "";
            //     that.dataService.showGenericPopup = true;
            //   })
            //  }
            //  else {
              if (responses.email) {
                // this.facebookUser.email = responses.email;
                this.dataService['facebookUser'] = responses;
                this.dataService['facebookUser'].password = responses.id;
                this.onSuccess.emit(responses);
              } else {
                FB.logout(function (response: any) {
                  this.dataService.alertMessage = "לא ניתנה הרשאת אימייל";
                  this.dataService.alertSubMessage = "";
                  this.dataService.showGenericPopup = true;
                  return;
                });
              }
             //}
          }));


        }
      }));
    }

  }
  ngOnInit(): void {
    this.globals = myGlobals;
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }

}
