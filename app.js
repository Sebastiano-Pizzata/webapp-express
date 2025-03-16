import express from "express"

const app = express();
const port = process.env.SERVER_PORT;

import movieRouter from "./routers/movieRouter.js"
import imagePathMiddleware from "./middlewares/imagePath.js"

app.use(express.static('public'))

app.use(express.json())

app.use(imagePathMiddleware)

app.get('/', (req, res) => {
    res.send('Server movies aperto correttamente')
})


app.use('/movies', movieRouter);

app.listen(port, () => {
    console.log(`Server Movies in funzione sulla porta: ${port}`)
})