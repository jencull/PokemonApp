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
router.get('/pokemonlist/:id/deletePokemon/:pokemonid', pokemonlist.deletePokemon);
router.get('/trade', trade.index);

export default router;