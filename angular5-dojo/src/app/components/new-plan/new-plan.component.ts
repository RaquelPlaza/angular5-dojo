import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-plan',
  templateUrl: './new-plan.component.html',
  styleUrls: ['./new-plan.component.css']
})
export class NewPlanComponent {
  plan = {
    name: '',
    description: '',
    date: '',
    location: ''
  };

  onSubmit(form: NgForm) {

    this.plan.name = form.value.name;
    console.log(this.plan.name);
    form.reset();
  }

}
