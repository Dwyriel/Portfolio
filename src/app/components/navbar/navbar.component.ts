import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

    @Input('currNavItem') activeNavItem: string = 'home';

    constructor() {
    }

    isMenuCollapsed = true;
}
