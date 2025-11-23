import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-configuration',
  templateUrl: './admin-configuration.component.html',
  styleUrls: ['./admin-configuration.component.css']
})
export class AdminConfigurationComponent implements OnInit {
  tab: number=1;
  constructor() { }

  ngOnInit(): void {
  }

}
