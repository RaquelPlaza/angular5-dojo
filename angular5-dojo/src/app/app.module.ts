import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule }      from '@angular/http';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { NewPlanComponent } from './components/new-plan/new-plan.component';
import { MyPlansComponent } from './components/my-plans/my-plans.component';
import { MyTagsComponent } from './components/my-tags/my-tags.component';
import { SharedModule } from './shared/shared.module';
import { MyPlanService } from './components/my-plans/my-plan.service';

const appRoutes: Routes = [
  { path: '', component: NewPlanComponent},
  { path: 'new-plan', component: NewPlanComponent },
  { path: 'my-plans', component: MyPlansComponent },
  { path: 'my-tags', component: MyTagsComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    NewPlanComponent,
    MyPlansComponent,
    MyTagsComponent
  ],
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule
    RouterModule.forRoot(appRoutes), 
    BsDatepickerModule.forRoot()
  ],
  providers: [MyPlanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
