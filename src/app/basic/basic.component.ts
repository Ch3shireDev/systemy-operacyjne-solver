import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css'],
})
export class BasicComponent implements OnInit {
  markdown: string = '';
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient
      .get('assets/SO1-zagadnienia-podstawowe.md', { responseType: 'text' })
      .subscribe((data) => {
        console.log(data);
        this.markdown = data;
      });
  }
}
