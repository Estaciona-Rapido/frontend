import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { BusinessHour } from 'src/app/dtos/business-hour';
import { PriceModel } from 'src/app/dtos/price-model';
import { ScenarioConfigs } from 'src/app/dtos/scenario-configs';
import { AdminConfigurationService } from './admin-configuration.service';
import { BusinessHourItemComponent } from 'src/app/components/business-hour-item/business-hour-item.component';
import { forkJoin, map, Observable } from 'rxjs';

@Component({
  selector: 'app-admin-configuration',
  templateUrl: './admin-configuration.component.html',
  styleUrls: ['./admin-configuration.component.css']
})
export class AdminConfigurationComponent implements OnInit {
  tab: number=1;
  defaultScenarioOldString: string = ""; 
  defaultScenarioNew: ScenarioConfigs = {
    capacity: -1,
    businessHours: [],
    priceModels: []
  };

  @ViewChildren("defaultBusinessHour") defaultBusinessHour!: QueryList<BusinessHourItemComponent>;

  ngAfterViewInit() {
    // do not delete!
  }

  constructor(private service: AdminConfigurationService) {}

  defaultScenarioGetters() {
    this.service.getDefaultScenarioCapacity().subscribe({
      next: (defaultCapacity) => {
        this.defaultScenarioNew.capacity = defaultCapacity;
        this.defaultScenarioOldString = JSON.stringify(this.defaultScenarioNew);
      }
    });
    this.service.getBusinessHoursAtDefaultScenario().subscribe({
      next: (defaultBusinessHours) => {
        this.defaultScenarioNew.businessHours = defaultBusinessHours;
        this.defaultScenarioOldString = JSON.stringify(this.defaultScenarioNew);
      }
    });
    this.service.getPriceModelsAtDefaultScenario().subscribe({
      next: (defaultPriceModels) => {
        this.defaultScenarioNew.priceModels = defaultPriceModels;
        this.defaultScenarioOldString = JSON.stringify(this.defaultScenarioNew);
      }
    });
  }

  ngOnInit(): void {
    this.defaultScenarioGetters();
  }
  
  defaultScenarioBusinessHourAdd: () => void= () => {
    let newBusinessHour = JSON.parse(JSON.stringify(this.defaultScenarioNew.businessHours[this.defaultScenarioNew.businessHours.length-1]));
    newBusinessHour.id = -1;
    this.defaultScenarioNew.businessHours.push(newBusinessHour);
  }

  defaultScenarioBusinessHourDelete: (id:bigint) => () => any= (id: bigint) => {
    return () => this.defaultScenarioNew.businessHours = this.defaultScenarioNew.businessHours.filter(businessHour => id !== businessHour.id);
  }

  defaultScenarioSave() {
    // console.log(JSON.parse(this.defaultScenarioOldString));
    // console.log(this.defaultScenarioNew);
    let defaultScenarioOld:ScenarioConfigs = JSON.parse(this.defaultScenarioOldString);
    // let businessHoursToPost: BusinessHourItemComponent[] = this.defaultBusinessHour.filter((businessHour) => {
    //   let isPresent = false;
    //   for (const businessHourOld of defaultScenarioOld.businessHours) {
    //     if (businessHour.businessHour.id === businessHourOld.id)
    //       isPresent = true;
    //   }
    //   return !isPresent;
    // });

    let businessHoursToPost: BusinessHourItemComponent[] = this.defaultBusinessHour.filter((businessHour) => !defaultScenarioOld.businessHours.reduce((isPresent, businessHourOld) => (businessHour.businessHour.id === businessHourOld.id) || isPresent, false));
    let businessHoursToUpdate: BusinessHourItemComponent[] = this.defaultBusinessHour.filter((businessHourComponent) => defaultScenarioOld.businessHours.filter((businessHourOld) => businessHourOld.id === businessHourComponent.businessHour.id && JSON.stringify(businessHourOld) !== JSON.stringify(businessHourComponent.businessHour)).length > 0);
    let businessHourstoDelete: BusinessHour[] = defaultScenarioOld.businessHours.filter((businessHourOld) => !this.defaultBusinessHour.reduce((accumulator, businessHourComponent) => businessHourOld.id === businessHourComponent.businessHour.id || accumulator ,false));


    let combinedDefaultScenarioRequests = [
      ...businessHoursToPost.map(businessHour => businessHour.postBusinessHourAtDefaultScenario()),
      ...businessHoursToUpdate.map(businessHour => businessHour.setBusinessHourAtDefaultScenario()),
      ...businessHourstoDelete.map((businessHour) => this.service.deleteBusinessHourAtDefaultScenario(businessHour.id))
    ]
    
    forkJoin(combinedDefaultScenarioRequests).subscribe(() => this.defaultScenarioGetters()); // guarantees all C,P and D happens before R in CRUD.
  }
}
