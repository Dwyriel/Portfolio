import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
    providedIn: 'root'
})
export class UserDbService {
    private collection: string = "users";

    constructor(private fireDatabase: AngularFirestore, public auth: AngularFireAuth) {
    }

}
