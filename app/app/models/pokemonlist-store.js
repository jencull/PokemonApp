'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const pokemonlistStore = {

  store: new JsonStore('./models/pokemonlist-store.json', { pokemonlistCollection: [] }),
  collection: 'pokemonlistCollection',
  
  // function to get all of the pokemonlists
  getAllPokemonlists() {
    return this.store.findAll(this.collection);
  },

 getPokemonlist(id) {
return this.store.findOneBy(this.collection, (collection => collection.id === id));
  },

  
   removePokemon(id, pokemonId) {
  const arrayName = "pokemon";
    this.store.removeItem(this.collection, id, arrayName, pokemonId);
  },

    addpokemon(id, pokemon) {
    const arrayName = "pokemon";
    this.store.addItem(this.collection, id, arrayName, pokemon);
  },
  

  removePokemonlist(id) {
    const pokemonlist = this.getPokemonlist(id);
    this.store.removeCollection(this.collection, pokemonlist);
  },

  
  removeAllPokemonlists() {
    this.store.removeAll(this.collection);
  },

  
  addPokemonlist(pokemonlist) {
    this.store.addCollection(this.collection, pokemonlist);
  },

};

// export the playlistStore object so it can be used elsewhere
export default pokemonlistStore;