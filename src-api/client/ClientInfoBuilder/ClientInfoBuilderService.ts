import { Inject, Singleton } from 'typescript-ioc';
import { ClientInfoBuilder } from '.';
import { ServiceBase } from '../../shared/ServiceBase';
import { IClientInfoBuilder } from './IClientInfoBuilder';

@Singleton
export class ClientInfoBuilderService extends ServiceBase<IClientInfoBuilder, ClientInfoBuilder> {
  @Inject
  public service: ClientInfoBuilder;
}
