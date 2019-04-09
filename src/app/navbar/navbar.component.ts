import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth_db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) { }

  search_input: string = '';

  ngOnInit() {
  }

  searchChanged(event) {
    if(event.keyCode > 8 && event.keyCode <= 46) return;
    if(event.keyCode == 8) {
      if(this.search_input.length == 0) return;
      this.search_input = this.search_input.slice(0,-1);
      return;
    }
    this.search_input += event.key;
  }

  logout() {
    this.auth.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

  searchKeyPress(event) {
    if(event.keyCode == 13) {
      this.toSearch();
    }
  }

  toSearch() {
    let tmp = this.search_input;
    this.search_input = '';
    this.router.navigate(['/reroute', 'search?'+tmp]);
  }

}
