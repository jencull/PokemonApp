"use strict";

// import all required modules
import logger from "../utils/logger.js";
import pokemonlistStore from "../models/pokemonlist-store.js";
import { v4 as uuidv4 } from "uuid";

// create dashboard object
const dashboard = {
  // index method - responsible for creating and rendering the view
  index(request, response) {
    // display confirmation message in log
    logger.info("dashboard rendering");

    // create view data object (contains data to be sent to the view e.g. page title)
    const viewData = {
      title: "Pokemon App Dashboard",
      pokemonlists: pokemonlistStore.getAllPokemonlists(),
    };

    // render the dashboard view and pass through the data
    logger.info("about to render", viewData.pokemonlists);
    response.render("dashboard", viewData);
  },

  //have a delete list via trashcan icon on the dash
  deletepokemonlist(request, response) {
    const pokemonlistId = request.params.id;
    logger.debug(`Deleting Pokemonlist ${pokemonlistId}`);
    pokemonlistStore.removePokemonlist(pokemonlistId);
    response.redirect("/dashboard");
  },
  
// add pokemon list via form on the dash
  addPokemonlist(request, response) {
    const newPokemonList = {
      id: uuidv4(),
      title: request.body.title,
      pokemon: [],
    };
    pokemonlistStore.addPokemonlist(newPokemonList);
    response.redirect("/dashboard");
  },
};

// export the dashboard module
export default dashboard;
