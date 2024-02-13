import { Alarm } from 'src/alarms/domain/alarm';

// first Port
export abstract class AlarmRepository {
  abstract findAll(): Promise<Alarm[]>;
  abstract create(alarm: Alarm): Promise<Alarm>;
}
