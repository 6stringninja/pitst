import { Injectable } from '@angular/core';
import {ClientInfo} from '../../src-api/shared/models/ClientInfo/ClientInfo';
import { HttpClient } from '@angular/common/http';
import { ClientList } from '../../src-api/shared/ClientList/ClientList';
@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  clients: ClientInfo[];
  baseUrl: string;
 
  constructor(private httpClient: HttpClient) {
    this.clients = new Array<ClientInfo>();
    this.baseUrl = 'http://localhost:4200/api';
   }

  get_products() {
    this.httpClient.get<ClientList>(this.baseUrl + '/sh').subscribe(res => {
      console.log(res);
    });
  }
}
