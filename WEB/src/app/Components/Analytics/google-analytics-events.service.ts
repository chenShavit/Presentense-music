import {Injectable} from "@angular/core";
declare var ga: any;

@Injectable()
export class GoogleAnalyticsEventsService {

  public emitEvent(eventCategory: string,
                   eventAction: string,
                   eventLabel: string = null,
                   eventValue: number = null) {
    
  }
}