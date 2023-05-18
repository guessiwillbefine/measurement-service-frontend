export interface measureMessage {
  value: number;
  isCritical?: boolean
}

export interface sensorMessage {
  id: number;
  measure: measureMessage;
  //criticalValue: number
}

export interface machineMessage {
  sensors: sensorMessage[];
}

export interface MeasuresSocketDto {
  machineMessage: machineMessage;
}
