import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  url='./assets/db/subjects.json';
  object: any;
  Quiz: any;
  Id;
  page = 1;
  pagecurrent = 1;
  lastpage;
  name : String = 'name';
  urlquiz;
  first = true;
  begin = true;
  last = true;
  showend = true;
  showfinish = false;
  task = {
    "IdSubject": "",
    Ans: [],
  }
  Student = JSON.parse(localStorage.getItem('student'));
  list = JSON.parse(localStorage.getItem('list'));
  mark = 0;
  show = false;

  constructor(private http:HttpClient) { }
  
  ngOnInit() {
    this.thi();
  }
  getAllQuiz () {
    return this.http.get(this.urlquiz);
  }
  getAll () {
    return this.http.get(this.url);
  }

  next() {
    if(this.pagecurrent < this.lastpage) {
      this.pagecurrent++;
    }
    this.begin = true;
    this.first = true;
    if(this.pagecurrent === this.lastpage) {
      this.last = false;
      this.showend = false;
      this.showfinish = true;
    }
    this.tinhdiem();
  }

  previrous() {
    if(this.pagecurrent > 1) {
      this.pagecurrent--;
    }
    this.last = true;
    this.showend = true;
    this.showfinish = false;
    if(this.pagecurrent === 1) {
      this.begin = false;
      this.first = false;
    }
    this.tinhdiem();
  }

  home() {
    this.pagecurrent=1;
    this.first = false;
    this.begin = false;
    this.showend = true;
    this.last = true;
    this.showfinish = false;
    this.tinhdiem();
  }

  end() {
    this.pagecurrent = this.lastpage;
    this.showend = false;
    this.last = false;
    this.first = true;
    this.begin = true;
    this.showfinish = true;
    this.tinhdiem();
  }
  
  countlastpage() {
    return Math.ceil(this.Quiz.length/this.page);
  }

  tinhdiem() {
    this.mark = 0;
    for(var i = 0; i < this.lastpage; i++) {
      if(this.Quiz[i].AnswerId ===  Number(this.task.Ans[i])) {
        this.mark += this.Quiz[i].Marks;
      }
    }
    console.log(this.task);
  }
   finish() {
      this.tinhdiem();
      this.Student.marks = this.mark;
      for(var i = 0; i < this.list.length; i++) {
        if(this.Student.username === this.list[i].username) {
          this.list[i].marks = this.mark;
        }
      }
      localStorage.setItem('listuser', JSON.stringify(this.list));
      localStorage.setItem('user', JSON.stringify(this.Student));
      localStorage.setItem('task', JSON.stringify(this.task));
      this.show = true;
   }
   dangxuat() {
    this.Student = null;
    localStorage.setItem('student', JSON.stringify(this.Student));
  }
   thi() {
    this.Id = location.href;
    this.Id = this.Id.slice(this.Id.length - 4, this.Id.length);
    this.urlquiz = './assets/db/Quizs/' + this.Id + '.json';
    this.getAllQuiz().subscribe (data=>{
      this.Quiz=data;
      this.lastpage = this.countlastpage();
      if(this.pagecurrent === 1) {
        this.begin = false;
        this.first = false;
      }
      if(this.pagecurrent === this.lastpage) {
        this.showend = false;
        this.last = false;
      }
      this.getAll().subscribe (data=>{
        this.object=data;
      });
    });
  }
}
 