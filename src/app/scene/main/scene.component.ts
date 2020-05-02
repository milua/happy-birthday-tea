import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit {
  imageUrl: string = '../../assets/01-kitchen.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
