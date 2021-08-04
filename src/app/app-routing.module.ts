import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes ,RouterModule } from '@angular/router';
import { Home1Component } from './routingfun/home1/home1.component';
import { HomeComponent } from './routingfun/home/home.component';
import { AboutComponent } from './routingfun/about/about.component';
import { ContactComponent } from './routingfun/contact/contact.component';
import { ProjectComponent } from './routingfun/project/project.component';
import { PageNotFoundComponent } from './routingfun/page-not-found/page-not-found.component';


const routes: Routes=[
  {
    path: "",
    component: Home1Component,
    pathMatch:'full'
  },
  {
    path: 'app-home',
    component: HomeComponent
  },
  {
    path:'app-about',
    component: AboutComponent
  },
  {
    path:'app-contact',
    component: ContactComponent
  },
  {
    path:'app-project',
    component: ProjectComponent
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
