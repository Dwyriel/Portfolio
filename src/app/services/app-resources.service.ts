import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import {AppInfo, defaultAppInfo} from "../interfaces/app-info";

@Injectable({
    providedIn: 'root'
})
export class AppResourcesService {
    private static appInfo = new BehaviorSubject<AppInfo>(defaultAppInfo);
    public static readonly maxMobileWidth: number = 800;

    /**
     * Puts and pushes new information into appInfo and notifies every listener.
     * @param appInfo the new information for appInfo.
     */
    public static PushAppInfo(appInfo: AppInfo) {
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
