const request = require('supertest');
const app = require('../src/app');

const regionId = '1';
const realmId = '1';
const profileId = '123456';

jest.mock('starcraft2-api', () => jest.fn().mockImplementation(() => ({
  queryStaticProfileData: () => Promise.resolve({
    data: 'sample data for queryStaticProfileData',
  }),
  queryProfileMetadata: () => Promise.resolve({
    data: 'sample data for queryProfileMetadata',
  }),
  queryProfile: () => Promise.resolve({
    data: 'sample data for queryProfile',
  }),
  queryLadderSummary: () => Promise.resolve({
    data: 'sample data for queryLadderSummary',
  }),
  queryPlayerLadder: () => Promise.resolve({
    data: 'sample data for queryPlayerLadder',
  }),
  queryGrandmasterLeaderboard: () => Promise.resolve({
    data: 'sample data for queryGrandmasterLeaderboard',
  }),
  querySeason: () => Promise.resolve({
    data: 'sample data for querySeason',
  }),
  queryPlayerAccount: () => Promise.resolve({
    data: 'sample data for queryPlayerAccount',
  }),
  queryLegacyProfile: () => Promise.resolve({
    data: 'sample data for queryLegacyProfile',
  }),
  queryLegacyLadders: () => Promise.resolve({
    data: 'sample data for queryLegacyLadders',
  }),
  queryLegacyMatchHistory: () => Promise.resolve({
    data: 'sample data for queryLegacyMatchHistory',
  }),
  queryLegacyLadder: () => Promise.resolve({
    data: 'sample data for queryPlayerAccount',
  }),
})));

const routes = [
  `/queryStaticProfileData/${regionId}`,
  `/queryProfileMetadata/${regionId}/${realmId}/${profileId}`,
  `/queryProfile/${regionId}/${realmId}/${profileId}`,
  // '/utils/getAllRegions',
  // '/utils/getAllRegionIds',
  // '/utils/getAllRegionNames',
  // ...getRouteArray('getRegionNameById', regionIds),
  // ...getRouteArray('getRegionIdByName', regionNames),
  // ...getRouteArray('validateRegionId', regionIds),
  // ...getRouteArray('validateRegionId', wrongRegionIds),
  // ...getRouteArray('validateRegionName', regionNames),
  // ...getRouteArray('validateRegionName', wrongRegionNames),
  // '/utils/getAllLocales',
  // '/utils/getAllLocaleNames',
  // ...getRouteArray('getLocalesByRegionId', regionIds),
  // ...getRouteArray('checkIfLocaleLooksValid', locales),
  // ...getRouteArray('validateLocale', locales),
  // ...getRouteArray('isLocaleValidForRegionId', getParams(locales, regionIds)),
  // '/utils/getAllDefaultLocaleNames',
  // ...getRouteArray('getDefaultLocaleNameForRegionId', regionIds),
  // '/utils/getAllSc2Realms',
  // '/utils/getAllAvailableSc2Realms',
  // ...getRouteArray('getSc2RealmsByRegionId', regionIds),
  // ...getRouteArray('checkIfSc2RealmLooksValid', sc2Realms),
  // ...getRouteArray('validateSc2Realm', sc2Realms),
  // ...getRouteArray('isSc2RealmValidForRegionId', getParams(sc2Realms, regionIds)),
];

routes.map(route => {
  describe(route, () => {
    test('should return 200', async () => {
      const response = await request(app).get(route);
      expect(response.statusCode).toBe(200);
    });

    test('should match snapshot', async () => {
      const response = await request(app).get(route);
      expect(response.body).toMatchSnapshot();
    });
  });
})