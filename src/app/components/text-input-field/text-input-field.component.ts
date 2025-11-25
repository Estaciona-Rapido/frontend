import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text-input-field',
  templateUrl: './text-input-field.component.html',
  styleUrls: ['./text-input-field.component.css']
})
export class TextInputFieldComponent implements OnInit {
  @Input() component_id: number = 0;
  @Input() label: string = "Input de texto";
  @Input() placeholder: string = "Digite algo";
  // TODO: check if id is integer.
  input_type: string = "text";
  width: number = 988;
  input_font_size: string= "var(--big-text)";
  // plate (default) and password variants are avaliable
  @Input("variation") set setVariantion(value: string) {
    if (value === "password") {
      this.input_type = "password";
      this.width = 842;
      this.input_font_size = "var(--small-text)";
    } else {
      this.input_type = "text";
      this.width = 988;
      this.input_font_size = "var(--big-text)";
    }
  }
  
  constructor() {
  }

  ngOnInit(): void {
  }

}
