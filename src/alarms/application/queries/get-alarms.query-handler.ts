import { IQueryHandler } from '@nestjs/cqrs';
import { GetAlarmsQuery } from './get-alarms.query';
import { Alarm } from 'src/alarms/domain/alarm';
import { AlarmRepository } from '../ports/alarm.repository';

export class GetAlarmsQueryHandler
  implements IQueryHandler<GetAlarmsQuery, Alarm[]>
{
  constructor(private readonly alarmsRepository: AlarmRepository) {}

  async execute(query: GetAlarmsQuery): Promise<Alarm[]> {
    return this.alarmsRepository.findAll();
  }
}
