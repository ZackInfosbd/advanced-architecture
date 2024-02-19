import { EventClsRegistry } from '../infrastructure/event-store/event-cli.registery';

export const AutowiredEvent: ClassDecorator = (target: any) => {
  EventClsRegistry.add(target);
};
