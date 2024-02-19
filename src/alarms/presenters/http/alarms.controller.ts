import { Body, Controller, Get, Post } from '@nestjs/common';
import { AlarmsService } from '../../application/alarms.service';
import { CreateAlarmCommand } from '../../application/commands/create-alarm.command';
import { CreateAlarmDto } from './dto/create-alarm.dto';

@Controller('alarms')
export class AlarmsController {
  constructor(private readonly alarmsService: AlarmsService) {}

  @Post()
  create(@Body() createAlarmDto: CreateAlarmDto) {
    console.log('createAlarmDto', createAlarmDto);

    // return this.alarmsService.create(
    //   new CreateAlarmCommand(
    //     createAlarmDto.name,
    //     createAlarmDto.severity,
    //     createAlarmDto.triggeredAt,
    //     createAlarmDto.items,
    //   ),
    // );
    //   // new CreateAlarmCommand('Alarm Test', 'High', new Date(), [
    //   //   {
    //   //     name: 'Item 1',
    //   //     type: 'TYPE_1',
    //   //   },
    //   //   {
    //   //     name: 'Item 2',
    //   //     type: 'TYPE_2',
    //   //   },
    //   // ]),
    // );
  }

  @Get()
  findAll() {
    return this.alarmsService.findAll();
  }
}
