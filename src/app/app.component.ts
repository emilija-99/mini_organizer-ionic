import { Component } from '@angular/core';
import { StorageService } from './service/storage.service';
import { DatabaseService } from './service/database.service';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(
    private storageService: StorageService,
    private dbService: DatabaseService
  ) {
    this.initApp();
    // storageService.init();
  }

  async initApp() {
    await this.dbService.initialPlugin();
    SplashScreen.hide();
  }
  
}
