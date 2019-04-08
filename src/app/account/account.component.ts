import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth_db.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private auth: AuthService) { }

  tickets: any = [];

  ngOnInit() {
    this.auth.getTickets(res => {
      this.tickets = res;
    });
  }

}
