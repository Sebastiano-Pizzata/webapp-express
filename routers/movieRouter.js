import express from "express"

const router = express.Router()

import { index, show, destroy } from "../controllers/movieController.js"


router.get('/', index);

router.get('/:id', show);

router.get('/:id', destroy);


export default router