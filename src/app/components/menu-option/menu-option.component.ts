import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-option',
  templateUrl: './menu-option.component.html',
  styleUrls: ['./menu-option.component.css']
})
export class MenuOptionComponent implements OnInit {
  @Input() label: string = "Opção";
  constructor() { }

  ngOnInit(): void {
  }

}
