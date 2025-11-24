import { PriceOption } from "./price-option";

export interface Scenario {
    id: bigint,
    scenarioName: string,
    open: boolean,
    capacity: bigint,
    prices: PriceOption[]
}