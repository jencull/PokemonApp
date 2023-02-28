"use strict";

// import all required modules
import logger from "../utils/logger.js";
import pokemonlistStore from "../models/pokemonlist-store.js";
import { v4 as uuidv4 } from "uuid";

const pokemonlist = {
  index(request, response) {
    const pokemonlistId = request.params.id;
    logger.debug("Pokemonlist id = " + pokemonlistId);
    const viewData = {
      title: "Pokemonlist",
      pokemonlist: pokemonlistStore.getPokemonlist(pokemonlistId),
    };
    response.render("pokemonlist", viewData);
  },

  //delete pokemon from the lists
  deletePokemon(request, response) {
    const pokemonlistId = request.params.id;
    const pokemonId = request.params.pokemonid;
    logger.debug(
      `Deleting Pokemon ${pokemonId} from Pokemonlist ${pokemonlistId}`
    );
    pokemonlistStore.removePokemon(pokemonlistId, pokemonId);
    response.redirect("/pokemonlist/" + pokemonlistId);
  },

  //add pokemon to the lists
  addpokemon(request, response) {
    const pokemonlistId = request.params.id;
    const pokemonlist = pokemonlistStore.getPokemonlist(pokemonlistId);
    const addpokemon = {
      id: uuidv4(),
      title: request.body.title,
      type: request.body.type,
      cp: request.body.cp,
      moveset: request.body.moveset,
    };

    pokemonlistStore.addpokemon(pokemonlistId, addpokemon);
    response.redirect("/pokemonlist/" + pokemonlistId);
  },
};

export default pokemonlist;
