import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { NewPlanService } from './new-plan.service';

@Component({
  selector: 'app-new-plan',
  templateUrl: './new-plan.component.html',
  styleUrls: ['./new-plan.component.css']
})
export class NewPlanComponent implements OnInit {
  newPlanForm: FormGroup;
  constructor(private newPlanService: NewPlanService) {}

  ngOnInit() {
    this.newPlanForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'date': new FormControl(null, Validators.required),
      'startingTime': new FormControl(null, Validators.required),
      'finishingTime': new FormControl(null, Validators.required),
      'location': new FormControl(null, Validators.required)
    });

  }

  resolvePlan() {

    const planStart = new Date(this.newPlanForm.value.date.setHours(
                                this.newPlanForm.value.startingTime.getHours(),
                                this.newPlanForm.value.startingTime.getMinutes(),
                                this.newPlanForm.value.startingTime.getSeconds()));
    const planFinish = new Date(this.newPlanForm.value.date.setHours(
                                this.newPlanForm.value.finishingTime.getHours(),
                                this.newPlanForm.value.finishingTime.getMinutes(),
                                this.newPlanForm.value.finishingTime.getSeconds()));

    return ({
    'name': this.newPlanForm.value.name,
    'description': this.newPlanForm.value.description,
    'starting': planStart,
    'finishing': planFinish,
    'location': this.newPlanForm.value.location
  });
  }

  onSubmit() {
    this.newPlanService.postPlan(this.newPlanForm.value)
      .subscribe(
        data => {
          return true;
        },
        error => {
          console.error('Error!');
          return Observable.throw(error);
        }
      );

    console.log(this.resolvePlan());
  }

}
