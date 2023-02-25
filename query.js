const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'dvdrental',
  password: 'mengingatMU513',
  port: 5432,
});

const getAllFilms = async () => {
  const { rows } = await pool.query('SELECT * FROM film');
  return rows;
};
const getFilmById = async (id) => {
  const { rows } = await pool.query('SELECT * FROM film WHERE film_id = $1', [id]);
  return rows[0];
};

const getAllCategories = async () => {
  const { rows } = await pool.query('SELECT * FROM category');
  return rows.map((row) => row);
};

const getFilmsByCategory = async (category) => {
  const { rows } = await pool.query('SELECT * FROM film INNER JOIN film_category ON film.film_id = film_category.film_id WHERE category_id = $1', [category]);
  return rows;
};

module.exports = { getAllFilms, getFilmById, getAllCategories, getFilmsByCategory, query: (text, params) => pool.query(text, params) };
