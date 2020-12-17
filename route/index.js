const models = require('../models')

module.exports = app => {
app.get('/superheros', (req, res) =>
models
.superheros
.findAll()
.then(superheros => res.json(superheros))
);


app.post('/superheros', (req, res) =>
models
.superheros
.create(req.body)
.then(superheros => res.json(superheros))
);

app.put('/superheros/:id', (req, res) => {
    models
    .superheros
    .update(req.body, {
        where : {
            id : req.params.id
        }
    })
    .then(superhero => res.json(superhero))
})


app.get('/superheros/superhero/:id', (req, res) => {
    models
    .superheros
    .findByPk(req.params.id)
    .then(superhero => res.json(superhero))
})

app.delete('/superheros/:id', (req, res) => {
    models
    .superheros
    .destroy({
        where : {
            id : req.params.id
        }
    })
    .then(() => res.send('Superhero deleted'))
 })
}
