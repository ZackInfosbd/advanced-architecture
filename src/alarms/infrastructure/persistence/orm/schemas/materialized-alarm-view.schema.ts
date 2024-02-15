import { Prop, SchemaFactory, raw } from '@nestjs/mongoose';

export class MaterializedAlarmView {
  @Prop({ unique: true, index: true })
  id: string;

  @Prop()
  name: string;

  @Prop()
  severity: string;

  @Prop()
  isAcknowledged: boolean;

  @Prop(
    raw([
      {
        id: String,
        name: String,
        type: { type: String },
      },
    ]),
  )
  items: Array<{ id: string; name: string; type: string }>;
}

export const MaterializedAlarmViewSchema = SchemaFactory.createForClass(
  MaterializedAlarmView,
);
