import { AutoWired, Inject } from 'typescript-ioc';

export abstract class ServiceBase<T, T2 extends T> {

    public abstract service: T2;
    public override(service: T) {
        this.service = service as T2;
    }
}
