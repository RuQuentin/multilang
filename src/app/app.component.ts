import { Component, OnInit } from '@angular/core';
import { ApiService } from './core/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'multitran';

  constructor(
    private apiService: ApiService
  ) {

  }

  ngOnInit() {
  }

  test1() {
    this.apiService.get('')
      .subscribe(
        data => console.log(data)
      );
  }

  test2() {
    this.apiService.get('/m.exe?l1=1&l2=2&s=swap&langlist=2')
      .subscribe(
        data => console.log(data)
      );
  }
}
