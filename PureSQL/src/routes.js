import {Router} from "express"
import PasswordController from './app/controllers/PasswordController.js'

const router = Router()

router.get('/passwords', PasswordController.index)

router.get('/password/:id', PasswordController.show)

router.post('/password/new', PasswordController.store)

router.put('/password/:id', PasswordController.update)

router.delete('/password/:id', PasswordController.delete)

export default router