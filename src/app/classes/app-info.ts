import {IAppInfo} from "../interfaces/app-info";

export class AppInfo implements IAppInfo{
    innerWidth: number = 0;
    innerHeight: number = 0;
    outerWidth: number = 0;
    outerHeight: number = 0;
    userAgent: string = "";
}
