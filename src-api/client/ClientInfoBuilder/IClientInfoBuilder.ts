import { ClientInfo } from '../../shared/models/ClientInfo/ClientInfo';
export interface IClientInfoBuilder {
  get(): ClientInfo;
}
