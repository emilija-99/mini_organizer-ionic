import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import * as cordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { BehaviorSubject, filter, from, switchMap } from 'rxjs';
const STORAGE_KEY = 'db_key';
@Injectable({
  providedIn: 'root'
})


export class StorageService {

  private storageReady = new BehaviorSubject(false);
  constructor(
    private storage: Storage
  ) {
    this.init();
  }

  async init() {
    console.log("Init storage");
    await this.storage.defineDriver(cordovaSQLiteDriver);
    await this.storage.create();
    console.log("Storage created");
    this.storageReady.next(true);
  }

  public set(key:string, value:any) {
    this.storage?.set(key, value);
  }

  getDate(){
    return this.storageReady.pipe(
      filter(ready => ready),
      switchMap((_) =>{
        console.log("OK. Storage is ready");
        return from(this.storage.get(STORAGE_KEY) || []);
      } 
    ));
  }

  async addData(item: any){
    const storedData = await this.storage?.get(STORAGE_KEY) || [];
    console.log("storedData: ", storedData);
    console.log("item to add: ", item);
    storedData.push(item);
    return this.storage?.set(STORAGE_KEY, storedData);
  }

  async getAllData(){
    await this.storage?.get(STORAGE_KEY);
  }

  async getItem(ind: any){
    const storedData = await this.storage?.get(STORAGE_KEY) || [];
    return storedData[ind];
  }

  async removeData(ind: any){
    const storedData = await this.storage?.get(STORAGE_KEY) || [];
    storedData.splice(ind,1);
    return this.storage?.set(STORAGE_KEY, storedData);
  }

  async clearDatabase() {
    await this.storage.clear();
  }

  

  
  // NEXT: Add the following methods to the StorageService class:
  //https://www.youtube.com/watch?v=BM70fDqUo3c
}
