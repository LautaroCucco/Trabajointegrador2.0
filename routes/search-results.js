var express = require('express');
var router = express.Router();
var searchResultsControllers = require('../controllers/search-resultsControllers');

router.get('/search-results', searchResultsControllers.showSearchResults);


module.exports = router;