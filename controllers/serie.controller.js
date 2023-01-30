const Serie = require('../models/serie.model');

const serieCtrl = {};

serieCtrl.getSeries = async (req, res) => {
    const series = await Serie.find()
        .then((data) => res.json(data))
        .catch((err) => console.error(err));
};

serieCtrl.getSerie = async (req, res) => {
    const serie = await Serie.findById(req.params.id)
        .then((data) =>
        {
            if(data!=null) res.json(data)
            else res.json({status: 'Serie doesnt exist'})
        })
        .catch(err => console.log(err));
}

serieCtrl.addSerie = async (req,res) => {
    const mySerie = new Serie(req.body);
    await mySerie.save()
        .then(() =>
            res.json({status: 'Serie Successfully Inserted'}))
        .catch(err => res.send(err.message));
}

serieCtrl.updateSerie = async (req, res) => {
    const serie = req.body;
    await Serie.findByIdAndUpdate(
        req.params.id,
        {$set: serie},
        {new: true})
        .then((data) =>
        {

            if(data!=null) res.json({status: 'Serie Successfully Updated',data})
            else res.json({status: 'Serie doesnt exist'})
            }).catch(err => res.send(err.message));
        }

serieCtrl.deleteSerie = async (req, res) => {
    await Serie.findByIdAndDelete(req.params.id)
        .then((data) =>
        {
            if(data!=null) res.json({status: 'Serie Successfully Deleted'})
            else res.json({status: 'Serie doesnt exist'})
        }).catch(err => res.send(err.message));
}

serieCtrl.getCategories = async (req,res) => {
    await Serie.find().distinct('categories')
        .then((data) => res.json(data))
        .catch((err) => console.error(err));
}


module.exports = serieCtrl;