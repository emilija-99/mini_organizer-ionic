import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mood-board',
  templateUrl: './mood-board.component.html',
  styleUrls: ['./mood-board.component.scss'],
})
export class MoodBoardComponent  implements OnInit {

  @Input() displayBoard: boolean = false;
  @Input() typeOfBoard: string = ''; 

  constructor() { }

  ngOnInit() {}

}
