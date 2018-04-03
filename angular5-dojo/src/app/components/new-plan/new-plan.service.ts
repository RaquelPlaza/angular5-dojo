import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class NewPlanService {

  constructor(private _http: HttpClient ) { }

  apiRoot = 'http://localhost:3000/';

  postPlan(plan): Observable<any> {
    const body = JSON.stringify(plan);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = {headers: headers};
    return this._http.post<any>(this.apiRoot + 'plans', body, options);
  }


}
