import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../../services/app.service';
import { FirebaseService } from '../../services/firebase.service';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  addForm = this.fb.group({
    itemName: ['', Validators.required],
    price: ['',  Validators.required],
    tax:['',  Validators.required],
    //filename:[]
  });

  loginData = this.addForm.controls;
  itemArr = [];
  submitted = false;
  mode = 'add';
  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;
  userId: any;

  constructor(private fb: FormBuilder, private app: AppService, private fire: FirebaseService, private storage: AngularFireStorage, private db: AngularFirestore) { 
    /*const data = JSON.parse(localStorage.getItem('itemList'));
    this.itemArr = data || [];*/
    this.userId = localStorage.getItem('userId');
    if(this.app.mode === 'edit' && this.app.editObj) {
      const data = this.app.editObj;
      this.mode = this.app.mode;
      this.addForm.setValue({
        itemName: data.name,
        price: data.price,
        tax: data.tax
      });
    }
  }

  ngOnInit(): void {
  }

  addItem() {
    this.submitted = true;
    const item = {
      //id,
      userId: this.userId,
      name : this.loginData.itemName.value,
      price : this.loginData.price.value,
      tax : this.loginData.tax.value
    }

    if (this.mode === 'add') {
      /*let maxId = this.itemArr.reduce((max,x) => max>x.id?max:x.id,0);
      let id = 1;
      if (maxId) {
        id = maxId+1;
      }*/
      this.fire.getItem(this.userId).subscribe((x) => {
        this.itemArr = x;
      });
      const isDup =  this.itemArr.find((x) => x.payload.doc.data().item_name === item.name);
      if (isDup) {
        alert("Given item name already exists");
      } else {
        this.fire.addItem(item).then(() => {
          alert("Item added successfully");
        });
      }
    } else {
      this.fire.updateItem(this.app.editObj.id, item).then(() => {
        alert("Item updated successfully");
      });
       /* const obj = this.itemArr.find((x) => x.id === this.app.editObj.id);
        obj.name = this.loginData.itemName.value;
        obj.price = this.loginData.price.value;
        obj.tax = this.loginData.tax.value;
        localStorage.setItem('itemList', JSON.stringify(this.itemArr));
        console.log(this.itemArr);*/
    }
  }

 /* uploadfile(event) {
    console.log(event);
    const path = `test/${Date.now()}_${event.target.files[0].name}`;
    const ref = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, event.target.files[0]);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.snapshot   = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize( async() =>  {
        this.downloadURL = await ref.getDownloadURL().toPromise();

        this.db.collection('files').add( { downloadURL: this.downloadURL, path });
      }),
    );
  }*/

}
