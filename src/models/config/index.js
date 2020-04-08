'use strict';

module.exports = {
  achivki: {
    model: "Achivki",
    db: "Achivkis",
    foreignKey: {
      belongsToManyToScene: 'achivkiId'
    }
  },
  action: {
    model: "Action",
    db: "Actions"
  },
  adventure: {
    model: "Adventure",
    db: "Adventures",
    foreignKey: {
      belongsToManyToHashtag: 'adventureId'
    }
  },
  adventureHashtag: {
    model: "AdventureHashtag",
    db: "AdventureHashtags"
  },
  hashtag: {
    model: "Hashtag",
    db: "Hashtags",
    foreignKey: {
      belongsToManyToAdventure: 'hashtagId'
    }
  },
  scene: {
    model: "Scene",
    db: "Scenes",
    foreignKey: {
      hasManyToAction: 'belongSceneId',
      belongsToManyToAchivki:'sceneId',
      hasOneToAdventure: 'firstSceneId',
      hasOneToAction: 'nextSceneId'
    }
  },
  sceneAchivki: {
    model: "SceneAchivki",
    db: "SceneAchivkis"
  }
};
