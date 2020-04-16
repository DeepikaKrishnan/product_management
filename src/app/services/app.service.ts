import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private router: Router) { 
    
  }
  editObj: any;
  mode: any;
  authenticated: any;
  editItem(itemObj) {
    this.editObj = itemObj;
    this.mode = 'edit';
    this.router.navigateByUrl('/add');
  }
}
