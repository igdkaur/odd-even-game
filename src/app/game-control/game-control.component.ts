import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  time_in_seconds;
  @Output() firedEvent = new EventEmitter<number>();
  count : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onGameStart() {
    this.time_in_seconds = setInterval( () => {
      this.firedEvent.emit(this.count + 1);
      this.count++;
    },1000)
  }

}
