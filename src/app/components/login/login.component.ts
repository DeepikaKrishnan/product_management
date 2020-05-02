import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router} from '@angular/router'
import { resolve, reject } from 'q';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { FirebaseService } from '../../services/firebase.service';
import { AppService } from '../../services/app.service';
//import { resolve } from 'dns';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  content: any;
  loginForm = this.fb.group({
    userName : ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });
  submitted = false;
  loginData = this.loginForm.controls;
  clicked = false;
  range:any;
  user: any;
  counterPromise:Promise<any>;
  constructor(private fb:FormBuilder, private router:Router, private fire: FirebaseService, private app: AppService) { }

  ngOnInit(): void {
    this.fire.getUser().subscribe((x) => {
      this.user = x;
    })
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }
    this.submitted = true;
    //localStorage.setItem('name', this.loginData.userName.value);
   // localStorage.setItem('password', this.loginData.password.value);
   const user ={
     name: this.loginData.userName.value,
     password: this.loginData.password.value
   };

   const data =  this.user.docs.find((x) => x.data().name == user.name && x.data().password == user.password);
   localStorage.setItem('userId', data.id);
   if (data) {
    this.app.authenticated = true;
    this.router.navigateByUrl('/list');
   } else {
     alert("Invalid credentials");
   }

   /*this.fire.doLogin(user).then(()=> {
    this.app.authenticated = true;
    this.router.navigateByUrl('/list');
   });*/
  }

  /*count() {
    this.fn();
    this.counterPromise.then((content)=> {
      this.range = content;
    });
    this.fn1().then((data) => {
      console.log('fn1 data', data);
    });

    this.fn3().subscribe((data) => {
      console.log("obervable",data);
    })
    
    console.log('after promise');
  }

  fn() {
      let that = this;
      this.counterPromise = new Promise(function(resolve, reject) {
      var count = 10;
      const interval = setInterval(()=>{
      that.range = count;
      count--;
      if(count < -1) {
        clearInterval(interval);
        resolve('hi');
      }
     }, 1000)
     });
     
  }
   fn1(): Promise<any> {
      return new Promise(function(resolve, reject) {
        const dat = {
          name: 'deepika'
        }
        resolve(dat);
      });
   }

   fn3(): Observable<string> {
    return new Observable((data) => {
      data.next("Hai");
      data.next("Hello");
    });
 }*/

}
