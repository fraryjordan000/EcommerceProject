import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth_db.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private auth: AuthService, private spinner: NgxSpinnerService) { }

  tickets: any = [];

  ngOnInit() {
    this.spinner.show();
    this.auth.getTickets(res => {
      this.tickets = res;
      this.spinner.hide();
    });
  }

}
