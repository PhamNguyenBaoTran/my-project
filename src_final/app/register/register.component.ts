import { Component, OnInit } from '@angular/core';
import { flatten } from '@angular/compiler';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  show = false;
  list = JSON.parse(localStorage.getItem('list'));
  pass;
  repass;
  formStudent = {
    username: '',
    password: '',
    fullname: '',
    email: '',
    gender: '',
    birthday: new Date(),
    schoolfee: 0,
    marks: 0
  };
  name;
  
  
  constructor() { }

  ngOnInit() {
  }
  dangky()
  {
    if(this.pass.length > 7) {
      if(this.pass === this.repass) { 
        let check = 1;
        for (var i=0; i<this.list.length; i++) {
          if (this.list[i].username === this.name) {
            alert("Ten tai khoan da ton tai.");
            check = 0;
          }
        }
        if(check === 1) {
          this.formStudent.username = this.name;
          this.formStudent.password = this.repass;
          var a = document.getElementById('example');
          a.id = 'exampleModal';
        }
      }
      else {
        alert('Nhap lai mat khau khong khop.');
      }
    }
    else {
      alert('Mat khai phai tu 8 ki tu tro len.')
    }
  }
  addUser() {
    this.list.push(this.formStudent);
    localStorage.setItem('list',JSON.stringify(this.list));
  }
}
