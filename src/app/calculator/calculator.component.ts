import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
  calculate(operator: string) {

    switch (operator) {
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
          this.result = null; // Handle division by zero;
        }
        break;
      default:
        this.result = null; // Handle invalid operator;
    }
  }

}


