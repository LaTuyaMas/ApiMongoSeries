const express = require('express');
const categorieCtrl = require('../controllers/categories.controller');
const router = express.Router();

router.get('/', categorieCtrl.getCategories);
router.get('/categorie/:id', categorieCtrl.getCategorie);
router.post('/', categorieCtrl.addCategorie);
router.put('/:id', categorieCtrl.updateCategorie);
router.delete('/:id', categorieCtrl.deleteCategorie);

module.exports = router;