import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dp';

  constructor(private router: Router, private app: AppService) {
    this.router.events.subscribe((event) => {
      //console.log("Event", event);
      if (event['url'] === '/list' || event['url'] === '/add') {
        if (!this.app.authenticated){
          this.router.navigateByUrl('/login');
        }
      }
    })
  }
}
