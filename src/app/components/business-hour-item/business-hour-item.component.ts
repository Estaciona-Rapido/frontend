import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-hour-item',
  templateUrl: './business-hour-item.component.html',
  styleUrls: ['./business-hour-item.component.css']
})
export class BusinessHourItemComponent implements OnInit {
  isEditing: boolean=false;
  editingStyle: string="background-color: transparent; border: 0;";

  constructor() { }

  changeToEditMode () {
    if (this.isEditing) {
      this.isEditing = false;
      this.editingStyle = "background-color: transparent; border: 0;"
      
    } else {
      this.isEditing = true;
      this.editingStyle = "background-color: white; border: 1px solid black;"
    }
  }
  ngOnInit(): void {
  }

}
