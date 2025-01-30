import { Component, ViewChild } from '@angular/core';
import { MoodsComponent } from '../moods/moods.component';
import { StorageService } from '../service/storage.service';
import { DatabaseService } from '../service/database.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  standalone: false,
  styleUrls: ['tab1.page.scss'],})
export class Tab1Page {

  listData = [];

  public moods;
  model = { mood: '' };
  public cliked = true;

  constructor(
    protected dataService: DatabaseService

    // private storageService: StorageService
  ) {
    this.moods = this.dataService.getMoods();
    // this.loadData();

  }

  async addMood(){
    await this.dataService.addMood(this.model.mood);
    this.model.mood = '';
  };
  async removeMood(id: number){
    await this.dataService.removeMood(id);
  }

}
  // async loadData(){
  //   this.storageService.getDate().subscribe((data) => {
  //     this.listData = data;
  // })
  // };

  // async addData(){
  //   const item = { name: `Simon test ${Math.floor(Math.random() * 100)}` };
  //   await this.storageService.addData(item);
  //   this.loadData();

  //   console.log("current data: ", this.listData);
  // }

  // async removeData(ind:any){
  //   await this.storageService.removeData(ind);
  //   this.loadData();
  // }



// }

/*


*/
