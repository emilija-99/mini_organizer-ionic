import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonicModule } from '@ionic/angular';
import { messageStrings, Mood, moods } from 'src/assets/mood_model';
import { MoodBoardComponent } from "../mood-board/mood-board.component";

@Component({
  selector: 'app-moods',
  templateUrl: './moods.component.html',
  styleUrls: ['./moods.component.scss'],
  standalone: true,
  imports: [IonicModule, MoodBoardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoodsComponent  implements OnInit {

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

  constructor() { }

  ngOnInit() {
   this.moodList = moods.map(obj => ({...obj, checked: false, date: null}));
  }

  onCheck(mood:any) {
    mood.checked = !mood.checked;
    mood.date = new Date().toLocaleDateString('en-US', this.options);
    this.message = mood.toastMessage;

    // console.log("Mood", mood);
    this.showWeekBoard = false;
  }

  openToast() {
    this.showMessage = true;
    this.moodSubmited = true;


    setTimeout(() => {
      this.showMessage = false;
      // loader for preview
      this.showWeekBoard = true;
    }, 5000);
  }

 

}
