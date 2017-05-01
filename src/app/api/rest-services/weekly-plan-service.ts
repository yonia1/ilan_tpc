import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { WeeklyPlanList } from '../models/weekly-plan-list';

const response = require('../mocks/tpc.json');
/**
 * This will be our basic gateway to the server
 * It will create a resource to handle rest calls with our end point
 */
@Injectable()
export class WeeklyPlanService {
  constructor(private http: Http) {
    // todo(Elan) once you set up the end point we need to switch the rest call to use the http service.
  }

  public getWeeklyPlanList(): Observable<WeeklyPlanList> {
    return Observable.of(response);
  }

}
