'use strict';

// import express and initialise router
import express from 'express';
const router = express.Router();

//import controllers
import start from './controllers/start.js';
import dashboard from './controllers/dashboard.js';
import about from './controllers/about.js';
import pokemonlist from './controllers/pokemonlist.js';
import trade from './controllers/trade.js';

//connect routes to controllers
router.get('/', start.index);
router.get('/dashboard', dashboard.index);
router.get('/about', about.index)
router.get('/pokemonlist/:id', pokemonlist.index);
router.get('/trade', trade.index);

router.get('/pokemonlist/:id/deletePokemon/:pokemonid', pokemonlist.deletePokemon);
router.get('/dashboard/deletepokemonlist/:id', dashboard.deletepokemonlist);

router.post('/pokemonlist/:id/addpokemon', pokemonlist.addpokemon);
router.post('/dashboard/addpokemonlist', dashboard.addPokemonlist);


export default router;