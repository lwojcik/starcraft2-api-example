const request = require('supertest');
const app = require('../src/app');

const regionId = '1';
const realmId = '1';
const profileId = '123456';
const ladderId = '234567';
const accountId = '123';
const seasonId = '37';
const queueId = '201';
const teamType = '0';
const leagueId = '6';

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
    data: 'sample data for queryLegacyLadder',
  }),
  queryLegacyAchievements: () => Promise.resolve({
    data: 'sample data for queryLegacyAchievements',
  }),
  queryLegacyRewards: () => Promise.resolve({
    data: 'sample data for queryLegacyRewards',
  }),
  queryLeagueData: () => Promise.resolve({
    data: 'sample data for queryLeagueData',
  }),
})));

const routes = [
  '/',
  `/queryStaticProfileData/${regionId}`,
  `/queryProfileMetadata/${regionId}/${realmId}/${profileId}`,
  `/queryProfile/${regionId}/${realmId}/${profileId}`,
  `/queryLadderSummary/${regionId}/${realmId}/${profileId}`,
  `/queryPlayerLadder/${regionId}/${realmId}/${profileId}/${ladderId}`,
  `/queryGrandmasterLeaderboard/${regionId}`,
  `/querySeason/${regionId}`,
  `/queryPlayerAccount/${regionId}/${accountId}`,
  `/queryLegacyProfile/${regionId}/${realmId}/${profileId}`,
  `/queryLegacyLadders/${regionId}/${realmId}/${profileId}`,
  `/queryLegacyMatchHistory/${regionId}/${realmId}/${profileId}`,
  `/queryLegacyLadder/${regionId}/${ladderId}`,
  `/queryLegacyAchievements/${regionId}`,
  `/queryLegacyRewards/${regionId}`,
  `/queryLeagueData/${regionId}/${seasonId}/${queueId}/${teamType}/${leagueId}`
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