import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() label: string = "";
  /**positive, secundary and tertiary variants avaliable. Defaults to positive */
  @Input() variation: string = "primary";
  constructor() { }

  ngOnInit(): void {
  }

}
