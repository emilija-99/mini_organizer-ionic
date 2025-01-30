import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonicModule } from '@ionic/angular';
import { messageStrings, Mood, moods } from 'src/assets/mood_model';
import { MoodBoardComponent } from "../mood-board/mood-board.component";
import { DataStoreService } from '../service/data-store.service';

@Component({
  selector: 'app-moods',
  templateUrl: './moods.component.html',
  styleUrls: ['./moods.component.scss'],
  standalone: true,
  imports: [IonicModule, MoodBoardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoodsComponent  implements OnInit {

  
  protected showValue = false;
  protected moods = moods;
  public moodList:any = []
  
  public displayBoard: boolean = false;
  public showWeekBoard = true;
  public showMonthBoard = false;
  
  public date = new Date();
  private options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  public formattedDate = this.date.toLocaleDateString('en-US', this.options);
  
  public subtitle = 'How are you feeling today?';
  public content = 'Select an emoji that best represents your mood today.';
  public showMessage = false;
  public message = ''
  

  public moodSubmited = false;

  constructor(public dataService: DataStoreService) { }

  ngOnInit() {
   this.moodList = moods.map(obj => ({...obj, checked: false, date: null}));
  }

  onCheck(mood:any) {
    console.log("onCheck Mood: ", mood);
    mood.checked = !mood.checked;
    mood.date = new Date().toLocaleDateString('en-US', this.options);
    this.message = mood.toastMessage;

    this.dataService.setMoodBoard(mood);
    this.showWeekBoard = true;
  }

  openToast() {
    this.showMessage = true;
    this.moodSubmited = true;


    setTimeout(() => {
      this.showMessage = false;
      // loader for preview
    }, 5000);
  }


  addNew(){
    this.moodSubmited = false;
    this.displayBoard = false
  }

 

}
