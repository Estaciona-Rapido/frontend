export interface PriceModel {
    id: bigint,
    name: string,
    isActivated: boolean,
    value: number,
    frequencyValue: number,
    frequencyType: string
}