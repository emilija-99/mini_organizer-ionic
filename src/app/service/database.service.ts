import { Injectable, signal, WritableSignal } from '@angular/core';
import {CapacitorSQLite, SQLiteConnection, SQLiteDBConnection} from '@capacitor-community/sqlite';

const _DB = "mysqlite";

export interface MOODS{
  id: number;
  mood: string;
  date: string;
};

@Injectable({
  providedIn: 'root'
})



export class DatabaseService {

  private sqliteConnection = new SQLiteConnection(CapacitorSQLite);
  private db!: SQLiteDBConnection;
  public moods:WritableSignal<MOODS[]> = signal<MOODS[]>([]);


  constructor() { }

  async initialPlugin(){
    this.db = await this.sqliteConnection.createConnection(_DB,false,"no-encryption",1, false);

    await this.db.open();
    
    const shecmaMOODS = `CREATE TABLE IF NOT EXISTS moods (id INTEGER PRIMARY KEY AUTOINCREMENT, mood TEXT NOT NULL, date TEXT NOT NULL);`;

    await this.db.execute(shecmaMOODS);

  };

  async loadMoods(){
    this.loadMoodsFromDB();
  };

  async loadMoodsFromDB(){
    const moods = await this.db.query("SELECT * FROM moods;");
    this.moods.set(moods.values as MOODS[] || []);
  };

  async addMood(mood: string){
    await this.db.run(`INSERT INTO moods (mood, date) VALUES (?, ?);`, [mood, new Date().toISOString()]);
    this.loadMoodsFromDB();
  }

  async removeMood(id: number){
    await this.db.run(`DELETE FROM moods WHERE id = ?;`, [id]);
    this.loadMoodsFromDB();
  }

  async getMoods(){ 
    return this.moods;
  }

}
