import {AppInfo} from './app-info';
import {RouterNames} from "./static-classes";

describe('AppInfo', () => {
    it('should create an instance', () => {
        expect(new AppInfo()).toBeTruthy();
    });
});

describe('RouterNames', () => {
    it('should create an instance', () => {
        expect(new RouterNames()).toBeTruthy();
    });
});
