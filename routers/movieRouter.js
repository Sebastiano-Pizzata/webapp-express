import express from "express"

const router = express.Router()

import { index, show, update, destroy, storeReview } from "../controllers/movieController.js"


router.get('/', index);

router.get('/:id', show);

router.patch('/:id', update)

router.delete('/:id', destroy);

router.post('/:id/reviews', storeReview)


export default router