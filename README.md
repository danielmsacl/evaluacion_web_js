# evaluacion_web_js
# creación bdd
---

CREATE DATABASE IF NOT EXISTS evaluacion_web;
USE evaluacion_web;


CREATE TABLE IF NOT EXISTS lotes_produccion (
    id INT PRIMARY KEY AUTO_INCREMENT,
    codigo_lote VARCHAR(40),
    producto_nombre VARCHAR(140),
    fecha_fabricacion DATE,
    fecha_vencimiento DATE,
    cantidad_producida INT,
    estado_calidad VARCHAR(30)
);

CREATE TABLE IF NOT EXISTS seguros_polizas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    numero_poliza VARCHAR(40),
    titular VARCHAR(140),
    tipo_seguro VARCHAR(60),
    prima_mensual DECIMAL(12,2),
    fecha_inicio DATE,
    fecha_fin DATE,
    vigente BOOLEAN
);


INSERT INTO lotes_produccion (codigo_lote, producto_nombre, fecha_fabricacion, fecha_vencimiento, cantidad_producida, estado_calidad) VALUES
('LOT-2024-001', 'Yogur Natural', '2024-01-15', '2024-04-15', 5000, 'Aprobado'),
('LOT-2024-002', 'Yogur Fresa', '2024-01-20', '2024-04-20', 4800, 'Aprobado'),
('LOT-2024-003', 'Queso Fresco', '2024-02-01', '2024-05-01', 2000, 'Aprobado'),
('LOT-2024-004', 'Leche Pasteurizada', '2024-02-10', '2024-02-24', 10000, 'Aprobado'),
('LOT-2024-005', 'Mantequilla', '2024-02-15', '2024-05-15', 1500, 'En revisión'),
('LOT-2024-006', 'Yogur Vainilla', '2024-03-01', '2024-06-01', 5200, 'Aprobado'),
('LOT-2024-007', 'Queso Oaxaca', '2024-03-10', '2024-06-10', 1800, 'Rechazado'),
('LOT-2024-008', 'Crema Ácida', '2024-03-15', '2024-06-15', 2500, 'Aprobado');


INSERT INTO seguros_polizas (numero_poliza, titular, tipo_seguro, prima_mensual, fecha_inicio, fecha_fin, vigente) VALUES
('POL-001-2024', 'Juan Pérez', 'Vida', 150.50, '2024-01-01', '2025-01-01', TRUE),
('POL-002-2024', 'María González', 'Auto', 85.30, '2024-01-15', '2025-01-15', TRUE),
('POL-003-2024', 'Carlos Rodríguez', 'Hogar', 120.00, '2024-02-01', '2025-02-01', TRUE),
('POL-004-2024', 'Ana Martínez', 'Salud', 250.75, '2024-02-10', '2025-02-10', TRUE),
('POL-005-2024', 'Luis Fernández', 'Vida', 180.00, '2024-03-01', '2025-03-01', FALSE),
('POL-006-2024', 'Elena Sánchez', 'Auto', 95.40, '2023-05-01', '2024-05-01', FALSE),
('POL-007-2024', 'Roberto Gómez', 'Hogar', 135.60, '2024-03-15', '2025-03-15', TRUE);

SELECT * FROM lotes_produccion;

SELECT * FROM seguros_polizas;