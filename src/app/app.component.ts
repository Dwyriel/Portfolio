import {Component, OnDestroy, OnInit} from '@angular/core';
import {fromEvent, Observable, Subscription} from "rxjs";

import {UserDbService} from "./services/user-db.service";
import {AppResourcesService} from "./services/app-resources.service";
import {IAppInfo} from "./interfaces/app-info";
import {RouterNames} from "./classes/static-classes";

@Component({
    selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    public currentRoute = 'home';

    private appInfo: IAppInfo | undefined;

    private windowResizeObservable: Observable<Event> | undefined;
    private windowResizeSubscription: Subscription | undefined;

    constructor(private userDbService: UserDbService) {
    }

    ngOnInit() {
        this.PushPlatformInfo();
    }

    ngOnDestroy() {
        if (this.windowResizeSubscription && !this.windowResizeSubscription.closed)
            this.windowResizeSubscription.unsubscribe();
    }

    private PushPlatformInfo() {
        this.PushPlatformInfoToService();
        if (this.windowResizeSubscription && !this.windowResizeSubscription.closed)
            this.windowResizeSubscription.unsubscribe();
        this.windowResizeObservable = fromEvent(window, 'resize');
        this.windowResizeSubscription = this.windowResizeObservable.subscribe(() => {
            this.PushPlatformInfoToService();
        });
    }

    private PushPlatformInfoToService() {
        this.appInfo = {
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
            outerWidth: window.outerWidth,
            outerHeight: window.outerHeight,
            userAgent: navigator.userAgent
        };
        AppResourcesService.PushAppInfo(this.appInfo);
    }
}
