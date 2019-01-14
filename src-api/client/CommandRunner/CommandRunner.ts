import cpp from 'child-process-promise';
import { runInContext } from 'vm';

const spawn = cpp.spawn;
spawn('cd', ['rsptst'], { capture: ['stdout', 'stderr'] })
  .then((result: { stdout: { toString: () => void } }) => {
    console.log('[spawn] stdout: ', result.stdout.toString());
  })
  .catch((err: { stderr: any }) => {
    console.error('[spawn] stderr: ', err.stderr);
  });
export class CommandRunnerCommand {
  public next: CommandRunnerCommand;
  constructor(public command = '', public params: string[] = [], nextcommand = null) {
    this.next = nextcommand;
  }
}
// tslint:disable-next-line:max-classes-per-file
export class CommandRunner {
  public currentCommand: CommandRunnerCommand;
  // tslint:disable-next-line:typedef-whitespace
  // tslint:disable-next-line:whitespace
  // tslint:disable-next-line:typedef-whitespace
  public async run( cmd: CommandRunnerCommand, output   = ''): Promise<string> {
    try {
      const result = await spawn(cmd.command, cmd.params, { capture: ['stdout', 'stderr'] });
      console.log('[spawn] stdout: ', result.stdout.toString());
      output += result.stdout.toString();
      if (cmd.next) {

        await this.run(cmd.next, output);

      }
      return output;
    } catch (err) {
      console.error('[spawn] stderr: ', err.stderr);
      return 'error';
    }
  }
}
