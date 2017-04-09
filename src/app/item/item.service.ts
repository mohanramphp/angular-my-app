import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemService {
  private resource = '/items';
  constructor(private http: Http) { }

  getItems(): Observable<any> {
    return this.http
      .get(this.resource)
      .map((r: Response) => r.json());
  }

}
