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
      'location': new FormControl(null, Validators.required)
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

    console.log('this is submitted');
  }

}
