'use strict';

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const trade = require("./trade-store.json");
            
const tradeStore = {

  // import the playlist collection object
  trade: trade.trade,

  // function to get all of the playlists
  getAllTrade() {
    return this.trade;
  },

};

// export the developerStore object so it can be used elsewhere
export default tradeStore;