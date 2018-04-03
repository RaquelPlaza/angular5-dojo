import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CategoryService } from './services/category.service';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [    
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [CategoryService],
  declarations: []
})
export class SharedModule { }
