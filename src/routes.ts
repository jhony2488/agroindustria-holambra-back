import express from 'express'

import authentication from './app/middlewares/auth'

import DefaultControllersUsers from './app/controllers/DefaultControllers'
import {
  GetProspects,
  DeletePropects,
  SetProspects,
  UpdatePropects,
} from './app/controllers/Prospects'

const router = express.Router()

//default
router.get('/', authentication, DefaultControllersUsers)

//prospects
router.get('/propects', authentication, GetProspects)
router.post('/propects', authentication, SetProspects)
router.put('/propects/:id', authentication, UpdatePropects)
router.patch('/propects/:id', authentication, UpdatePropects)
router.delete('/propects/:id', authentication, DeletePropects)

export default router
