import { Injectable } from '@angular/core';
import { Router, RoutesRecognized, NavigationEnd } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PreviousRouteService {
  private previousUrl: string;
  private currentUrl: string;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(e => e instanceof RoutesRecognized))
      .pipe(pairwise())
      .subscribe((event: any[]) => {
        this.previousUrl = event[0].urlAfterRedirects;
      });
  }

  public getPreviousUrl() {
    return this.previousUrl;
  }
}
