import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-configuration-list',
  templateUrl: './configuration-list.component.html',
  styleUrls: ['./configuration-list.component.css']
})
export class ConfigurationListComponent implements OnInit {
  @Input() label: string = "";
  @Input() add: () => any = () => alert("Carregando");
  constructor() {}

  ngOnInit(): void {
  }
}
