import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-model-item',
  templateUrl: './price-model-item.component.html',
  styleUrls: ['./price-model-item.component.css']
})
export class PriceModelItemComponent implements OnInit {
  isEditing: boolean=true;
  editingStyle: string="background-color: transparent; border: 0;";

  constructor() { }

  changeToEditMode () {
    if (this.isEditing) {
      this.isEditing = false;
      this.editingStyle = "background-color: white; border: 1px solid black;"
      
    } else {
      this.isEditing = true;
      this.editingStyle = "background-color: transparent; border: 0;"
    }
  }
  ngOnInit(): void {
  }

}
