import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const baseURL = 'http://127.0.0.1:8000/api/items';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private items: any[] = [];

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getItems(): any {
    return this.httpClient
    .get(baseURL).toPromise()
    .then((response: any) => response);
  }

  deleteItem(id : any) {
    return this.httpClient
    .delete(baseURL + '/' + id).toPromise()
    .then((response: any) => response);
  }

  addItem(item: any) {
    return this.httpClient
    .post(baseURL, JSON.stringify(item), this.httpOptions).toPromise()
    .then((response: any) => response);
  }

  findItem(id : any) {
    return this.httpClient
    .get(baseURL + '/' + id + '/edit').toPromise()
    .then((response: any) => response);
  }

  updateItem(id : any, item : any) {
    return this.httpClient
    .put(baseURL + '/' + id, JSON.stringify(item), this.httpOptions).toPromise()
    .then((response: any) => response);
  }
}
