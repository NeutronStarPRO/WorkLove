export const idlFactory = ({ IDL }) => {
  const Post = IDL.Record({
    'id' : IDL.Int,
    'text' : IDL.Text,
    'user_self_id' : IDL.Text,
    'timestamp' : IDL.Int,
    'user_other_id' : IDL.Text,
  });
  const InviteError = IDL.Variant({ 'InvitationCodeNotFound' : IDL.Null });
  const LinkInvitationResult = IDL.Variant({
    'Ok' : Post,
    'Err' : InviteError,
  });
  return IDL.Service({
    'getInvitationCode' : IDL.Func([IDL.Text], [IDL.Text], []),
    'linkByInvitationCode' : IDL.Func([IDL.Text], [LinkInvitationResult], []),
    'message' : IDL.Func([IDL.Text], [IDL.Vec(Post)], ['query']),
    'write' : IDL.Func([IDL.Text, IDL.Text], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
