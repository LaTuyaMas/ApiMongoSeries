const Categorie = require('../models/categories.model');

const categorieCtrl = {};

categorieCtrl.getCategories = async (req, res) => {
    const categories = await Categorie.find()
        .then((data) => res.json(data))
        .catch((err) => console.error(err));
};

categorieCtrl.getCategorie = async (req, res) => {
    const categorie = await Categorie.findById(req.params.id)
        .then((data) =>
        {
            if(data!=null) res.json(data)
            else res.json({status: 'Categorie doesnt exist'})
        })
        .catch(err => console.log(err));
}

categorieCtrl.addCategorie = async (req,res) => {
    const myCategorie = new Categorie(req.body);
    await myCategorie.save()
        .then(() =>
            res.json({status: 'Categorie Successfully Inserted'}))
        .catch(err => res.send(err.message));
}

categorieCtrl.updateCategorie = async (req, res) => {
    const categorie = req.body;
    await Categorie.findByIdAndUpdate(
        req.params.id,
        {$set: categorie},
        {new: true})
        .then((data) =>
        {

            if(data!=null) res.json({status: 'Categorie Successfully Updated',data})
            else res.json({status: 'Categorie doesnt exist'})
        }).catch(err => res.send(err.message));
}

categorieCtrl.deleteCategorie = async (req, res) => {
    await Categorie.findByIdAndDelete(req.params.id)
        .then((data) =>
        {
            if(data!=null) res.json({status: 'Categorie Successfully Deleted'})
            else res.json({status: 'Categorie doesnt exist'})
        }).catch(err => res.send(err.message));
}


module.exports = categorieCtrl;