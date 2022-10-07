export const idlFactory = ({ IDL }) => {
  const Profile = IDL.Record({
    'img' : IDL.Text,
    'name' : IDL.Text,
    'description' : IDL.Text,
    'address' : IDL.Text,
    'principal_id' : IDL.Principal,
  });
  return IDL.Service({
    'createUserProfile' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text],
        [Profile],
        [],
      ),
    'getOwnPrincipal' : IDL.Func([], [IDL.Principal], ['query']),
    'getOwnProfile' : IDL.Func([], [Profile], ['query']),
    'getPrincipalByEth' : IDL.Func(
        [IDL.Text],
        [IDL.Opt(IDL.Principal)],
        ['query'],
      ),
    'getPrincipalByName' : IDL.Func(
        [IDL.Text],
        [IDL.Opt(IDL.Principal)],
        ['query'],
      ),
    'getProfileByEth' : IDL.Func([IDL.Text], [IDL.Opt(Profile)], ['query']),
    'getProfileByName' : IDL.Func([IDL.Text], [IDL.Opt(Profile)], ['query']),
    'getProfileByPrincipal' : IDL.Func(
        [IDL.Principal],
        [IDL.Opt(Profile)],
        ['query'],
      ),
    'linkPrincipalID' : IDL.Func([IDL.Text], [IDL.Text], []),
    'list' : IDL.Func([], [IDL.Vec(Profile)], ['query']),
    'search' : IDL.Func([IDL.Text], [IDL.Opt(Profile)], ['query']),
    'setDescription' : IDL.Func([IDL.Text], [Profile], []),
    'setName' : IDL.Func([IDL.Text], [Profile], []),
  });
};
export const init = ({ IDL }) => { return []; };
