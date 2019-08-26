const getDataWeekly = (req, res, db) => {
  db.select('*').from('weekly_records')
    .then(items => {
      if (items.length) {
        res.json(items)
      } else {
        res.json({ dataExists: 'false' })
      }
    })
    .catch(err => res.status(400).json({ dbError: 'db error' }))
}

const getDataTop = (req, res, db) => {
  db.select('*').from('top_records')
    .then(items => {
      if (items.length) {
        res.json(items)
      } else {
        res.json({ dataExists: 'false' })
      }
    })
    .catch(err => res.status(400).json({ dbError: 'db error' }))
}

module.exports = {
  getDataTop,
  getDataWeekly
}