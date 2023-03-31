import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TicketService} from "../../../services/tickets/ticket.service";
import {ITours} from "../../../models/tours";
import {TicketsStorageService} from "../../../services/tiсkets-storage/tiсkets-storage.service";
import {Router} from "@angular/router";
import {BlockStyleDirective} from "../../../directive/block-style.directive";

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

  tickets: ITours[];

  @ViewChild('tourWrap', {read:BlockStyleDirective}) blockDirective: BlockStyleDirective;
  @ViewChild('tourWrap') tourWrap: ElementRef;

  constructor(private ticketService: TicketService,
              private ticketStorage: TicketsStorageService,
              private router: Router) { }

  ngOnInit(): void {
    this.ticketService.getTickets().subscribe(
        (data) => {
      this.tickets = data;
      this.ticketStorage.setStorage(data);
          })
  }

  ngAfterViewInit() {
  }

  goToTicketInfoPage(item: ITours) {
    this.router.navigate([`/tickets/ticket/${item.id}`]);
  }

  directiveRenderComplete(ev: boolean) {
    this.blockDirective.initStyle(0);
  }
}
