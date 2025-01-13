import { Component, Input, OnInit } from '@angular/core';
import { DataStoreService } from '../service/data-store.service';
import { IonicModule } from '@ionic/angular';
import { OnEmptyPipe } from "../pipes/on-empty.pipe";

@Component({
  selector: 'app-mood-board',
  templateUrl: './mood-board.component.html',
  styleUrls: ['./mood-board.component.scss'],
  standalone: true,
  imports: [IonicModule, OnEmptyPipe]
})
export class MoodBoardComponent  implements OnInit {

  @Input() displayBoard: boolean = false;
  @Input() typeOfBoard: string = ''; 
  weekBoard = [];
  monthBoard = [];

  constructor(public dataService: DataStoreService) { }

  ngOnInit() {

    console.log("this.typeOfBoard", this.typeOfBoard);
    console.log("this.displayBoard", this.displayBoard);
    this.weekBoard = this.dataService.getWeekMoodBoaad();
    this.monthBoard = this.dataService.getMonthMoodBoard();
    console.log("this.weekBoard", this.weekBoard);
    console.log("this.monthBoard", this.monthBoard);

    // this.weekBoard = this.groupBy(this.weekBoard, 'date');
    // console.log("this.weekBoard", this.weekBoard);
    }
  // FEATURE:
  //  groupBy(array: any[], key: string) 
    // groupBy(array: any[], key: string) {
    //   return array.reduce((result, currentValue) => {
    //     (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
    //     return result;
    //   }, {});
    // }


}
