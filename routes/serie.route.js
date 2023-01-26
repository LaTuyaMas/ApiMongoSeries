const express = require('express');
const serieCtrl = require('../controllers/serie.controller');
const router = express.Router();

router.get('/', serieCtrl.getSeries);
router.get('/serie/:id', serieCtrl.getSerie);
router.post('/', serieCtrl.addSerie);
router.put('/:id', serieCtrl.updateSerie);
router.delete('/:id', serieCtrl.deleteSerie);

router.get('/categories',serieCtrl.getCategories);

module.exports = router;