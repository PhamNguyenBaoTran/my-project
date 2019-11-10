import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  Student = JSON.parse(localStorage.getItem('student'));
  list = JSON.parse(localStorage.getItem('list'));
  showfullnamebutton = true;
  showfullname = true;
  showemailbutton = true;
  showemail = true;
  showbirthdaybutton = true;
  showbirthday = true;
  showgenderbutton = true;
  showgender = true;
  refullnamebutton() {
    this.showfullnamebutton = false;
    this.showfullname = false;
  }
  refullname() {
    this.showfullnamebutton = true;
    this.showfullname = true;
    localStorage.setItem('student', JSON.stringify(this.Student));
    for(var i = 0; i < this.list.length; i++) {
      if(this.list[i].username === this.Student.username) {
        this.list[i].fullname = this.Student.fullname;
      }
    }
    localStorage.setItem('list', JSON.stringify(this.list));
  }

  reemailbutton() {
    this.showemailbutton = false;
    this.showemail = false;
  }
  reemail() {
    this.showemailbutton = true;
    this.showemail = true;
    localStorage.setItem('student', JSON.stringify(this.Student));
    for(var i = 0; i < this.list.length; i++) {
      if(this.list[i].username === this.Student.username) {
        this.list[i].email = this.Student.email;
      }
    }
    localStorage.setItem('list', JSON.stringify(this.list));
  }

  rebirthdaybutton() {
    this.showbirthdaybutton = false;
    this.showbirthday = false;
  }
  rebirthday() {
    this.showbirthdaybutton = true;
    this.showbirthday = true;
    localStorage.setItem('student', JSON.stringify(this.Student));
    for(var i = 0; i < this.list.length; i++) {
      if(this.list[i].username === this.Student.username) {
        this.list[i].birthday = this.Student.birthday;
      }
    }
    localStorage.setItem('list', JSON.stringify(this.list));
  }

  regenderbutton() {
    this.showgenderbutton = false;
    this.showgender = false;
  }
  regender() {
    this.showgenderbutton = true;
    this.showgender = true;
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
