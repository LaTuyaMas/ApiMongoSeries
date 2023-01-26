const Serie = require('../models/serie.model');

const serieCtrl = {};

// Función que devuelve todas las películas
serieCtrl.getSeries = async (req, res) => {
    const series = await Serie.find()
        .then((data) => res.json(data))
        .catch((err) => console.error(err));
};

// Función que devuelve una película dada un id
serieCtrl.getSerie = async (req, res) => {
    const serie = await Serie.findById(req.params.id)
        .then((data) =>
        {
            if(data!=null) res.json(data)
            else res.json({status: 'Movie doesnt exist'})
        })
        .catch(err => console.log(err));
}

// Añadir una nueva película a nuestra base de datos
serieCtrl.addSerie = async (req,res) => {
    const mySerie = new Serie(req.body);
    await mySerie.save()
        .then(() =>
            res.json({status: 'Serie Successfully Inserted '}))
        .catch(err => res.send(err.message));
}

// Función para actualizar una película con el id y la película con
// los nuevos datos
serieCtrl.updateSerie = async (req, res) => {
    const serie = req.body;
    await Serie.findByIdAndUpdate(
        req.params.id,
        {$set: serie},
        {new: true})
        .then((data) =>
        {

            if(data!=null) res.json({status: 'Movie Successfully Updated',data})
            else res.json({status: 'Movie doesnt exist'})
            }).catch(err => res.send(err.message));
        }

// Función para borrar una película dada un id
serieCtrl.deleteSerie = async (req, res) => {
    await Serie.findByIdAndDelete(req.params.id)
        .then((data) =>
        {
            if(data!=null) res.json({status: 'Serie Successfully Deleted'})
            else res.json({status: 'Serie doesnt exist'})
        }).catch(err => res.send(err.message));
}

// Función para obtener los diferentes géneros de la DB
serieCtrl.getCategories = async (req,res) => {
    await Serie.find().distinct('categories')
        .then((data) => res.json(data))
        .catch((err) => console.error(err));
}

module.exports = serieCtrl;