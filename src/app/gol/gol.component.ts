import { Component, OnInit } from '@angular/core';
import { Solu } from './solu';

@Component({
  selector: 'app-gol',
  templateUrl: './gol.component.html',
  styleUrls: ['./gol.component.css']
})
export class GolComponent implements OnInit {
  active = 3;
  board = [];
  boardState = [];
  columns = 10;
  rows = 10;
  generations = 0;
  interval: any;

  constructor() { }

  ngOnInit(): void {
    this.initBoard(true);
  }

  initBoard(allDead: boolean): void {
    let location = 1;
    for (let i = 1; i <= this.rows; i++) {
      for (let j = 1; j <= this.columns; j++) {
        let alive = allDead ? (Math.random() > 0.5 ? true : false) : false;
        this.board.push(new Solu(i, j, alive, location));
        location++;
      }
    }
    this.boardState = JSON.parse(JSON.stringify(this.board));
  }

  start(): void {
    if (!this.interval) {
      this.interval = setInterval(() => {
        for (let i = 0; i < this.board.length; i++) {
          this.returnNeighbors(this.board[i]);
        }
        this.board = JSON.parse(JSON.stringify(this.boardState));
        this.boardState = JSON.parse(JSON.stringify(this.board));
        this.generations++;
      }, 1000);
    } else {
      return;
    }
  }

  stop(): void {
    clearInterval(this.interval);
    this.interval = null;
  }

  clear(): void {
    this.board = [];
    this.generations = 0;
    this.stop();
    this.initBoard(false);
  }

  returnNeighbors(cell: Solu): void {
    let neighbours = [];
    if (cell.posX === 1 && cell.posY === 1) {
      // vasen yläkulma
      neighbours = this.board.filter((currElem) => {
        return currElem.location === cell.location + 1 || currElem.location === cell.location + this.columns || currElem.location === cell.location + this.columns + 1;
      });      
    } else if (cell.posX === this.rows && cell.posY === this.columns) {
      // oikea alakulma
      neighbours = this.board.filter((currElem) => {
        return currElem.location === cell.location - 1 || currElem.location === cell.location - this.columns || currElem.location === cell.location - this.columns - 1;
      });
    } else if (cell.posX === 1 && cell.posY === this.columns) {
      // oikea yläkulma
      neighbours = this.board.filter((currElem) => {
        return currElem.location === cell.location - 1 || currElem.location === cell.location + this.columns - 1 || currElem.location === cell.location + this.columns;
      });
    } else if (cell.posX === this.rows && cell.posY === 1) {
      // vasen alakulma
      neighbours = this.board.filter((currElem) => {
        return currElem.location === cell.location + 1 || currElem.location === cell.location - (this.columns - 1) || currElem.location === cell.location - this.columns;
      });
    } else if (cell.posY === 1) {
      // vasen laita
      neighbours = this.board.filter((currElem) => {
        return currElem.location === cell.location - (this.columns - 1) || currElem.location === cell.location - this.columns ||
        currElem.location === cell.location + 1 || currElem.location === cell.location + this.columns || currElem.location === cell.location + (this.columns + 1);
      });
    } else if (cell.posY === this.columns) {
      // oikea laita
      neighbours = this.board.filter((currElem) => {
        return currElem.location === cell.location - (this.columns + 1) || currElem.location === cell.location - this.columns
        || currElem.location === cell.location - 1 || currElem.location === cell.location + (this.columns - 1) ||
        currElem.location === cell.location + this.columns;
      });
    } else if (cell.posX === 1) {
      // ylärivi
      neighbours = this.board.filter((currElem) => {
        return currElem.location === cell.location - 1 || currElem.location === cell.location + 1 || currElem.location === cell.location + (this.columns - 1) || currElem.location === cell.location + this.columns || currElem.location === cell.location + (this.columns + 1);
      });
    } else if (cell.posX === this.rows) {
      // alarivi
      neighbours = this.board.filter((currElem) => {
        return currElem.location === cell.location - (this.columns + 1) || currElem.location === cell.location - this.columns || currElem.location === cell.location - (this.columns - 1) || currElem.location === cell.location - 1 || currElem.location === cell.location + 1;
      });
    } else {
      neighbours = this.board.filter(currElem => {
        return currElem.location === cell.location - (this.columns + 1) ||
        currElem.location === cell.location - this.columns || currElem.location === cell.location - (this.columns - 1) ||
        currElem.location === cell.location - 1 || currElem.location === cell.location + 1 || currElem.location === cell.location + (this.columns - 1) ||
        currElem.location === cell.location + this.columns || currElem.location === cell.location + (this.columns + 1);
      });
    }
    let aliveNeighbors = neighbours.filter(v => {
      return v.alive;
    });
    let newCell = this.boardState.find(c => c.location === cell.location);
    if (aliveNeighbors.length === 3) {      
      newCell.alive = true;
    } else if (aliveNeighbors.length === 3 && cell.alive || aliveNeighbors.length === 2 && cell.alive) {
      newCell.alive = true;
    } else {
      newCell.alive = false;
    }
  }

  toggleLife(cell: Solu): void {
    cell.alive = !cell.alive;
  }

}
