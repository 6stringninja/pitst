import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';
import { ClientInfo } from 'src-api/shared/models/ClientInfo/ClientInfo';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  constructor(public clients: ClientsService) { }

  ngOnInit() {
    this.clients.clients.push(new ClientInfo('test'));
    this.clients.get_products();
  }

}
