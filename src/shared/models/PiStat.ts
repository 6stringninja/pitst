export class PiStat {
  public coolingstate: string;
  // tslint:disable-next-line:variable-name
  public cpu_frequency: string;
  // tslint:disable-next-line:variable-name
  public memory_free: number;
  // tslint:disable-next-line:variable-name
  public sdcard_root_used: number;
  public load5: string;
  public localtime?: number[] | null;
  public uptime: string;
  public soctemp: string;
  public load15: string;
  // tslint:disable-next-line:variable-name
  public cpu_count: string;
  public packages: string;
  // tslint:disable-next-line:variable-name
  public memory_available: number;
  public upgrade: string;
  public load1: string;
  // tslint:disable-next-line:variable-name
  public scaling_governor: string;
  public success = false;
}
