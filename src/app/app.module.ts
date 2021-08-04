import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

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
    RoutingfunComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
