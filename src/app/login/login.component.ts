import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth_db.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.redirect();
  }

  isLoggedIn() {
    return this.auth.afAuth.authState.pipe(first()).toPromise();
  }

  async redirect() {
    const user = await this.isLoggedIn();
    if(user) {
      this.router.navigate(['/home']);
    }
  }

}
