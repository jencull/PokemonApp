'use strict';

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const creator = require("./creator-store.json");
            
const creatorStore = {

  // import the playlist collection object
  creator: creator.creator,

  // function to get all of the playlists
  getAllCreator() {
    return this.creator;
  },

};

// export the developerStore object so it can be used elsewhere
export default creatorStore;