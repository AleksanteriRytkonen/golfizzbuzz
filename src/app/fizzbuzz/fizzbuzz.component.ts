import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fizzbuzz',
  templateUrl: './fizzbuzz.component.html',
  styleUrls: ['./fizzbuzz.component.css']
})
export class FizzbuzzComponent implements OnInit {
  active = 2;
  title = 'fizzbuzz';
  lastOccurence: number | string = 0;
  fizzBuzz = [];
  timesToRun = 100;
  

  constructor() { }

  ngOnInit(): void {
    this.createFizzBuzz(this.timesToRun);
  }

  createFizzBuzz(times: number): void {
    for (let i = 1; i <= times; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        this.lastOccurence = 'FizzBuzz';
        this.fizzBuzz.push('FizzBuzz');
      } else if (i % 3 === 0 || String(i).includes('3')) {
        this.lastOccurence = 'Fizz';
        this.fizzBuzz.push('Fizz');
      } else if (i % 5 === 0 || String(i).includes('5')) {
        this.lastOccurence = 'Buzz'
        this.fizzBuzz.push('Buzz');
      } else {
        this.lastOccurence = i;
        this.fizzBuzz.push(i);
      }
    }
  }

}
