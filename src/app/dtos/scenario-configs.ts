import { BusinessHour } from "./business-hour";
import { PriceModel } from "./price-model";

export interface ScenarioConfigs {  
  capacity: number,
  businessHours: BusinessHour[],
  priceModels: PriceModel[];
}