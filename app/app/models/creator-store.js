'use strict';

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const creator = require("./creator-store.json");
            
const creatorStore = {

  // import the creator collection object
  creator: creator.creator,

  // function to get all of the creators
  getAllCreator() {
    return this.creator;
  },

};

// export the creatorStore object so it can be used elsewhere
export default creatorStore;