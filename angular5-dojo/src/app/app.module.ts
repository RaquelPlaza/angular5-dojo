import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule,
          MatButtonModule,
          MatFormFieldModule,
          MatInputModule,
          MatNativeDateModule,
          MatDatepickerModule
} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NewPlanComponent } from './components/new-plan/new-plan.component';
import { MyPlansComponent } from './components/my-plans/my-plans.component';
import { MyTagsComponent } from './components/my-tags/my-tags.component';

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
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
