import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { CreateAlarmCommand } from './create-alarm.command';
import { Logger } from '@nestjs/common';
import { AlarmRepository } from '../ports/alarm.repository';
import { AlarmFactory } from 'src/alarms/domain/factories/alarm.factory';
import { AlarmCreatedEvent } from 'src/alarms/domain/events/alarm-created.event';

@CommandHandler(CreateAlarmCommand)
export class CreateAlarmCommandHandler
  implements ICommandHandler<CreateAlarmCommand>
{
  private readonly logger = new Logger(CreateAlarmCommandHandler.name);
  constructor(
    private readonly alarmRepository: AlarmRepository,
    private readonly alarmfactory: AlarmFactory,
    private readonly eventBus: EventBus,
  ) {}

  async execute(command: CreateAlarmCommand) {
    this.logger.debug(
      `Processing CreateAlarmCommand: ${JSON.stringify(command)}`,
    );
    const alarm = this.alarmfactory.create(command.name, command.severity);
    const newAlarm = await this.alarmRepository.save(alarm);

    // this is not the best way to dispatch events.
    // Domain events should be dispatched from the aggregate root, inside the domain layer
    // I'll refactor this.
    return this.eventBus.publish(new AlarmCreatedEvent(newAlarm));
  }
}
