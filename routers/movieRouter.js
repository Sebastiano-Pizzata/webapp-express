import express from "express"

const router = express.Router()

import { index, show, update, destroy } from "../controllers/movieController.js"


router.get('/', index);

router.get('/:id', show);

router.patch('/:id', update)

router.delete('/:id', destroy);


export default router