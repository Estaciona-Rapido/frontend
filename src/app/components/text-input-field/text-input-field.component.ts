import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-input-field',
  templateUrl: './text-input-field.component.html',
  styleUrls: ['./text-input-field.component.css']
})
export class TextInputFieldComponent implements OnInit {
  @Input() component_id: number = 0;
  @Input() label: string = "Input de texto";
  @Input() width: number = 988;
  @Input() placeholder: string = "Digite algo";
  // TODO: check if id is integer.
  input_type: string = "text";
  @Input("is-password") set setHiddenInput(value: boolean) {
    if (value) {
      this.input_type = "password";
    }
  }
  
  constructor() {
  }

  ngOnInit(): void {
  }

}
