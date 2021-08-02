import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Title :string = "Calculator App";
  num1 : number=0;
  num2 : number=0;
  Result : number=0;
  add(){
    this.Result = this.num1 + this.num2;
  }
  sub(){
    this.Result = this.num1 - this.num2;
  }
  mul(){
    this.Result = this.num1 * this.num2;
  }
  div(){
    this.Result = this.num1 / this.num2;
  }
}
