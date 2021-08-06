import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes ,RouterModule } from '@angular/router';
import { Home1Component } from './routingfun/home1/home1.component';
import { HomeComponent } from './routingfun/home/home.component';
import { AboutComponent } from './routingfun/about/about.component';
import { ContactComponent } from './routingfun/contact/contact.component';
import { ProjectComponent } from './routingfun/project/project.component';
import { PageNotFoundComponent } from './routingfun/page-not-found/page-not-found.component';
import { Home2Component } from './component/home2/home2.component';
import { CalculatorComponent } from './component/calculator/calculator.component';
import { CounterComponent } from './component/counter/counter.component';
import { UserDetailComponent } from './component/user-detail/user-detail.component';
import { TodoComponent } from './component/todo/todo.component';

const routes: Routes = [
//   {
//     path: "",
//     component: Home1Component,
//     pathMatch:'full'
//   },
//   {
//     path: 'home',
//     component: HomeComponent
//   },
//   {
//     path:'about',
//     component: AboutComponent
//   },
//   {
//     path:'contact',
//     component: ContactComponent
//   },
//   {
//     path:'project',
//     component: ProjectComponent
//   },
//   {
//    path:'**',
//    component: PageNotFoundComponent
//   }
// ]
{
  path: "",
  component: Home2Component,
  pathMatch:'full'
},
{
  path: 'calculator',
  component: CalculatorComponent
},
{
  path:'counter',
  component: AboutComponent
},
{
  path:'todo',
  component: ContactComponent
},
{
  path:'user-detail',
  component: ProjectComponent
},
// {
//  path:'**',
//  component: PageNotFoundComponent
// }
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
