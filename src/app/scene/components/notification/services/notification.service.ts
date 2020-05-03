import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class NotificationService {
  message: string = '';
  isVisible: boolean = false;
  interval;

  showNotification(message: string): void {
    this.message = message;
    this.isVisible = true;
    this.closeNotification();
  }

  private closeNotification(): void {
  let timeLeft: number = 3;
    this.interval = setInterval(() => {
      if(timeLeft > 0) {
        timeLeft--;
      } else {
        this.isVisible = false;
        clearInterval(this.interval);
      }
    },1000);
  }
}
