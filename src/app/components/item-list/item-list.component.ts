import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../services/app.service';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  itemData = [];
  userId: any;
  constructor(private router: Router, private app: AppService, private fire: FirebaseService) {
   // this.itemData = JSON.parse(localStorage.getItem('itemList'));
   this.userId = localStorage.getItem('userId');
  }

  ngOnInit(): void {
    this.fire.getItem(this.userId).subscribe((x) => {
      //console.log(x);
      this.itemData = x;
    });
  }

  logout() {
   // localStorage.removeItem('name');
   // localStorage.removeItem('password');
    localStorage.removeItem('userId');
    this.router.navigateByUrl('/login');
  }

  onEdit(item) {
    const obj = {
      id : item.payload.doc.id,
      name : item.payload.doc.data().item_name,
      price : item.payload.doc.data().price,
      tax: item.payload.doc.data().tax,
    }
    this.app.editItem(obj);
  }

  removeItem(item) {
    const id = item.payload.doc.id;
    this.fire.deleteItem(id).then(() =>{
      alert("Item deleted successfully");
    });
    /*const ind = this.itemData.findIndex((x) => x.id === item.id);
    this.itemData.splice(ind, 1);
    localStorage.setItem('itemList', JSON.stringify(this.itemData));*/
  }

  gotoAdd() {
    this.app.mode = "add";
  }

}
