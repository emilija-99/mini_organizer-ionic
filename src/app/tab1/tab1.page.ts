import { Component } from '@angular/core';
import { MoodsComponent } from '../moods/moods.component';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  listData = [];
  constructor(
    private storageService: StorageService
  ) {
    this.loadData();
  }


  async loadData(){
    this.storageService.getDate().subscribe((data) => {
      this.listData = data;
  })
  };

  async addData(){
    const item = { name: `Simon test ${Math.floor(Math.random() * 100)}` };
    await this.storageService.addData(item);
    this.loadData();

    console.log("current data: ", this.listData);
  }

  async removeData(ind:any){
    await this.storageService.removeData(ind);
    this.loadData();
  }



}
