import { Component, Output, Input, EventEmitter, NgZone, AfterViewInit } from '@angular/core';
import { DataService } from '../../data.service';
import * as myGlobals from '../../globals';

declare const gapi: any;
declare const $: any

@Component({
  selector: 'google-intergration',
  templateUrl: './google-intergration.component.html',
  styleUrls: ['./google-intergration.component.css']
})

     export class GoogleComponent implements AfterViewInit {
      globals: any;
      auth2: any;
      @Output() onSuccess = new EventEmitter<any>();
      @Input() showTerms :boolean 

      facebookUser: any = { name: '', email: '' };

      constructor(private _ngZone: NgZone, public dataService: DataService) {
      }
      

        ngAfterViewInit(): void {
        }

        onSignIn(googleUser:any) {
          // Useful data for your client-side scripts:
          var profile = googleUser.getBasicProfile();
          console.log("ID: " + profile.getId()); // Don't send this directly to your server!
          console.log('Full Name: ' + profile.getName());
          console.log('Given Name: ' + profile.getGivenName());
          console.log('Family Name: ' + profile.getFamilyName());
          console.log("Image URL: " + profile.getImageUrl());
          console.log("Email: " + profile.getEmail());
      
          // The ID token you need to pass to your backend:
          var id_token = googleUser.getAuthResponse().id_token;
          console.log("ID Token: " + id_token);

            // this.facebookUser.email = responses.email;
            this.dataService['facebookUser'] = profile.getEmail();
            this.dataService['facebookUser'].password = profile.getId();
            this.onSuccess.emit(profile);
          }



}
