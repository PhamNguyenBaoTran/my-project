import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  Student = JSON.parse(localStorage.getItem('student'));
  list = JSON.parse(localStorage.getItem('list'));
  fullnameBT = true;
  fullname = true;
  emailBT = true;
  email = true;
  birthdayBT = true;
  birthday = true;
  genderBT = true;
  gender = true;
  refullnamebutton() {
    this.fullnameBT = false;
    this.fullname = false;
  }
  refullname() {
    this.fullnameBT = true;
    this.fullname = true;
    localStorage.setItem('student', JSON.stringify(this.Student));
    for(var i = 0; i < this.list.length; i++) {
      if(this.list[i].username === this.Student.username) {
        this.list[i].fullname = this.Student.fullname;
      }
    }
    localStorage.setItem('list', JSON.stringify(this.list));
  }

  reemailbutton() {
    this.emailBT = false;
    this.email = false;
  }
  reemail() {
    this.emailBT = true;
    this.email = true;
    localStorage.setItem('student', JSON.stringify(this.Student));
    for(var i = 0; i < this.list.length; i++) {
      if(this.list[i].username === this.Student.username) {
        this.list[i].email = this.Student.email;
      }
    }
    localStorage.setItem('list', JSON.stringify(this.list));
  }

  rebirthdaybutton() {
    this.birthdayBT = false;
    this.birthday = false;
  }
  rebirthday() {
    this.birthdayBT = true;
    this.birthday = true;
    localStorage.setItem('student', JSON.stringify(this.Student));
    for(var i = 0; i < this.list.length; i++) {
      if(this.list[i].username === this.Student.username) {
        this.list[i].birthday = this.Student.birthday;
      }
    }
    localStorage.setItem('list', JSON.stringify(this.list));
  }

  regenderbutton() {
    this.genderBT = false;
    this.gender = false;
  }
  regender() {
    this.genderBT = true;
    this.gender = true;
    localStorage.setItem('student', JSON.stringify(this.Student));
    for(var i = 0; i < this.list.length; i++) {
      if(this.list[i].username === this.Student.username) {
        this.list[i].gender = this.Student.gender;
      }
    }
    localStorage.setItem('list', JSON.stringify(this.list));
  }

  dangxuat() {
    this.Student = null;
    localStorage.setItem('student', JSON.stringify(this.Student));
  }
  constructor() { }

  ngOnInit() {
  }

}
