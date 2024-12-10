const connection = require('../data/db.js')

const index = (req, res) => {
    const sql = 'SELECT * FROM `db-webapp`.movies'

    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Errore durante l\'esecuzione della query:', err.message)
            res.status(500).send('Errore nel server')
            return;
        }
        if (results.length == 0) {
            res.status(404).send('Nessun elemento trovato')
            return
        }

        res.json(results);
    });
}

const show = (req, res) => {
    const id = req.params.id
    const sql = "SELECT * FROM `db-webapp`.movies WHERE id=?"

    connection.query(sql, [id], (err, results) => {
        if (err) {
            console.error('Errore durante l\'esecuzione della query:', err.message);
            res.status(500).send('Errore nel server');
            return;
        }
        if (results.length == 0) {
            res.status(404).send(`Nessun elemento trovato con ID ${id}`)
            return
        }

        res.json(results);
    });
}


module.exports = {
    index,
    show,
}