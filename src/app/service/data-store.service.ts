import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  private moodBoard:any = [];
  public options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  public day = new Date();
  public week;
  public month;

  constructor() { 
    this.week = [new Date(this.day.setDate(this.day.getDate() - this.day.getDay() + (this.day.getDay() === 0 ? -6 : 0))), new Date(this.day.setDate(this.day.getDate() + 6))];
    this.month = [new Date(this.day.getFullYear(), this.day.getMonth(),1), new Date(this.day.getFullYear(), this.day.getMonth()+1,0)];

    console.log("this.weeeek", this.week);
    console.log("this.month", this.month);
  }

  setMoodBoard(mood:any) {
    console.log("MOOD", mood)
    this.moodBoard.push(mood);
    console.log("Mood board updated: ", this.moodBoard)
  }

  getMoodBoard() {
    return this.moodBoard;
  }

  getWeekMoodBoaad() {
    return this.moodBoard.filter((mood:any) => mood.date === new Date().toLocaleDateString('en-US', this.options));
  }

  getMonthMoodBoard() {
    console.log("month", this.month);
    return this.moodBoard.filter((mood:any) =>{
      return new Date(mood.date) >= this.month[0] && new Date(mood.date) <= this.month[1];
    });
  }

  getDayMoodBoard() {
    return this.moodBoard.filter((mood:any) => mood.date === new Date().toLocaleDateString('en-US', this.options));
  }
}
