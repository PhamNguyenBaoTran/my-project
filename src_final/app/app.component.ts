import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final-exam';
  list: any;
  url = '/assets/db/Students.json';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getall().subscribe(data=>{
      this.list = data;
      localStorage.setItem('list', JSON.stringify(this.list));
    });
  }

  getall() {
    return this.http.get(this.url);
  }
}
