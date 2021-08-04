import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userDetails: any = [
    {
      name: 'Archana',
      age:21,
      gender : 'female',
      address : 'pimpalgaon Pisa' 
    }
  ];
  name: string = '';
  age: number = 0;
  gender: string = '';
  address:string = '';
  constructor() {
  }


  ngOnInit(): void {
  }

  addUserToList() {
    let user = {
      name: this.name,
      age: this.age,
      gender: this.gender,
      address: this.address 
    };
    this.userDetails.push(user)
    this.name = '';
    this.age = 0 ;
    this.gender = '';
    this.address= '';
    }
}
