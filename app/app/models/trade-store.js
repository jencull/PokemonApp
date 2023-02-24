'use strict';

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const trade = require("./trade-store.json");
            
const tradeStore = {

  // import the trade object
  trade: trade.trade,

  // function to get the trades
  getAllTrade() {
    return this.trade;
  },

};

// export the tradeStore object so it can be used elsewhere
export default tradeStore;