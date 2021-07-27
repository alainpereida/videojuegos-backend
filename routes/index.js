const express = require('express');
// const passport = require('../auth/passport');
const router = express.Router();

const CompanyController = require('../controllers/CompanyController');

router.use(express.json());


router.get('/api/videogames/companys', CompanyController.findAll);
router.post('/api/videogames/companys', CompanyController.create);
router.delete('/api/videogames/companys', CompanyController.delete);

module.exports = router;