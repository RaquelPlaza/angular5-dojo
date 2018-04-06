import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorNotificationComponent } from '../shared/components/error-notification/error-notification.component';


@NgModule({
  imports: [
    CommonModule,

  ],
  exports: [    
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    ErrorNotificationComponent
  ],
  providers: [],
  declarations: [ErrorNotificationComponent]
})
export class SharedModule { }
