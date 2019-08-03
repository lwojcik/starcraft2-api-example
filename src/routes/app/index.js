const router = require("express").Router();
const StarCraft2API = require("starcraft2-api");

const clientId = process.env.API_BATTLENET_KEY;
const clientSecret = process.env.API_BATTLENET_SECRET;

router.get('/', (req, res) => {
  return res.json({
    message: "hello world!",
  });
});

router.get("/queryStaticProfileData/:regionId", async (req, res) => {
  const { regionId } = req.params;
  const Sc2API = new StarCraft2API({ region: regionId, clientId, clientSecret });
  const response = await Sc2API.queryStaticProfileData(regionId);
  res.json(response);
});

router.get("/queryProfileMetadata/:regionId/:realmId/:profileId", async (req, res) => {
  const { regionId, realmId, profileId } = req.params;
  const Sc2API = new StarCraft2API({ region: regionId, clientId, clientSecret });
  const response = await Sc2API.queryProfileMetadata({ regionId, realmId, profileId });
  res.json(response);
});

router.get("/queryProfile/:regionId/:realmId/:profileId", async (req, res) => {
  const { regionId, realmId, profileId } = req.params;
  const Sc2API = new StarCraft2API({ region: regionId, clientId, clientSecret });
  const response = await Sc2API.queryProfile({ regionId, realmId, profileId });
  res.json(response);
});

router.get("/queryLadderSummary/:regionId/:realmId/:profileId", async (req, res) => {
  const { regionId, realmId, profileId } = req.params;
  const Sc2API = new StarCraft2API({ region: regionId, clientId, clientSecret });
  const response = await Sc2API.queryLadderSummary({ regionId, realmId, profileId });
  res.json(response);
});

router.get("/queryPlayerLadder/:regionId/:realmId/:profileId/:ladderId", async (req, res) => {
    const { regionId, realmId, profileId, ladderId } = req.params;
    const Sc2API = new StarCraft2API({ region: regionId, clientId, clientSecret });
    const response = await Sc2API.queryPlayerLadder({ regionId, realmId, profileId }, ladderId);
    res.json(response);
});

router.get("/queryGrandmasterLeaderboard/:regionId", async (req, res) => {
  const { regionId } = req.params;
  const Sc2API = new StarCraft2API({ region: regionId, clientId, clientSecret });
  const response = await Sc2API.queryGrandmasterLeaderboard(regionId);
  res.json(response);
});

router.get("/querySeason/:regionId", async (req, res) => {
  const { regionId } = req.params;
  const Sc2API = new StarCraft2API({ region: regionId, clientId, clientSecret });
  const response = await Sc2API.querySeason(regionId);
  res.json(response);
});

router.get("/queryPlayerAccount/:regionId/:accountId", async (req, res) => {
  const { regionId, accountId } = req.params;
  const Sc2API = new StarCraft2API({ region: regionId, clientId, clientSecret });
  const response = await Sc2API.queryPlayerAccount(accountId);
  res.json(response);
});

router.get("/queryLegacyProfile/:regionId/:realmId/:profileId", async (req, res) => {
  const { regionId, realmId, profileId } = req.params;
  const Sc2API = new StarCraft2API({ region: regionId, clientId, clientSecret });
  const response = await Sc2API.queryLegacyProfile({ regionId, realmId, profileId });
  res.json(response);
});

router.get("/queryLegacyLadders/:regionId/:realmId/:profileId", async (req, res) => {
  const { regionId, realmId, profileId } = req.params;
  const Sc2API = new StarCraft2API({ region: regionId, clientId, clientSecret });
  const response = await Sc2API.queryLegacyLadders({ regionId, realmId, profileId });
  res.json(response);
});

router.get("/queryLegacyMatchHistory/:region/:realmId/:profileId", async (req, res) => {
  const { regionId, realmId, profileId } = req.params;
  const Sc2API = new StarCraft2API({ region: regionId, clientId, clientSecret });
  const response = await Sc2API.queryLegacyMatchHistory({ regionId, realmId, profileId });
  res.json(response);
});

router.get("/queryLegacyLadder/:regionId/:ladderId", async (req, res) => {
  const { regionId, ladderId } = req.params;
  const Sc2API = new StarCraft2API({ region: regionId, clientId, clientSecret });
  const response = await Sc2API.queryLegacyLadder(regionId, ladderId);
  res.json(response);
});

router.get("/queryLegacyAchievements/:regionId", async (req, res) => {
  const { regionId } = req.params;
  const Sc2API = new StarCraft2API({ regionId, clientId, clientSecret });
  const response = await Sc2API.queryLegacyAchievements(regionId);
  res.json(response);
});

router.get("/queryLegacyRewards/:regionId", async (req, res) => {
  const { regionId } = req.params;
  const Sc2API = new StarCraft2API({ region: regionId, clientId, clientSecret });
  const response = await Sc2API.queryLegacyRewards(regionId);
  res.json(response);
});

module.exports = router;