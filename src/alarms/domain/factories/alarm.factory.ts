import { randomUUID } from 'crypto';
import { AlarmSeverity } from '../value-object/alarm-severity';
import { Alarm } from '../alarm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AlarmFactory {
  public create(name: string, severity: string) {
    const alarmId = randomUUID();
    const alarmSeverity = new AlarmSeverity(severity as AlarmSeverity['value']);
    return new Alarm(alarmId, name, alarmSeverity);
  }
}
