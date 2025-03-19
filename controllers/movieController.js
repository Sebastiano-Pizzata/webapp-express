import connection from "../data/db.js"

function index(req, res) {
    const sql = 'SELECT * FROM movies'

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({
            error: 'Errore server INDEx function'
        })
        const movies = results.map(movie => {
            return {
                ...movie,
                image: req.imagePath + movie.image
            }
        })
        res.json(movies)
    })
}


function show(req, res) {
    const { id } = req.params;

    const moviesSql = 'SELECT * FROM movies WHERE id = ?'

    const reviewsSql = 'SELECT * FROM reviews WHERE movie_id = ?'

    connection.query(moviesSql, [id], (err, results) => {
        if (err) return res.status(500).json({
            error: "Errore server SHOW function"
        })

        if (results.length === 0) return res.status(404).json({
            error: "Movie non trovato"
        })
        const movie = results[0]


        connection.query(reviewsSql, [id], (err, reviewsResults) => {
            if (err) return res.status(500).json({
                error: "Errore server SHOw function"
            })

            movie.reviews = reviewsResults;

            res.json({
                ...movie,
                image: req.imagePath + movie.image
            })

        })

    })

}


function update(req, res) {
    const { id } = req.params;
    const { image } = req.body;

    const sql = 'Update movies SET image = ? WHERE id = ?'

    connection.query(sql, [image, id], (err) => {
        if (err) return res.status(500).json({
            error: "Errore Server UPDATE function"
        })
        res.json({ message: "Movie updated Successfully" })
    })
}


function destroy(req, res) {
    const { id } = req.params;

    const sql = 'DELETE FROM movies WHERE id = ?'

    connection.query(sql, [id], (err) => {
        if (err) return res.status(500).json({
            error: "Errore server DESTROY function"
        })

        res.sendStatus(204)
    })

}

export {
    index,
    show,
    update,
    destroy
}