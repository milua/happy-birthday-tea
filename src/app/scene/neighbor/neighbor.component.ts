import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-neighbor',
  templateUrl: './neighbor.component.html',
  styleUrls: ['./neighbor.component.scss']
})
export class NeighborComponent implements OnInit {

  private urls: string[] = [
    '../../assets/02-neighbor.jpg'
  ];

  imageUrl: string = this.urls[0];
  constructor() { }

  ngOnInit(): void {
  }

}
