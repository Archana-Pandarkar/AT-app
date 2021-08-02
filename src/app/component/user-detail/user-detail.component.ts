import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
    UserDetails: any = [
      {
      name:'archana',
      age:22
      }
    ];
    name: string = "";
    age: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  addUserToList(){
   let user = {
      name : this.name,
      age : this.age
     };
     this.UserDetails.push(user)
     this.name = '';
     this.age = 0;
 }
}
