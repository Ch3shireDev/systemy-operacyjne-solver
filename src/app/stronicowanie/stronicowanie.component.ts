import { Component, OnInit } from '@angular/core';

declare function stronicowanie(
  addresses: number[],
  page_size: number,
  total_memory: number
): string;

@Component({
  selector: 'app-stronicowanie',
  templateUrl: './stronicowanie.component.html',
  styleUrls: ['./stronicowanie.component.css'],
})
export class StronicowanieComponent implements OnInit {
  // Adresy komórek w pamięci do których następuje odwołanie.
  address_list =
    '410, 245, 173, 450, 120, 231, 610, 309, 176, 234, 430, 185, 210, 551, 31, 245, 556, 434, 565, 650, 46, 458';

  // Rozmiar pojedynczej strony w bajtach.
  page_size = 100;

  // Całkowita ilość pamięci przydzielonej programowi.
  total_memory = 300;

  constructor() {}

  ngOnInit(): void {}

  generate(): void {
    let tab = this.address_list
      .replace(' ', '')
      .split(',')
      .map((x) => parseInt(x));
    this.output = stronicowanie(tab, this.page_size, this.total_memory);
  }

  output: string = '';
}
