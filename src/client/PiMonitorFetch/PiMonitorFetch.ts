import { PiStat } from '../../shared/models/PiStat';
import { IPiMonitorFetch } from './IPiMonitorFetch';
import { PiMonitorFetchBase } from './PiMonitorFetchBase';

export class PiMonitorFetch extends PiMonitorFetchBase {
    public get(): void {
        throw new Error('Method not implemented.');
    }

}
