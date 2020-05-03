import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TimerService {
  private _timeLeft: number;
  interval;
  public timeRunOut: EventEmitter<any> = new EventEmitter<any>();

  get timeLeft(): number {
    return this._timeLeft;
  }

  set timeLeft(time: number) {
    this._timeLeft = time;
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeRunOut.emit();
        clearInterval(this.interval);
      }
    },1000)
  }
}
