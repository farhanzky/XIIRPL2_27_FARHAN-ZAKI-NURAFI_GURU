const express = require('express')
const router = express.Router()

const gurucontroller = require('../Controllers/user')

router.get('/gurus', gurucontroller.index)
router.get('/guru/:id', gurucontroller.show)

  router.post('/guru', gurucontroller.store) 

  router.put('/guru/:id', gurucontroller.update)

  router.delete('/guru/:id', gurucontroller.delete)    

module.exports  = router