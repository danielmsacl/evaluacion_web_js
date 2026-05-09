const express = require('express')
const db = require('./db'); 
const app = express()
const port = 3000
app.use(express.json());

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${3000}`);
});
//get de las tablas
app.get('/lotes', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM lotes_produccion');
    res.json(rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/polizas', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM seguros_polizas');
    res.json(rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//get con id
app.get('/lotes/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const [rows] = await db.query('SELECT * FROM lotes_produccion WHERE id = ?', [id]);
    
    if (rows.length === 0) {
      return res.status(404).json({ mensaje: 'Lote no encontrado' });
    }
    
    res.json(rows[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/polizas/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const [rows] = await db.query('SELECT * FROM lotes_produccion WHERE id = ?', [id]);
    
    if (rows.length === 0) {
      return res.status(404).json({ mensaje: 'Lote no encontrado' });
    }
    
    res.json(rows[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
