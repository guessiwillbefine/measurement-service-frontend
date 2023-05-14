interface MeasureMessage {
  value: number;
  isCritical: boolean
}

interface SensorMessage {
  id: number;
  measure: MeasureMessage;
}

interface MachineMessage {
  sensors: SensorMessage[];
}

export interface MeasuresSocketDto {
  machineMessage: MachineMessage;
}
