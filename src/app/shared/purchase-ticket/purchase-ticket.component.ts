import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-purchase-ticket',
  templateUrl: './purchase-ticket.component.html',
  styleUrls: ['./purchase-ticket.component.scss']
})
export class PurchaseTicketComponent implements OnInit {

  @Input('ticket') ticket;

  constructor() {}

  ngOnInit() {}

}
