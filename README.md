<img src="https://raw.githubusercontent.com/lukemnet/starcraft2-api-docs/master/docs/.vuepress/public/logo.png" alt="StarCraft2-API logo" width="200" height="200">

# starcraft2-api-example
[![Build status](https://ci.appveyor.com/api/projects/status/x77wvgrihhssl2o6/branch/master?svg=true)](https://ci.appveyor.com/project/lwojcik/starcraft2-api-example/branch/master)
[![codecov](https://codecov.io/gh/lukemnet/starcraft2-api-example/branch/master/graph/badge.svg?token=xaTUC9pzqN)](https://codecov.io/gh/lukemnet/starcraft2-api-example)


Sample REST API based on Express.js demonstrating [StarCraft2-API](https://github.com/lukemnet/starcraft2-api) features.

Note that this project is for illustrative purposes only. It is not designed to run as a production server.

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Install

```bash
git clone https://github.com/lukemnet/starcraft2-api-example.git
cd starcraft2-api-example
npm install
```

## Setup

Register a client app with [Blizzard Battle.net Developer Portal](https://develop.battle.net/access/clients). Note down client id and client secret.

Copy and rename the file ``.env.sample`` to ``.env``. Edit it accordingly:

```
API_PORT='8080'
API_BATTLENET_KEY='your client app id'
API_BATTLENET_SECRET='your client app secret'
```

## Run

With Node:

```bash
npm start
```

With Nodemon:

```bash
nodemon start.js
```

## Available endpoints

### ``GET /queryStaticProfileData/:regionId``

Returns all static SC2 profile data (achievements, categories, criteria, and rewards).

### ``GET /queryProfileMetadata/:regionId/:realmId/:profileId``

Returns metadata for an individual's profile.

### ``GET /queryProfile/:regionId/:realmId/:profileId``

Returns data about an individual SC2 profile.

### ``GET /queryLadderSummary/:regionId/:realmId/:profileId``

Returns a ladder summary for an individual SC2 profile.

### ``GET /queryPlayerLadder/:regionId/:realmId/:profileId/:ladderId``

Returns data about an individual profile's ladder.

### ``GET /queryGrandmasterLeaderboard/:regionId``

Returns ladder data for the current season's grandmaster leaderboard.

### ``GET /querySeason/:regionId``

Returns data about the current season.

### ``GET /queryPlayerAccount/:regionId/:accountId``

Returns metadata for an individual's account.

### ``GET /queryLegacyProfile/:regionId/:realmId/:profileId``

Retrieves data about an individual SC2 profile.

### ``GET /queryLegacyLadders/:regionId/:realmId/:profileId``

Retrieves data about an individual SC2 profile's ladders.

### ``GET /queryLegacyMatchHistory/:region/:realmId/:profileId``

Returns data about an individual SC2 profile's match history.

### ``GET /queryLegacyLadder/:regionId/:ladderId``

Returns data about an individual SC2 ladder.

### ``GET /queryLegacyAchievements/:regionId``

Returns data about the achievements available in SC2.

### ``GET /queryLegacyRewards/:regionId``

Returns data about the rewards available in SC2.

### ``GET /queryLeagueData/:regionId/:seasonId/:queueId/:teamType/:leagueId``

Returns data for the specified season, queue, team, and league.

## License

Licensed under MIT License. See [LICENSE](https://github.com/lukemnet/starcraft2-api-example/blob/master/LICENSE) for more information.

## Legal

This project is not authored, affiliated or endorsed in any way by Blizzard Entertainment.

Battle.net and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.

© 2010 Blizzard Entertainment, Inc. All rights reserved. Wings of Liberty is a trademark, and StarCraft and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.

© 2013 Blizzard Entertainment, Inc. All rights reserved. Heart of the Swarm and StarCraft are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.
