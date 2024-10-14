import { Injectable } from '@angular/core';
import { NavigationEnd, Router, Event as RouterEvent } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DeviceService {
	private _activeRoute = '/';

	constructor(private router: Router) { }

	public init(): void {
		this.router.events
      .pipe(filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this._activeRoute = event.urlAfterRedirects;
			});
	}

	public get activeRoute(): string {
		return this._activeRoute;
	}
}