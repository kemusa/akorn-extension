import * as functions from 'firebase-functions';
import { MapsController } from './controllers/mapsController';
import { PropertyController } from './controllers/propertyController';
import { CompanyController } from './controllers/companyController';
import { requestRunTimeOpts } from './consts';
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

export const getMapsData = functions.https.onRequest(async (req, res) => {
  const mapsController = new MapsController();
  const data = await mapsController.getPlaceData(req.body.data);
  res.status(200).send({ data });
});

export const getPropertyOwners = functions
  .runWith(requestRunTimeOpts)
  .https.onRequest(async (req, res) => {
    const propController = new PropertyController();
    const data = await propController.getLandRegMatches(req.body.data);
    res.status(200).send({ data });
  });

export const getMoreQueryData = functions
  .runWith(requestRunTimeOpts)
  .https.onRequest(async (req, res) => {
    const propController = new PropertyController();
    const { jobId, pageToken } = req.body.data;
    const data = await propController.continueJob(jobId, pageToken);
    res.status(200).send({ data });
  });

export const getCompanyProperties = functions
  .runWith(requestRunTimeOpts)
  .https.onRequest(async (req, res) => {
    const propController = new PropertyController();
    const data = await propController.getAllCompanyProperties(req.body.data);
    res.status(200).send({ data });
  });

export const getCompanyOwners = functions.https.onRequest(async (req, res) => {
  const companyController = new CompanyController();
  const { companyId } = req.body.data;
  const data = await companyController.getCompanyOwners(companyId);
  res.status(200).send({ data });
});

export const getCompanyOfficers = functions.https.onRequest(
  async (req, res) => {
    const companyController = new CompanyController();
    const { companyId } = req.body.data;
    const data = await companyController.getCompanyOfficers(companyId);
    res.status(200).send({ data });
  }
);
