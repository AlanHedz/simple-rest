const express = require('express')
const router = express.Router()

const Item = require('../models/Item')

//get data /item
router.get('/', (req, res) => {
    Item.find({}, (err, items) => {
        if (err) res.status(500).send({ message: `Error al realizar la peticion: ${err}` })
        if (!items) res.status(404).send(`No existen productos`)
        res.status(200).send(items)
    })
})

// add data /itemg - POST
router.post('/', (req, res) => {
    let item = new Item()
    item.name = req.body.name
    item.price = req.body.price

    item.save((err, item) => {
        if (err) res.status(500).send({ message: `Erro al salvar en la base de datos: ${err}` })
        res.status(200).send('Producto guardado correctamente')
    })
})

// update data /item/:id - PUT
router.put('/:id', (req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, item) => {
        if (err) res.status(500).send({ message: `Error al actualizar en la base de datos:  ${err}` })
        res.status(200).json('Actualizado correctamente')
    })
})

router.get('/:id', (req, res) => {
    Item.findById(req.params.id, (err, item) => {
        if (err) res.status(500).send(`Error al buscar el producto ${err}`)
        if (!item) res.status(404).send(`El producto no existe`)
        res.status(200).send(item)
    })
})

// delete data /item/:id - DELETE
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id, (err, item) => {
        if (err) res.status(500).send(`Error al borrar el producto ${err}`)
        if (!item) res.status(404).send(`El producto no existe`)
        item.remove(err => {
            if (err) res.status(500).send(`Error al borrar el producto ${err}`)
            res.status(200).send(`El producto ha sido eliminado`)
        })
    })
})

module.exports = router