import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repass',
  templateUrl: './repass.component.html',
  styleUrls: ['./repass.component.css']
})
export class RepassComponent implements OnInit {

  Student = JSON.parse(localStorage.getItem('student'));
  list = JSON.parse(localStorage.getItem('list'));
  email: "";
  username: "";
  password = "";
  repassword = "";
  check1 = false;
  check2 = false;
  show = false;

  constructor() { 
  }

  ngOnInit() {
  }

  thaydoi() {
    let x = 0;
    if(this.password.length > 7) {
      if(this.password === this.repassword) {
        for(var i = 0; i < this.list.length; i++) {
          if(this.list[i].username === this.username && this.list[i].email === this.email) {
            this.list[i].password = this.repassword;
            localStorage.setItem('list', JSON.stringify(this.list));
            x = 1;
            this.show = true;
          }
        }
        if(x === 0) {
          alert('Email hoặc tên tài khoản không khớp.');
        }
        if(this.Student.username === this.username && this.Student.email === this.email) {
          this.Student.password = this.repassword;
          localStorage.setItem('student', JSON.stringify(this.Student));
        }
      }
      else {
        alert('Nhập lại mật khẩu không đúng');
      }
    }
    else {
      alert('Mật khẩu phải từ 8 kí tự trở lên.');
    }
  }
  dangxuat() {
    this.Student = null;
    localStorage.setItem('student', JSON.stringify(this.Student));
  }
}

