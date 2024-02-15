import { Injectable } from '@nestjs/common';
import { CreateAlarmCommand } from './commands/create-alarm.command';
import { CommandBus } from '@nestjs/cqrs';
import { AlarmRepository } from './ports/alarm.repository';

@Injectable()
export class AlarmsService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly alarmRepository: AlarmRepository,
  ) {}

  create(createAlarmCommand: CreateAlarmCommand) {
    return this.commandBus.execute(createAlarmCommand);
  }

  findAll() {
    return this.alarmRepository.findAll();
  }
}
