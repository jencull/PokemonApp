'use strict';

// import all required modules
import logger from '../utils/logger.js';
import pokemonlistStore from '../models/pokemonlist-store.js';

const pokemonlist = {
  index(request, response) {
    const pokemonlistId = request.params.id;
    logger.debug('Pokemonlist id = ' + pokemonlistId);
    const viewData = {
      title: 'Pokemonlist',
      pokemonlist: pokemonlistStore.getPokemonlist(pokemonlistId),
    };
    response.render('pokemonlist', viewData);
  },
  
  
    deletePokemon(request, response) {
    const pokemonlistId = request.params.id;
    const pokemonId = request.params.pokemonid;
    logger.debug(`Deleting Pokemon ${pokemonId} from Pokemonlist ${pokemonlistId}`);
    pokemonlistStore.removePokemon(pokemonlistId, pokemonId);
    response.redirect('/pokemonlist/' + pokemonlistId);
  },

};

export default pokemonlist;