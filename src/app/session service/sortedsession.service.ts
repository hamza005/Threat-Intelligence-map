import { Injectable } from '@angular/core';

import { Sort } from './sorted';
import { SORTEDARR } from '../aapData events/appdataevents';

@Injectable()
export class SessionService {
  getsorts(): Promise<Sort[]> {
    return Promise.resolve(SORTEDARR);
  }
}