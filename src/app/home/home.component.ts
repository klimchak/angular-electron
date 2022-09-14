import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ElectronService} from '../core/services';
import {EventNames} from '../../../app/event-names';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private electronService: ElectronService,
  ) {
  }

  ngOnInit(): void {
    console.log('HomeComponent INIT');
  }

  public writeFile(): void {
    if (this.electronService.isElectron) {
      this.electronService.ipcRenderer.send(
        EventNames.fileInWrite,
        JSON.stringify({title: 'test title', description: 'test description'})
      );
    }
  }

}
