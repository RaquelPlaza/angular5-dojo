import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class NewPlanService {

  constructor(private _http: HttpClient ) { }

  postPlan(plan): Observable<any> {
    const body = JSON.stringify(plan);
    return this._http.post<any>('http://localhost:3000/plans', body, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }


}
