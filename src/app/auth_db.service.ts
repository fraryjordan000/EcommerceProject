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
  photoURL: string;
  cart: any;
  tickets: any;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<User>;
  tickets: any = [];
  cart: any = [];

  constructor(public afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private ngZone: NgZone) {

    this.user = this.afAuth.authState.pipe(switchMap(user => {
      if (user) {
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
        let parent = this;
        function goHome() {
          parent.ngZone.run(() => {
            parent.router.navigate(['/home']).then(() => {
              if (parent.router.url == '/login') {
                goHome();
              }
            });
          });
        }
        if (this.router.url == '/login') {
          goHome();
        }
      });
  }

  private updateUserData(user) {
    let hasRun: boolean = false;
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    userRef.get().subscribe(res => {
      if (res.data() == undefined && !hasRun) {
        const data: User = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          cart: [],
          tickets: []
        };

        hasRun = true;

        return userRef.set(data);
      }
    });
  }

  getCart(cb: Function) {
    let hasRun: boolean = false;

    this.afAuth.authState.subscribe(user => {
      if(!hasRun) {
        const cartRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

        cartRef.get().subscribe(res => {
          if(!hasRun) {
            let cart = res.data().cart;
            cart = cart != undefined ? cart : [];
            this.cart = cart;
            cb(cart);
            hasRun = true;
          }
        });
      }
    });
  }

  addToCart(item: any, cb: Function) {
    let hasRun: boolean = false;

    this.getCart(res => {
      this.afAuth.authState.subscribe(user => {
        if(!hasRun) {
          const cartRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
  
          res.push(item);
          this.cart = res;
          const data: User = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            cart: res,
            tickets: this.tickets
          };
  
          cartRef.set(data);
          hasRun = true;
          cb();
        }
      });
    });
  }

  removeFromCart(itemID: number, cb: Function) {
    let hasRun: boolean = false;

    this.getCart(res => {
      this.afAuth.authState.subscribe(user => {
        if(!hasRun) {
          const cartRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
  
          for(let i in res) {
            if(res[i].id === itemID) {
              res.splice(i,1);
            }
          }
          this.cart = res;
          const data: User = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            cart: res,
            tickets: this.tickets
          };
  
          cartRef.set(data);
          hasRun = true;
          cb();
        }
      });
    });
  }

  itemsInCart(items: any, cb: Function) {
    this.getCart(res => {
      for(let i in res) {
        for(let j in items) {
          if(items[j].id === res[i].id) {
            items[j].inCart = true;
          }
        }
      }
      cb(items);
    });
  }
  
  clearCart() {
    let hasRun: boolean = false;

    this.afAuth.authState.subscribe(user => {
      if(!hasRun) {
        const cartRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

        this.cart = [];
        const data: User = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          cart: [],
          tickets: this.tickets
        };

        cartRef.set(data);
        hasRun = true;
      }
    });
  }

  getTickets(cb: Function) {
    let hasRun: boolean = false;

    this.afAuth.authState.subscribe(user => {
      if(!hasRun) {
        const ticketsRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

        ticketsRef.get().subscribe(res => {
          if(!hasRun) {
            let tickets = res.data().tickets;
            tickets = tickets != undefined ? tickets : [];
            this.tickets = tickets;
            cb(tickets);
            hasRun = true;
          }
        });
      }
    });
  }

  addTicket(ticket: any) {
    let hasRun: boolean = false;

    this.getTickets(res => {
      this.afAuth.authState.subscribe(user => {
        if(!hasRun) {
          const cartRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
  
          res.push(ticket);
          this.tickets = res;
          const data: User = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            cart: this.cart,
            tickets: res
          };
  
          cartRef.set(data);
          hasRun = true;
        }
      });
    });
  }

}
