export interface DDayAddPayload {
  leftDays?: number;
  title: string;
}

export interface DDayRemovePayload {
  id: number;
}

export interface DDayUpdatePayload extends DDayAddPayload, DDayRemovePayload {

}

export interface DDay extends DDayAddPayload, DDayRemovePayload {
  endDate: Date;
}