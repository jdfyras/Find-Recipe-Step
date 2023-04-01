const recipes = require('../recipes.json')
module.exports = {
    getAll: async function (req, res) {
        res.json(recipes)
    },

    getById: async function (req, res) {
        if (!req.query.elapsedTime) return res.status(400).send('NOT_FOUND')
        let elapsedTime = parseInt(req.query.elapsedTime)
        if (elapsedTime === 0) return res.status(200).send({ index: 0 })
        let r = recipes.filter((item) => {
            if (item.id === +req.params.id) return item
        })
        if (!r || r.length === 0) return res.json({ index: 0 })

        let timers = r[0].timers
        let rs = { index: 0 }
        for (let index in timers) {
            if (elapsedTime <= timers[index]) {
                rs = { index: +index }
                break
            }
        }
        return res.json(rs)
        // res.status(400).send('NOT_FOUND')
    }
}
