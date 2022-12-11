import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import {IAppInfo} from "../interfaces/app-info";
import {AppInfo} from "../classes/app-info";

@Injectable({
    providedIn: 'root'
})
export class AppResourcesService {
    private static appInfo = new BehaviorSubject<IAppInfo>(new AppInfo());
    public static readonly maxMobileWidth: number = 800;

    /**
     * Puts and pushes new information into appInfo and notifies every listener.
     * @param appInfo the new information for appInfo.
     */
    public static PushAppInfo(appInfo: IAppInfo) {
        this.appInfo.next(appInfo);
    }

    /**
     * Retrives the appInfo's observable.
     * @returns an observable for the appInfo object.
     */
    static GetAppInfo() {
        return this.appInfo.asObservable();
    }
}
