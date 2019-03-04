const router = require("express").Router();

const {
  env
} = process;
const {
  StarCraft2API
} = require("../../../../StarCraft2-API");

const clientId = env.API_BATTLENET_KEY;
const clientSecret = env.API_BATTLENET_SECRET;

router.get("/queryStaticProfileData/:regionId", async (req, res) => {
  try {
    const {
      regionId
    } = req.params;
    const {
      locale
    } = req.query;
    const clientId = env.API_BATTLENET_KEY;
    const clientSecret = env.API_BATTLENET_SECRET;
    const Sc2API = new StarCraft2API(regionId, clientId, clientSecret);
    const response = await Sc2API.queryStaticProfileData(region, locale);
    res.json(response);
  } catch (error) {
    throw error;
  }
});

router.get("/queryProfileMetadata/:regionId/:realmId/:profileId", async (req, res) => {
  try {
    const {
      regionId,
      realmId,
      profileId,
    } = req.params;

    const {
      locale
    } = req.query;

    const Sc2API = new StarCraft2API(regionId, clientId, clientSecret);
    const response = await Sc2API.queryProfileMetadata(regionId, realmId, profileId, locale);
    res.json(response);
  } catch (error) {
    throw error;
  }
});

router.get("/queryProfile/:regionId/:realmId/:profileId", async (req, res) => {
  try {
    const {
      regionId,
      realmId,
      profileId,
    } = req.params;

    const {
      locale
    } = req.query;

    const Sc2API = new StarCraft2API(regionId, clientId, clientSecret);
    const response = await Sc2API.queryProfile(regionId, realmId, profileId, locale);
    res.json(response);
  } catch (error) {
    throw error;
  }
});

router.get("/queryLadderSummary/:regionId/:realmId/:profileId", async (req, res) => {
  try {
    const {
      regionId,
      realmId,
      profileId,
    } = req.params;
    const {
      locale
    } = req.query;
    const Sc2API = new StarCraft2API(regionId, clientId, clientSecret);
    const response = await Sc2API.queryLadderSummary(regionId, realmId, profileId, locale);
    res.json(response);
  } catch (error) {
    throw error;
  }
});

router.get("/queryPlayerLadder/:regionId/:realmId/:profileId/:ladderId", async (req, res) => {
  try {
    const {
      regionId,
      realmId,
      profileId,
      ladderId,
    } = req.params;
    const {
      locale
    } = req.query;
    const Sc2API = new StarCraft2API(regionId, clientId, clientSecret);
    const response = await Sc2API.queryPlayerLadder(regionId, realmId, profileId, ladderId, locale);
    res.json(response);
  } catch (error) {
    throw error;
  }
});

router.get("/queryGrandmasterLeaderboard/:regionId", async (req, res) => {
  try {
    const {
      regionId,
    } = req.params;

    const Sc2API = new StarCraft2API(regionId, clientId, clientSecret);
    const response = await Sc2API.queryGrandmasterLeaderboard(regionId);

    res.json(response);
  } catch (error) {
    throw error;
  }
});

router.get("/querySeason/:regionId", async (req, res) => {
  try {
    const {
      regionId,
    } = req.params;

    const Sc2API = new StarCraft2API(regionId, clientId, clientSecret);
    const response = await Sc2API.querySeason(regionId);

    res.json(response);
  } catch (error) {
    throw error;
  }
});

router.get("/queryPlayerAccount/:accountId", async (req, res) => {
  try {
    const {
      accountId,
    } = req.params;

    const Sc2API = new StarCraft2API(regionId, clientId, clientSecret);
    const response = await Sc2API.queryPlayerAccount(accountId);

    res.json(response);
  } catch (error) {
    throw error;
  }
});

router.get("/queryLegacyProfile/:regionId/:realmId/:profileId", async (req, res) => {
  try {
    const {
      regionId,
      realmId,
      profileId,
    } = req.params;

    const Sc2API = new StarCraft2API(regionId, clientId, clientSecret);
    const response = await Sc2API.queryLegacyProfile(regionId, realmId, profileId);
    res.json(response);
  } catch (error) {
    throw error;
  }
});

router.get("/queryLegacyLadders/:regionId/:realmId/:profileId", async (req, res) => {
  try {
    const {
      regionId,
      realmId,
      profileId,
    } = req.params;

    const Sc2API = new StarCraft2API(regionId, clientId, clientSecret);
    const response = await Sc2API.queryLegacyLadders(regionId, realmId, profileId);
    res.json(response);
  } catch (error) {
    throw error;
  }
});

router.get("/queryLegacyMatchHistory/:regionId/:realmId/:profileId", async (req, res) => {
  try {
    const {
      regionId,
      realmId,
      profileId,
    } = req.params;

    const Sc2API = new StarCraft2API(regionId, clientId, clientSecret);
    const response = await Sc2API.queryLegacyMatchHistory(regionId, realmId, profileId);
    res.json(response);
  } catch (error) {
    throw error;
  }
});

router.get("/queryLegacyLadder/:regionId/:ladderId", async (req, res) => {
  try {
    const {
      regionId,
      ladderId,
    } = req.params;

    const Sc2API = new StarCraft2API(regionId, clientId, clientSecret);
    const response = await Sc2API.queryLegacyLadder(regionId, ladderId);
    res.json(response);
  } catch (error) {
    throw error;
  }
});

router.get("/queryLegacyAchievements/:regionId", async (req, res) => {
  try {
    const {
      regionId,
    } = req.params;

    const Sc2API = new StarCraft2API(regionId, clientId, clientSecret);
    const response = await Sc2API.queryLegacyAchievements(regionId);
    res.json(response);
  } catch (error) {
    throw error;
  }
});

router.get("/queryLegacyRewards/:regionId", async (req, res) => {
  try {
    const {
      regionId,
    } = req.params;

    const Sc2API = new StarCraft2API(regionId, clientId, clientSecret);
    const response = await Sc2API.queryLegacyRewards(regionId);
    res.json(response);
  } catch (error) {
    throw error;
  }
});

module.exports = router;