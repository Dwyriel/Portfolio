export interface AppInfo {
    innerWidth: number;
    innerHeight: number;
    outerWidth: number;
    outerHeight: number;
    userAgent: string;
}

export const defaultAppInfo: AppInfo = {innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0, userAgent: ""};
