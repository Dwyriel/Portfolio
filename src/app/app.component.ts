import {Component, OnInit} from '@angular/core';
import {UserDbService} from "./services/user-db.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'Portfolio';

    constructor(private userDbService: UserDbService) {
    }

    async ngOnInit() {
    }
}
