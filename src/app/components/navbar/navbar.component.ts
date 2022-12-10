import {Component, Input} from '@angular/core';
import {routerNames} from "../../classes/static-classes";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

    routerNames = routerNames;

    @Input('current-route') currentRoute: string = 'home';

    constructor() {
    }

    isMenuCollapsed = true;
}
