const express = require('express')
const db = require('./db');
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${3000}`);
});
/*
GET DE LAS TABLAS
*/
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
/*
GET DE LAS TABLAS CON ID
*/
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
    const [rows] = await db.query('SELECT * FROM seguros_polizas WHERE id = ?', [id]);

    if (rows.length === 0) {
      return res.status(404).json({ mensaje: 'poliza no encontrada' });
    }

    res.json(rows[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

/*
POST DE LAS TABLAS
*/

app.post('/lotes', async (req, res) => {
  const { codigo_lote, producto_nombre, fecha_fabricacion, fecha_vencimiento, cantidad_producida } = req.body;
  if (!codigo_lote || !producto_nombre || !fecha_fabricacion || !fecha_vencimiento || !cantidad_producida) {
    return res.status(400).json({ error: 'Faltan datos por ingresar' });
  }
  try {
    const query = 'INSERT INTO lotes_produccion (codigo_lote, producto_nombre, fecha_fabricacion, fecha_vencimiento, cantidad_producida) VALUES (?, ?, ?, ?, ?)';
    const [result] = await db.query(query, [codigo_lote, producto_nombre, fecha_fabricacion, fecha_vencimiento, cantidad_producida]);
    res.status(201).json({
      mensaje: 'Lote de produccion ingresado con éxito',
      id: result.insertId
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar en la base de datos' });
  }
});

app.post('/polizas', async (req, res) => {
  const { numero_poliza, titular, tipo_seguro, prima_mensual, fecha_inicio, fecha_fin, vigente } = req.body;
  if (!numero_poliza || !titular || !tipo_seguro || !prima_mensual || !fecha_inicio || !fecha_fin || !vigente) {
    return res.status(400).json({ error: 'Faltan datos por ingresar' });
  }
  const fechaInicioAdd = new Date(fecha_inicio);
  const fechaFinAdd = new Date(fecha_fin);

  if (fechaFinAdd <= fechaInicioAdd) {
    return res.status(400).json({
      error: 'La fecha de fin debe ser mayor a la fecha de inicio'
    });
  }
  try {
    const query = 'INSERT INTO seguros_polizas (numero_poliza, titular, tipo_seguro, prima_mensual, fecha_inicio, fecha_fin, vigente) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const [result] = await db.query(query, [numero_poliza, titular, tipo_seguro, prima_mensual, fecha_inicio, fecha_fin, vigente]);
    res.status(201).json({
      mensaje: 'Seguro ingresado con éxito',
      id: result.insertId
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar en la base de datos' });
  }
});

/*
Updates 
*/

app.put('/lotes/:id', async (req, res) => {
  const id = req.params.id;
  const { codigo_lote, producto_nombre, fecha_fabricacion, fecha_vencimiento, cantidad_producida } = req.body;

  if (!codigo_lote || !producto_nombre || !fecha_fabricacion || !fecha_vencimiento || !cantidad_producida) {
    return res.status(400).json({ error: 'Faltan datos por ingresar' });
  }
  try {
    const query = 'UPDATE lotes_produccion SET codigo_lote = ?, producto_nombre = ?, fecha_fabricacion = ?, fecha_vencimiento = ?, cantidad_producida = ? WHERE id = ?';
    const [result] = await db.query(query, [codigo_lote, producto_nombre, fecha_fabricacion, fecha_vencimiento, cantidad_producida, id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Lote no encontrado' });
    }

    res.json({
      mensaje: 'Lote actualizado con éxito',
      id: id
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar en la base de datos' });
  }
});

app.put('/polizas/:id', async (req, res) => {
  const id = req.params.id;
  const { numero_poliza, titular, tipo_seguro, prima_mensual, fecha_inicio, fecha_fin, vigente } = req.body;

  if (!numero_poliza || !titular || !tipo_seguro || !prima_mensual || !fecha_inicio || !fecha_fin || vigente === undefined) {
    return res.status(400).json({ error: 'Faltan datos por ingresar' });
  }
  const fechaInicioAdd = new Date(fecha_inicio);
  const fechaFinAdd = new Date(fecha_fin);

  if (fechaFinAdd <= fechaInicioAdd) {
    return res.status(400).json({
      error: 'La fecha de fin debe ser mayor a la fecha de inicio'
    });
  }
  try {
    const query = 'UPDATE seguros_polizas SET numero_poliza = ?, titular = ?, tipo_seguro = ?, prima_mensual = ?, fecha_inicio = ?, fecha_fin = ?, vigente = ? WHERE id = ?';
    const [result] = await db.query(query, [numero_poliza, titular, tipo_seguro, prima_mensual, fecha_inicio, fecha_fin, vigente, id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Poliza no encontrada' });
    }

    res.json({
      mensaje: 'Poliza actualizada con éxito',
      id: id
    });
  } catch (error) {
    console.error('=== ERROR EN PUT POLIZAS ===');
    console.error('Error completo:', error);
    console.error('Mensaje:', error.message);
    console.error('SQL:', error.sql);
    console.error('Código:', error.code);
    res.status(500).json({ error: 'Error al actualizar en la base de datos: ' + error.message });
  }
});
/*
DELETES 
*/

app.delete('/lotes/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const [result] = await db.query('DELETE FROM lotes_produccion WHERE id = ?', [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ mensaje: 'Lote no encontrado' });
    }

    res.json({ mensaje: 'Lote eliminado con éxito', id: id });
  } catch (error) {
    res.status(500).send(error.message);
  }
});
app.delete('/polizas/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const [result] = await db.query('DELETE FROM seguros_polizas WHERE id = ?', [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ mensaje: 'Error: La póliza no existe en la base de datos' });
    }

    res.json({
      mensaje: 'Póliza eliminada con éxito',
      id_eliminado: id
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});