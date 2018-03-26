import { Component, OnInit } from '@angular/core';
import { MyPlanService } from './my-plan.service';

@Component({
  selector: 'app-my-plans',
  templateUrl: './my-plans.component.html',
  styleUrls: ['./my-plans.component.css']
})
export class MyPlansComponent implements OnInit {

  myPlans: any[];

  constructor(private _myPlansService : MyPlanService) { }

  ngOnInit() {
    this._myPlansService.getPlans()
      .subscribe(
        response => {
          this.myPlans = response;
        },
        error => {
          console.log("MyPlans getPlans: FAILED")
        }
      )
  }

}
