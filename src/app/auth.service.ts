import { Injectable, NgZone } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

import { Observable, of } from 'rxjs';
import { switchMap, take, map, tap } from 'rxjs/operators';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';

interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<User>;

  constructor(public afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router,
              private ngZone: NgZone) {

                this.user = this.afAuth.authState.pipe(switchMap(user => {
                  if(user) {
                    return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
                  } else {
                    return of(null);
                  }
                }));
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  logOut() {
    this.afAuth.auth.signOut();
    location.reload();
    return true;
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user);
        this.ngZone.run(()=>{
          this.router.navigate(['/headlines']);
        });
      });
  }

  private updateUserData(user) {
    let hasRun: boolean = false;
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    userRef.get().subscribe(res=>{
      if(res.data() == undefined && !hasRun) {
        const data: User = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL
        };

        hasRun = true;

        return userRef.set(data);
      }
    });
  }

  
}