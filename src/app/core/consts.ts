const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be whitelisted in the Firebase Console.
  url: '/login?id=',
  // This must be true.
  handleCodeInApp: true
};

const analyticsEvents = {
  userAccountCreated: 'User Account Created',
  userSignedIn: 'User Signed In',
  userUpdatesProfile: 'User Updates Profile',
  requestSent: 'Request Sent',
  responseSent: 'Response sent',
  userViewsRequest: 'User Views Request'
};

const requestCollection = {
  in: 'requests_in',
  out: 'requests_out'
};

const tempFileUploadPath = 'tmp/videos/';

export {
  actionCodeSettings,
  analyticsEvents,
  requestCollection,
  tempFileUploadPath
};
