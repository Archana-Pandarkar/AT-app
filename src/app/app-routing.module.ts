import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes ,RouterModule } from '@angular/router';
import { Home1Component } from './routingfun/home1/home1.component';
import { HomeComponent } from './routingfun/home/home.component';
import { AboutComponent } from './routingfun/about/about.component';
import { ContactComponent } from './routingfun/contact/contact.component';
import { ProjectComponent } from './routingfun/project/project.component';
import { PageNotFoundComponent } from './routingfun/page-not-found/page-not-found.component';
import { ParentComponent } from './routingfun/parent/parent.component';
import { ChildComponent } from './routingfun/child/child.component';

const routes: Routes = [
  {
    path: "",
    component: Home1Component,
    pathMatch:'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path:'project',
    component: ProjectComponent
  },
  {
    path:'parent',
    component: ParentComponent,
    children: [ {
      path:'child',
      component:ChildComponent


    }]
  },
  {
   path:'**',
   component: PageNotFoundComponent
  }
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
