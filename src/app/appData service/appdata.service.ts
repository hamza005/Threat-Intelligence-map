import { Injectable } from '@angular/core';
import { Event } from '../events/events';
import { EVENTS } from '../aapData events/appdataevents';
@Injectable()
export class EventService {
  getEvents(): Promise<Event[]> {
    return Promise.resolve(EVENTS);
  }
}