import { Observable } from 'rx';
import { PiStat } from '../../shared/models/PiStat';

export interface IPiMonitorFetch {

  result$: Observable<PiStat>;
  get(): void;
}
