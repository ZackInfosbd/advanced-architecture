import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAlarmsRepository } from 'src/alarms/application/ports/find-alarms.repository';
import { Repository } from 'typeorm';
import { AlarmEntity } from '../entities/alarm.entity';
import { Alarm } from 'src/alarms/domain/alarm';
import { AlarmMapper } from '../mappers/alarm.mapper';
import { AlarmReadModel } from 'src/alarms/domain/read-models/alarm.read-model';
import { MaterializedAlarmView } from '../schemas/materialized-alarm-view.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class OrmFindAlarmRepository implements FindAlarmsRepository {
  constructor(
    @InjectModel(MaterializedAlarmView.name)
    private readonly alarmModel: Model<MaterializedAlarmView>,
  ) {}

  async findAll(): Promise<AlarmReadModel[]> {
    return await this.alarmModel.find();
  }
}
