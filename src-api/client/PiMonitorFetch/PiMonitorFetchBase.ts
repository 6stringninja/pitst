import { Observable, Observer } from 'rx';
import { PiStat } from '../../shared/models/PiStat';
import { IPiMonitorFetch } from './IPiMonitorFetch';
export abstract class PiMonitorFetchBase implements IPiMonitorFetch {
    public result$: Observable<PiStat>;
    private objserver$: Observer<PiStat>;
    constructor() {
        this.result$ = Observable.create<PiStat>((observer: Observer<PiStat>) => {
            this.objserver$ = observer;
        });
    }
    public abstract get(): void;
    protected proccess(result: PiStat): void {
        this.objserver$.onNext(result);
    }
}
