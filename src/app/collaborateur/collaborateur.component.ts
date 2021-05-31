import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collaborateur',
  templateUrl: './collaborateur.component.html',
  styleUrls: ['./collaborateur.component.css']
})
export class CollaborateurComponent implements OnInit {

  @Input() name: String = "";

  constructor() { }

  ngOnInit(): void {
  }

}
