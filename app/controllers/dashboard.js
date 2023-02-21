'use strict';

// import all required modules
import logger from '../utils/logger.js';
import pokemonlistStore from '../models/pokemonlist-store.js';


// create dashboard object
const dashboard = {

  // index method - responsible for creating and rendering the view
  index(request, response) {

    // display confirmation message in log
    logger.info('dashboard rendering');

    // create view data object (contains data to be sent to the view e.g. page title)
    const viewData = {
      title: 'Pokemon App Dashboard',
      pokemonlists: pokemonlistStore.getAllPokemonlists(),

    };

    // render the dashboard view and pass through the data
    logger.info('about to render', viewData.pokemonlists);
    response.render('dashboard', viewData);
  },
};

// export the dashboard module
export default dashboard;
