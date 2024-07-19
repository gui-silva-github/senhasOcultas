import {Router} from 'express'

import * as HomeController from '../controllers/HomeController'

const router = Router()

router.get("/passwords", HomeController.passwords)

router.get("/password/:id", HomeController.password)

router.post("/password/new", HomeController.passwordNew)

router.put("/password/:id", HomeController.passwordUpdate)

router.delete("/password/:id", HomeController.passwordDelete)

export default router