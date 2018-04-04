import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { AppConfig } from "../../app.config";
import { IPlan } from "../models/plan";

@Injectable()
export class PlansService {

  apiRoot = '';

  constructor(private _http : HttpClient, private config : AppConfig ) { 
    this.apiRoot = config.getConfig('apiRoot');
  }

  getPlans(): Observable<IPlan[]> {
    return this._http.get<any>(this.apiRoot + 'plans')
      .do(data => {
        console.log(data);
      })
      .catch(this.handleError);
  }

  postPlan(plan): Observable<any> {
    const body = JSON.stringify(plan);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = {headers: headers};
    return this._http.post<any>(this.apiRoot + 'plans', body, options)
      .do(data => {
        // do something
      })
      .catch(this.handleError);
  }

  getCategories(): Observable<any> {
    return this._http.get<any>(this.apiRoot + 'categories')
      .do(data => {
        //TODO What?
      })
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

}
