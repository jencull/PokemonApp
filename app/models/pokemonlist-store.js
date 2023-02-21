'use strict';

import _ from 'lodash';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const pokemonlistCollection = require("./pokemonlist-store.json");

const pokemonlistStore = {

  // import the pokemonlist collection object
  pokemonlistCollection: pokemonlistCollection.pokemonlistCollection,

  // function to get all of the pokemonlists
  getAllPokemonlists() {
    return this.pokemonlistCollection;
  },

 getPokemonlist (id) {
    return _.find(this.pokemonlistCollection, { id: id });
  },
  
   removePokemon(id, pokemonId) {
    const pokemonlist = this.getPokemonlist(id);
    _.remove(pokemonlist.pokemon, { id: pokemonId });
  },


};

// export the playlistStore object so it can be used elsewhere
export default pokemonlistStore;