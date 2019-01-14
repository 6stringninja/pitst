import { PiStat } from '../../shared/models/PiStat';
import { PiMonitorFetchBase } from './PiMonitorFetchBase';

export class PiMonitorFetchTest   extends PiMonitorFetchBase {
    public get(): void {

        setTimeout(() => { const fakePiStat = new PiStat();
                           fakePiStat.coolingstate = (Math.round(Math.random() * 80) + 70).toString();
                           fakePiStat.cpu_count = '4';
                           fakePiStat.success = true;
                           this.proccess(fakePiStat); },
        200);

    }

}
