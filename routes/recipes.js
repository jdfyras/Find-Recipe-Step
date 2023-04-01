var recipes = require('../recipes.json')
var recipesControllers = require('../controllers/recipesControllers.js')
var router = require('express').Router()

router.get('/step/:id', recipesControllers.getById)
router.get('/', recipesControllers.getAll)

module.exports = router
