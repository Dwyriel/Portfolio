import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserDbService} from "./services/user-db.service";
import {fromEvent, Observable, Subscription} from "rxjs";

import {AppInfo} from "./interfaces/app-info";
import {AppResourcesService} from "./services/app-resources.service";

@Component({
    selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'Portfolio';

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
        AppResourcesService.PushAppInfo({
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
            outerWidth: window.outerWidth,
            outerHeight: window.outerHeight,
            userAgent: navigator.userAgent
        });
        if (this.windowResizeSubscription && !this.windowResizeSubscription.closed)
            this.windowResizeSubscription.unsubscribe();
        this.windowResizeObservable = fromEvent(window, 'resize');
        this.windowResizeSubscription = this.windowResizeObservable.subscribe(event => {
            AppResourcesService.PushAppInfo({
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight,
                outerWidth: window.outerWidth,
                outerHeight: window.outerHeight,
                userAgent: navigator.userAgent
            });
        });
    }
}
