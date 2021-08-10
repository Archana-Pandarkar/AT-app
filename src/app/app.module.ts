import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { CounterComponent } from './component/counter/counter.component';
import { UserDetailComponent } from './component/user-detail/user-detail.component';
import { CalculatorComponent } from './component/calculator/calculator.component';
import { TodoComponent } from './component/todo/todo.component';
import { AddTodoComponent } from './component/todo/add-todo/add-todo.component';
import { TodoListComponent } from './component/todo/todo-list/todo-list.component';
import { HomeComponent } from './routingfun/home/home.component';
import { AboutComponent } from './routingfun/about/about.component';
import { ContactComponent } from './routingfun/contact/contact.component';
import { ProjectComponent } from './routingfun/project/project.component';
import { RoutingfunComponent } from './routingfun/routingfun.component';
import { PageNotFoundComponent } from './routingfun/page-not-found/page-not-found.component';
import { Home1Component } from './routingfun/home1/home1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Home2Component } from './component/home2/home2.component';
import { FormExampleComponent } from './form-example/form-example.component';


import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { ParentComponent } from './routingfun/parent/parent.component';
import { ChildComponent } from './routingfun/child/child.component';
// import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { DialogContentComponent } from './angular-material/dialog-content/dialog-content.component';
import { DialogExampleComponent } from './angular-material/dialog-example/dialog-example.component';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    CounterComponent,
    UserDetailComponent,
    CalculatorComponent,
    TodoComponent,
    AddTodoComponent,
    TodoListComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProjectComponent,
    RoutingfunComponent,
    PageNotFoundComponent,
    Home1Component,
    Home2Component,
    FormExampleComponent,
    ParentComponent,
    ChildComponent,
    DialogContentComponent,
    DialogExampleComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,

    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,

    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
