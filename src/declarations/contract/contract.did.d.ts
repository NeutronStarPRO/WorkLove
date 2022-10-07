import type { Principal } from '@dfinity/principal';
export type InviteError = { 'InvitationCodeNotFound' : null };
export type LinkInvitationResult = { 'Ok' : Post } |
  { 'Err' : InviteError };
export interface Post {
  'id' : bigint,
  'text' : string,
  'user_self_id' : string,
  'timestamp' : bigint,
  'user_other_id' : string,
}
export interface _SERVICE {
  'getInvitationCode' : (arg_0: string) => Promise<string>,
  'linkByInvitationCode' : (arg_0: string) => Promise<LinkInvitationResult>,
  'message' : (arg_0: string) => Promise<Array<Post>>,
  'write' : (arg_0: string, arg_1: string) => Promise<undefined>,
}
