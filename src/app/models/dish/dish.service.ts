import { Injectable } from '@angular/core';

import { Dish } from './dish';
import { Headers, Http, RequestOptions } from '@angular/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DishService {

  private apiUrl = 'http://localhost:3000/dishes';

  constructor(private http: Http) { }

  findAll(): Observable<Dish[]> {
    return this.http.get(this.apiUrl)
      .map(response => response.json() as Dish[])
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
