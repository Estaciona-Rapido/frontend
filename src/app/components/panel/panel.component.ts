import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  // default, configuration-list, item, configuration-major-panel and configuration-panel variants are avaliable. 
  @Input() variation: string= "default";
  @Input() width: number = 1184;
  @Input() height: number = 712;
  @Input() justify: string="";
  @Input('flex-direction') flex_direction: string = "column";
  constructor() { }

  ngOnInit(): void {
  }

}
