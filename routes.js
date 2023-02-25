const express = require('express');
const router = express.Router();

const db = require('./query');

router.get('/', async (req, res) => {
  try {
    const films = await db.getAllFilms();
    
    res.status(200).json(films)
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/films/:id', async (req, res) => {
  try {
    const film = await db.getFilmById(req.params.id);
    if (!film) {
      return res.status(404).send('Film not found');
    }
    res.status(200).json(film);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});



router.get('/categories', async (req, res) => {
  try {
    const categories = await db.getAllCategories();
    res.send(categories);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/films/category/:category', async (req, res) => {
  try {
    const films = await db.getFilmsByCategory(req.params.category);
    res.send(films);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;




