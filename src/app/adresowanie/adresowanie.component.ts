import { Component, OnInit } from '@angular/core';

declare function adresowanie(
  bit_map: number[],
  block_size: number,
  fragment_size: number,
  file_size: number
): string;

@Component({
  selector: 'app-adresowanie',
  templateUrl: './adresowanie.component.html',
  styleUrls: ['./adresowanie.component.css'],
})
export class AdresowanieComponent implements OnInit {
  // Rozmiar bloku na mapie bitowej, w kb. let block_size = 16;
  block_size: number = 16;

  // Rozmiar fragmentu w kb.
  fragment_size = 4;
  // Rozmiar pliku do zaadresowania, w kb.
  file_size = 58;

  // Początkowa mapa bitowa.
  bit_map =
    '1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0';

  output: string = '';

  constructor() {}

  ngOnInit(): void {}

  generate() {
    let tab = this.bit_map
      .replace(' ', '')
      .split(',')
      .map((x) => parseInt(x));
    this.output = adresowanie(
      tab,
      this.block_size,
      this.fragment_size,
      this.file_size
    );
  }
}
