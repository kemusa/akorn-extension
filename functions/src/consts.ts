import * as functions from 'firebase-functions';

const requestRunTimeOpts: functions.RuntimeOptions = {
  timeoutSeconds: 540,
  memory: '2GB',
};

export { requestRunTimeOpts };
