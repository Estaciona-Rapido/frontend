export interface BusinessHour {
    id: bigint,
    isActivated: boolean,
    startWeekDay: number,
    endWeekDay: number,
    startTime: string,
    endTime: string
}