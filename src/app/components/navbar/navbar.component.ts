import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";

import {AppResourcesService} from "../../services/app-resources.service";
import {RouterNames} from "../../classes/static-classes";
import {IAppInfo} from "../../interfaces/app-info";
import {AppInfo} from "../../classes/app-info";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy{

    public routerNames: RouterNames = new RouterNames();
    public appInfo: IAppInfo = new AppInfo();

    @Input('current-route') currentRoute: string = 'home';

    private appInfoSubscription: Subscription | undefined;

    constructor() {
    }

    ngOnInit() {
        if(this.appInfoSubscription && !this.appInfoSubscription.closed)
            this.appInfoSubscription.unsubscribe();
        this.appInfoSubscription = AppResourcesService.GetAppInfo().subscribe(appInfo =>{
            this.appInfo = appInfo;
            console.log(this.appInfo);
        })
    }

    ngOnDestroy() {
    }

    isMenuCollapsed = true;
}
