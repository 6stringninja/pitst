import { PostBase } from '../shared/commands/PostBase';
import { PostWhoInput } from '../shared/models/Messages/PostWhoInput';
import { PostWhoResult } from '../shared/models/Messages/PostWhoResult';
export class PostWho extends PostBase<PostWhoInput, PostWhoResult> {
  constructor() {
    super('http://localhost:3000/who');
  }
  public mapResult(resp: any, body: any): PostWhoResult {
    return body.result as PostWhoResult;
  }
}
