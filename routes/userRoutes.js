const express = require('express')

const Router = express.Router()

const Controller = require('../controllers/userController')

Router.get("/" , Controller.All)
Router.get("/:id" , Controller.One)
Router.post("/" , Controller.create)
Router.put("/:id" , Controller.update)
Router.delete("/:id" , Controller.remove)

module.exports = Router