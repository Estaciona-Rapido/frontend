import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  // primary (default) and secondary variation
  @Input() variation= "primary";
  @Input() width: number = 1184;
  @Input() height: number = 712;
  @Input() justify: string="";
  constructor() { }

  ngOnInit(): void {
  }

}
