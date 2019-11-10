import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  taikhoan:any;
  matkhau:any;
  list = JSON.parse(localStorage.getItem('list'));
  student: any;
  constructor() {
  }
  
  ngOnInit() {
  }

  dangnhap()
  {
 for (var i=0; i<this.list.length; i++){
  if (this.taikhoan === this.list[i].username && this.matkhau === this.list[i].password){
     location.pathname = '/object';
     this.student = this.list[i];
     localStorage.setItem('student', JSON.stringify(this.student));
     return 0;
      }
     }
     alert('Sai ten tai khoan hoac mat khau');
  }
}  
