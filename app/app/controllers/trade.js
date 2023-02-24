'use strict';

// import all required modules
import logger from '../utils/logger.js';
import tradeStore from '../models/trade-store.js';

// create about object
const trade = {
  
  // index method - responsible for creating and rendering the view
  index(request, response) {
    
    // display confirmation message in log
    logger.info('trade rendering');
    
    // create view data object (contains data to be sent to the view e.g. page title)
    const viewData = {
      title: 'Pokemon Trading',
      trade: tradeStore.getAllTrade(),
    };
    
    // render the about view and pass through the data
    response.render('trade', viewData);
  },
};

// export the about module
export default trade;