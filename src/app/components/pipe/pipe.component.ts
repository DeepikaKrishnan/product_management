import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  today: any;
  amount:number = 1.135;
  stringtransform: string;
  fact: number = 0;
  rand: number = 0;
  sqvalue: number = 0;
  cuvalue: number = 0;
  constructor() {
     this.today = new Date();
   }

  ngOnInit(): void {
  }

}
