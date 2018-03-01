import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';

export interface ComponentCanDeactivate {
  canDeactivate: () => [boolean | Observable<boolean>, boolean];
}

export class PendingChangesGuard implements CanDeactivate<ComponentCanDeactivate> {
  canDeactivate(component: ComponentCanDeactivate): boolean | Observable<boolean> {
    // if there are no pending changes, just allow deactivation; else confirm first
    let resp = component.canDeactivate();
    if (resp[0])
      return true
    // NOTE: this warning message will only be shown when navigating elsewhere within your angular app;
    // when navigating away from your angular app, the browser will show a generic warning message
    // see http://stackoverflow.com/a/42207299/7307355
    if (resp[1])
      return confirm('WARNING: You are leaving the Questionnaire, Are you Sure?');

    return false;
  }
}