import type { Principal } from '@dfinity/principal';
export interface Profile {
  'img' : string,
  'name' : string,
  'description' : string,
  'address' : string,
  'principal_id' : Principal,
}
export interface _SERVICE {
  'createUserProfile' : (
      arg_0: string,
      arg_1: string,
      arg_2: string,
    ) => Promise<Profile>,
  'getOwnPrincipal' : () => Promise<Principal>,
  'getOwnProfile' : () => Promise<Profile>,
  'getPrincipalByEth' : (arg_0: string) => Promise<[] | [Principal]>,
  'getPrincipalByName' : (arg_0: string) => Promise<[] | [Principal]>,
  'getProfileByEth' : (arg_0: string) => Promise<[] | [Profile]>,
  'getProfileByName' : (arg_0: string) => Promise<[] | [Profile]>,
  'getProfileByPrincipal' : (arg_0: Principal) => Promise<[] | [Profile]>,
  'linkPrincipalID' : (arg_0: string) => Promise<string>,
  'list' : () => Promise<Array<Profile>>,
  'search' : (arg_0: string) => Promise<[] | [Profile]>,
  'setDescription' : (arg_0: string) => Promise<Profile>,
  'setName' : (arg_0: string) => Promise<Profile>,
}
