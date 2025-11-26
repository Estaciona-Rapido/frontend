import { Component, Input, OnInit } from '@angular/core';
import { BusinessHourItemService } from './business-hour-item.service';
import { BusinessHour } from 'src/app/dtos/business-hour';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-business-hour-item',
  templateUrl: './business-hour-item.component.html',
  styleUrls: ['./business-hour-item.component.css']
})
export class BusinessHourItemComponent implements OnInit {
  isEditing: boolean=true;
  editingStyle: string="background-color: transparent; border: 0;";
  @Input() businessHour: BusinessHour = {
    id: BigInt(-1),
    isActivated: false,
    startWeekDay: 1,
    endWeekDay: 1,
    startTime: "10:00",
    endTime: "20:00"
  };
  @Input() deleteComponent!: () => any;

  constructor(private service: BusinessHourItemService) { }

  ngOnInit() {

  }
  changeToEditMode () {
    if (this.isEditing) {
      this.isEditing = false;
      this.editingStyle = "background-color: white; border: 1px solid black;"
      
    } else {
      this.isEditing = true;
      this.editingStyle = "background-color: transparent; border: 0;"
    }
  }

  postBusinessHourAtDefaultScenario(): Observable<Object> {
    let {id, ...businessHourProposal} = this.businessHour;
    return this.service.createBusinessHourAtDefaultScenario(businessHourProposal);
  }

  setBusinessHourAtDefaultScenario(): Observable<Object> {
    let {id, ...businessHourProposal} = this.businessHour
    return this.service.setBusinessHourAtDefaultScenario(id, businessHourProposal);
  }
}
