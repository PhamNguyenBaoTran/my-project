import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.css']
})
export class ObjectComponent implements OnInit {
  url='./assets/db/Subjects.json';
  danhmucmonhoc: any;
  Student = JSON.parse(localStorage.getItem('students'));

  constructor(private http:HttpClient) { }
  lastpage;
  page =1;
rowonpage=4;

  ngOnInit() {
    this.getAll().subscribe (data=>{
        this.danhmucmonhoc=data;
        this.lastpage = Math.ceil(this.danhmucmonhoc.length/this.rowonpage);
      });
  }
  getAll () {
    return this.http.get(this.url);
  }
  nextPage()
  {
    if (this.danhmucmonhoc.length/this.rowonpage>this.page)
    this.page++;
  }
  prePage()
  {
    if (this.page>1)
    this.page--;
  }
  topPage()
  {
    if (this.page>1)
    this.page=1;
  }
  lastPage()
  {
    if (this.danhmucmonhoc.length/this.rowonpage>this.page)
    this.page = this.lastpage;
  }
  dangxuat() {
    this.Student = null;
    localStorage.setItem('user', JSON.stringify(this.Student));
  }
}
