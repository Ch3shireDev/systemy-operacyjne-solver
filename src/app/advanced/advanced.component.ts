import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.css'],
})
export class AdvancedComponent implements OnInit {
  markdown: string = '';
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient
      .get('assets/SO1-zagadnienia-zaawansowane.md', { responseType: 'text' })
      .subscribe((data) => {
        console.log(data);
        this.markdown = data;
      });
  }
}
