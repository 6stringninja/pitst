import request from 'request';
import { Observable } from 'rx';
import { ErrorMessage } from './ErrorMessage';

export abstract class PostBase<TBody, TResult> {
  public result$: Observable<TResult>;
  public error$: Observable<ErrorMessage>;

  private observererror: Rx.Observer<ErrorMessage>;

  private observer: Rx.Observer<TResult>;

  constructor(
    public url = '',
    public body: TBody = null,
    public errorCode = 'E0',
    public errorMessage = 'Post Error Occured',
  ) {
    this.result$ = Observable.create<TResult>((obs) => (this.observer = obs));
    this.error$ = Observable.create<ErrorMessage>(
      (obse) => (this.observererror = obse),
    );
  }

  public abstract mapResult(resp: any, body: any): TResult;

  public post(bdy: TBody = this.body): void {
   // console.log(bdy);

    request.post(
      this.url,
      {
        json: bdy as any,
      },
      (error, res, body) => {
        if (error) {
          console.error(error);
          if (this.observererror ) {
            this.observererror.onNext(
              new ErrorMessage(this.errorCode, this.errorMessage, error),
            );
          }

          return;
        }
      if(this.observer){
        this.observer.onNext(this.mapResult(res, body));
      }

      //  console.log(`statusCode: ${res.statusCode}`);
       // console.log(body);
      },
    );
  }
}
