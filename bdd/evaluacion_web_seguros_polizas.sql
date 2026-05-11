-- MySQL dump 10.13  Distrib 8.0.45, for Win64 (x86_64)
--
-- Host: 10.32.0.78    Database: evaluacion_web
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `seguros_polizas`
--

DROP TABLE IF EXISTS `seguros_polizas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seguros_polizas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `numero_poliza` varchar(40) DEFAULT NULL,
  `titular` varchar(140) DEFAULT NULL,
  `tipo_seguro` varchar(60) DEFAULT NULL,
  `prima_mensual` decimal(12,2) DEFAULT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `vigente` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seguros_polizas`
--

LOCK TABLES `seguros_polizas` WRITE;
/*!40000 ALTER TABLE `seguros_polizas` DISABLE KEYS */;
INSERT INTO `seguros_polizas` VALUES (1,'POL-001-2024','Juan Pérez','Vida',150.50,'2024-01-01','2025-01-01',1),(2,'POL-002-2024','María González','Auto',85.30,'2024-01-15','2025-01-15',1),(3,'POL-003-2024','Carlos Rodríguez','Hogar',120.00,'2024-02-01','2025-02-01',1),(4,'POL-004-2024','Ana Martínez','Salud',250.75,'2024-02-10','2025-02-10',1),(5,'POL-005-2024','Luis Fernández','Vida',180.00,'2024-03-01','2025-03-01',0),(6,'POL-006-2024','Elena Sánchez','Auto',95.40,'2023-05-01','2024-05-01',0),(7,'POL-007-2024','Roberto Gómez','Hogar',135.60,'2024-03-15','2025-03-15',1);
/*!40000 ALTER TABLE `seguros_polizas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-05-11 13:44:38
