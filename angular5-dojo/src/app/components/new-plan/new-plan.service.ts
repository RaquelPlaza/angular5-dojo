import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class NewPlanService {

  constructor(private _http: HttpClient ) { }

  postPlan(plan): Observable<any> {
    const body = JSON.stringify(plan);
    return this._http.post<any>('https://angular2-1477585205551.firebaseio.com/', body);
  }


}
