import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [CommonModule, FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  num1: number = 0;
  num2: number = 0;

  result: number | null = null;
  operator: string = '';
  history: string[] = [];

  /* calculate(string: string) 
  {
    if (string === '+') {
      this.result = (parseFloat(this.num1) + parseFloat(this.num2)).toString();
    } 
    else if (string === '-') {
      this.result = (parseFloat(this.num1) - parseFloat(this.num2)).toString();
    } 
    else if (string === '*') {
      this.result = (parseFloat(this.num1) * parseFloat(this.num2)).toString();
    } 
    else if (string === '/') {
      this.result = (parseFloat(this.num1) / parseFloat(this.num2)).toString();
    }
  } */


  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    const validKeys = ['+', '-', '*', '/', 'Enter'];
    if (validKeys.includes(event.key)) {
      if (event.key === 'Enter') {
        this.calculate(this.operator);
      } else {
        this.operator = event.key;
      }
    }
  }
  calculate(operator: string) {

    let res: number;

    switch (operator) 
    {
      case '+':
        this.result = this.num1 + this.num2;
        break;
      case '-':
        this.result = this.num1 - this.num2;
        break;
      case '*':
        this.result = this.num1 * this.num2;
        break;
      case '/':
        if (this.num2 !== 0) {
          this.result = (this.num1 / this.num2);
        }
        else {
          NaN; // Handle division by zero;
        }
        break;
      default:
        return; // Handle invalid operator;
    }
    //this.result = res;
    const entry = `${this.num1} ${operator} ${this.num2} = ${this.result}`;
    this.history.unshift(entry); // show recent first
  }
  clearHistory() {
    this.history = [];
    this.result = null;
    this.num1 = 0;
    this.num2 = 0;
  }

}


